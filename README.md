# aikoanime.online aikoanime.tv aikoanime.com

## How to run the frontend build

```sh
$ cd client
$ yarn
$ yarn start
```

before you push your code on github make sure that you passed all checks.

```sh
$ yarn finish
```
if you'd like to fix eslint code automatically

```sh
$ yarn eslint-fix
```

## How to run the docker container in a backend folder

You must have docker on your machine

```sh
$ cd backend
$ docker stop $(docker ps -aq)
$ docker-compose up -d
```

If you're working on windows then docker will ask you permission for sharing files between the container and local machine.
If you don't have a password from system you have to add it.

![](https://github.com/neyron163/aikosaiko.online/blob/master/2.jpeg)
![](https://github.com/neyron163/aikosaiko.online/blob/master/1.jpeg)