\# Docker DevOps Microservice



A DevOps-focused Docker project using Node.js, PostgreSQL, Dockerfile, Docker Compose, Docker networking, and persistent volumes.



\## Tech Stack



\- Node.js

\- Express.js

\- PostgreSQL

\- Docker

\- Docker Compose



\## Architecture



Browser → Node.js Container → PostgreSQL Container



\## Features



\- Dockerized Node.js API

\- PostgreSQL database container

\- Docker Compose multi-container setup

\- Persistent database volume

\- Container networking

\- Health check endpoint

\- Database connectivity endpoint



\## API Endpoints



| Endpoint | Description |

|---|---|

| `/` | Home route |

| `/health` | App health check |

| `/db` | Tests PostgreSQL connection |



\## Run Locally



```bash

docker compose up -d --build

