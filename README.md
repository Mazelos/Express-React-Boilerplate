# Basic full-stack Boilerplate 

This is a boilerplate to build a full stack web application using React, Node.js and Express.
It's configured using different technologies such as : 

- **Webpack** for *bundling*.
- **Babel** for *transpiling*.
- **Webpack Dev Server** as a server used during the *development*.
- **Nodemon** as *Cli tool* to run the server.



## Getting started

- [Requirements](#requirements)

- [Installation](#installation)
- [Starting a Dev Server](#starting-a-dev-server)
- [Create a production build](#create-a-production-build)



###  Requirements

- Mac OS X, Windows, or Linux.
- [Node.js](https://nodejs.org/) v12.18.0 or newer and Npm package (that comes with Node.js).



### Istallation 

First clone the repository move into the project

```shell
git clone https://github.com/Mazelos/Express-React-Boilerplate.git my-app
cd my-app
```

Install all the dependencies

```shell
npm install
```



### Starting a Dev Server

```shell
npm start
```

Inside the project folder run the command above , under the hood will concurrently run `npm run client` and `npm run server` .  

Those two commands can also be executed on their own

- `npm run client` will open a server on port *8080* and will take advantage of *hot-reloading*.
- `npm run server` will open a server with *Nodemon* on port *8000*.



### Create a Production Build 

```shell
npm run build
```

Inside the project folder run the command above , this will create a *dist* folder which contains a bundle file for all the transpiled and minified Javascript code, the html file and a minified css file.

