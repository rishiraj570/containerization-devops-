# Docker Containerization Assignment

## Overview
This project containerizes a Node.js backend and PostgreSQL database using Docker and docker-compose with macvlan networking and persistent volumes.

## Features
- PostgreSQL container with named volume
- Node.js backend container
- macvlan network with static IP
- Health endpoint
- POST and GET APIs
- Multi-stage Docker build
- Non-root container user

## How to run
docker compose up --build -d

## API
GET /health
POST /users
GET /users
