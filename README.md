# DeliverTrack authentication microservice

## Overview

This is a simple authentication service that uses JWT tokens to authenticate users. It is built with Node.js, Express, Redis, PostgreSQL and Prisma.

## Configuration

The configuration file:

* `config.js`: contains the configuration for the service

## Docker

The Dockerfile:

* `Dockerfile`: contains the instructions to build the Docker image

## Usage

Build the docker image with the `docker-compose.yml` build file at the project root level.

## API

### `POST` /api/auth/login

```json
{
    "email": "user@example.com",
    "password": "password"
}
```

### `POST` /api/auth/register

```json
{
    "email": "user@example.com",
    "password": "password",
    "name": "User Name"
}
```
