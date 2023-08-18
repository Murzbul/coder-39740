import express from 'express';
import { engine } from 'express-handlebars';
import { resolve } from 'path';

void(async() =>
{
    try
    {
        const SERVER_PORT = 8083;

        const app = express();
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));

        const viewsPath = resolve('src/views');

        app.engine('handlebars', engine({
          layoutsDir: `${viewsPath}/layouts`,
          defaultLayout: `${viewsPath}/layouts/main.handlebars`,
        }));
        app.set('view engine', 'handlebars');
        app.set('views', viewsPath);

        app.get('/', function(req, res)
        {
            res.render('greetings', { name: 'Lucia', title: 'My First Page' })
        });

        app.get('/food', function(req, res)
        {
            const food = [
              {
                name: 'Galletitas',
                price: 100,
              },
              {
                name: 'Milanesa',
                price: 200,
              },
              {
                name: 'Pizza',
                price: 2,
              }
            ];

            res.render('food', { name: 'Lucia', title: 'Food', food, isAdmin: true })
        });

        app.listen(SERVER_PORT, () => {
          console.log(`Conectado al server en el puerto: ${SERVER_PORT}`);
        });
    }
    catch (e)
    {
        console.log("Error: ");
        console.log(e);
    }
})();
