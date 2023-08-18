import express from 'express';
import { engine } from 'express-handlebars';
import { resolve } from 'path';
import { Server } from 'socket.io';

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

        const httpServer = app.listen(SERVER_PORT, () => {
          console.log(`Conectado al server en el puerto: ${SERVER_PORT}`);
        });
        const socketServer = new Server(httpServer);

        socketServer.on('connection', socket =>
        {
          console.log('Nuevo cliente conectado');

          socket.on('message', (data) => {
            console.log(data);
          });

          socket.emit('evento_para_socket_individual', 'Este mensaje solo lo debe recibir el socket');

          socket.broadcast.emit('evento_para_todos_menos_el_socket_actual', 'Este evento lo veran todos los sockets conectados, MENOS el socket actual desde el que se envio el mensaje');

          socketServer.emit('evento_para_todos', 'Este mensaje lo reciben todos los sockets conectados.');

          socket.on('chatRoom1', (data) =>
          {
            console.log(data);

            socket.broadcast.emit('chatRoom1', data);
          });
        });
    }
    catch (e)
    {
        console.log("Error: ");
        console.log(e);
    }
})();
