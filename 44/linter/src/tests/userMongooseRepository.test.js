import dotenv from 'dotenv';
dotenv.config();

import { faker } from '@faker-js/faker';
import DbFactory from '../data/factories/dbFactory.js';
import chai from 'chai';

const expect = chai.expect;

const db = DbFactory.create(process.env.DB);

import UserMongooseRepository from '../data/repositories/mongoose/userMongooseRepository.js';

describe('Testing User Mongoose Repository', () =>
{
    before(function()
{
        db.init(process.env.DB_URI);
        this.userRepository = new UserMongooseRepository();
    });
    after(function()
{
        db.drop();
        db.close();
    });
    beforeEach(async function()
{
        this.timeout(2000);
        await new Promise(resolve => setTimeout(resolve, 500));
    });
    it('El repositorio debe ser una instancia de UserMongooseRepository', function()
{
        expect(this.userRepository instanceof UserMongooseRepository).to.be.ok;
    });
    it('El repositorio debe devolver un arreglo', function()
{
        return this.userRepository
            .paginate({ limit: 5, page: 1 })
            .then(result =>
            {
                expect(Array.isArray(result.users)).to.be.equals(true);
                expect(result.pagination.limit).to.be.equals(5);
            }
        );
    });
    it('El repositorio debe poder crear un user', function()
{
        const user = {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            age: 18,
            isAdmin: false,
            password: 12345678
        };

        return this.userRepository
            .create(user)
            .then(result =>
            {
                expect(result.firstName).to.be.equals(user.firstName);
                expect(result.email).to.be.equals(user.email);
            }
        );
    });
});

