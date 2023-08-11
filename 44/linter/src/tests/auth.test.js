import { faker } from '@faker-js/faker';
import chai from 'chai';
import supertest from 'supertest';
import initServer from './index.js';

const expect = chai.expect;
let jwt = '';

describe('Testing Auth Endpoints Success', () =>
{
    before(async function()
    {
        const { app, db } = await initServer();
        const application = app.callback();
        this.requester = supertest.agent(application);
        this.app = app;
        this.db = db;
        this.payload = {};
    });
    after(async function()
{
        await this.db.close();
        this.requester.app.close(() =>
{
          console.log('Conexión cerrada');
        });
    });
    beforeEach(async function()
{
        this.timeout(2000);
        await new Promise(resolve => setTimeout(resolve, 500));
    });
    it('Creacion de cuenta /api/sessions/signup', function()
    {
        this.payload = {
            firstName: `${faker.person.firstName()} Ana Maria`,
            lastName: `${faker.person.lastName()} Ana Maria`,
            email: faker.internet.email(),
            age: 20,
            password: '12345678'
        };

        return this.requester
            .post('/api/sessions/signup')
            .send(this.payload)
            .then(result =>
            {
                const { _body, status } = result;

                expect(status).to.be.equals(201);
                expect(_body.user.email).to.be.equals(this.payload.email);
                expect(_body.message).to.be.equals('User created.');
            }
        );
    });

    it('Login de cuenta /api/sessions/login', function()
    {
        const payload = {
            email: this.payload.email,
            password: this.payload.password
        };

        return this.requester
            .post('/api/sessions/login')
            .send(payload)
            .then(result =>
            {
                const { _body, status } = result;

                expect(status).to.be.equals(200);
                expect(_body.message).to.be.equals('Login success!');

                jwt = _body.accessToken;
            }
        );
    });

    it('Current /api/sessions/current', function()
    {
        const payload = {
            email: this.payload.email,
            password: this.payload.password
        };

        return this.requester
            .get('/api/sessions/current')
            .set('Authorization', `Bearer ${jwt}`)
            .then(result =>
            {
                const { _body, status } = result;
                expect(status).to.be.equals(200);
                expect(_body.payload.email).to.be.equals(this.payload.email);
            }
        );
    });
});

describe('Testing Auth Endpoints Fails', () =>
{
    before(async function()
{
        const { app, db } = await initServer();
        const application = app.callback();
        this.requester = supertest.agent(application);
        this.app = app;
        this.db = db;
    });
    after(async function()
{
        await this.db.close();
        this.requester.app.close(() =>
{
          console.log('Conexión cerrada');
        });
    });
    beforeEach(async function()
{
        this.timeout(2000);
        await new Promise(resolve => setTimeout(resolve, 500));
    });
    it('Creacion de cuenta /api/sessions/signup', function()
    {
        const payload = {
            firstName: 'Ana',
            lastName: 'Ana',
            email: faker.internet.email(),
            age: 20,
            password: '12345678'
        };

        return this.requester
            .post('/api/sessions/signup')
            .send(payload)
            .then(result =>
            {
                const { status } = result;

                expect(status).to.be.equals(400);
            }
        );
    });

    it('Error format email /api/sessions/login', function()
    {
        const payload = {
            email: 'Invalid email',
            password: 'incorrect password'
        };

        return this.requester
            .post('/api/sessions/login')
            .send(payload)
            .then(result =>
            {
                const { _body, status } = result;

                expect(status).to.be.equals(400);
                expect(_body.message[0].message).to.be.equals(payload.email);

                jwt = _body.accessToken;
            }
        );
    });

    it('User dont exist /api/sessions/login', function()
    {
        const payload = {
            email: 'martin@gmail.com',
            password: 'incorrect password'
        };

        return this.requester
            .post('/api/sessions/login')
            .send(payload)
            .then(result =>
            {
                const { status } = result;

                expect(status).to.be.equals(404);
            }
        );
    });
});
