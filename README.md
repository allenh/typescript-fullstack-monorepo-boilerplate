# Node Fullstack Monorepo Boilerplate

A fully Dockerized simple and modular Node-based full stack monorepo boilerplate.

## Requirements

* Node 20+
* NPM 9+
* Docker CLI

## Features

* Typescript
* Fully Dockerized application
* ESLint
* VSCode debugger configured for server
* Hot reload configured for both server and webapp
* Basic Github workflows configuration with E2E

## Technical Stack

### Server

* Koa 2
  * Koa Router
  * Koa Bodyparser
  * Koa JSON
* Vitest

### Webapp

* Vite
* React 18
* React Router
* Redux
* Playwright

## Installation

The project is set up as a Github template. To use this template follow this [Github Guide](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)

Because this is a monorepo so we need to run `npm install` three times in three different places to set up the local development environment. This mostly to stop the IDE from complaining.

* `./` project root folder  - installs modules for eslint
* `./server` project folder - installs modules for the server project
* `./webapp` project folder - installs modules for the webapp project

## Running the application

The application default URLs for the services:
* server: `localhost:3000`
* webapp: `localhost:8000`

Running the application on root folder: `npm build ; npm start`. This will invoke Docker to build the necessary images to run the containers.

It's also possible to run each service individually outside of docker:
* Server - `npm run dev`
* Webapp - `npm run dev`

## NPM Scripts

Root level:

```bash
# start docker compose
npm start
# build docker images
npm build
# build docker images then start application
npm run start:build
# remove all docker artifacts
npm run clean:docker
```

Server:

```bash
# start the server from ./dist
npm start
# builds the server, transpiled server is in ./dist
npm build
# runs development server with nodemon
npm run dev
```

Webapp:

```bash
# runs the react server with vite
npm run start
```

## Notes

* transpiled server files are served from `./server/dist` with the environment variable `NODE_PATH`

## Motivation

It's easy to find opinionated boilerplates for all kinds of preconfigured Node-based applications. Yet, it's difficult to find modular and minimalistic boilerplates. It's even more difficult to find a monorepo boilerplate of the same. As a result, this project was built.

This monorepo intends to be easy to build on with very minimal starter code. It also lets the user completely change some underlying frameworks such as swapping Koa to Express. I have also configured some development features such as hot code replacement and VSCode debugger. 
