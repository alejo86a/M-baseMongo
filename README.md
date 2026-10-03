# M-baseMongo

A small **Node.js + Express + MongoDB (Mongoose)** practice project demonstrating a basic REST API connected to MongoDB.

## What this is

This is a minimal learning exercise (`package.json` name: `programa1`) to practice wiring up Express with Mongoose/MongoDB, built around a single simple schema (`Datos`: `etiqueta` + `Numeros`). It is not a real application, just a small base/template for exploring Node + Mongo basics.

## Tech stack

- Node.js, Express
- MongoDB with Mongoose (`useMongoClient`)
- `chalk` for colored console logs
- `cors`, `helmet`, `compression`, `morgan` middlewares
- Mocha + Chai for testing

## API

- `GET /` — health check, returns `{ message: 'Pong' }`
- `POST /datos` — create a new `Datos` document
- `GET /datos` — list all `Datos` documents
- `GET /datos/:etiqueta` — find a document by its `etiqueta` field

## How to run

```bash
yarn install   # or npm install
node app.js
```

The server listens on port `8080` and expects a running local MongoDB instance (connection string configured in `app/constant.js`).

## Context

Personal practice project for learning the basics of a Node/Express/MongoDB REST API; not a production system.
