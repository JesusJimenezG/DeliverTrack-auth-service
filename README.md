# Authentication Service for the NERP (Node.js, Express, Redis, PostgreSQL) backend project

## Overview

This is a simple authentication service that uses JWT tokens to authenticate users. It is built using the PERN (PostgreSQL, Express, Redis, Node) stack.

## Configuration

The configuration file:

* `config.js`: contains the configuration for the service

## Docker

The Dockerfile:

* `Dockerfile`: contains the instructions to build the Docker image

## Usage

Build the docker image with the `docker-compose.yml` build file at the project root level.

## API

### POST /api/auth/login

#### Request

```json
{
    "email": "user@example.com",
    "password": "password"
}
```
