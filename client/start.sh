#!/bin/sh
docker stop $(docker ps -q)
docker build -t "borba/flask-app:latest" -f "Dockerfile.dev"  ./
docker run -it -p 8000:8000 -v ${PWD}:/app borba/flask-app

