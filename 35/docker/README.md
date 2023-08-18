
# Comandos de inicio

```shell
npm run command -- addUser -e admin@admin.com -fn admin -ln admin -p 12345678 -a 32 -ia true
```

## Docker Commands

Construir imagen
* docker build -t coder39740:1.2 .

Listar las imágenes de docker
* docker images

Mostrar los procesos (contenedores) que se están ejecutando
* docker ps -a

Crear contendor y correrlo en el puerto 8081 con el nombre node_coder
* docker run -p 8081:8081 --name node_coder -d coder39740:1.2

Destruir el contenedor
* docker rm node_coder

Parar la ejecución del contenedor
* docker stop node_coder

Comenzar la ejecución del contenedor ya creado previamente
* docker start node_coder

Mostrar los logs del contenedor, para salir presionar Ctrl + C
* docker logs -f node_coder

## Docker Compose

Levantar los contenedores
* docker-compose up

Parar los contenedores
* docker-compose stop

Remover los contenedores
* docker-compose down
