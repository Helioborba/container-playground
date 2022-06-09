#!/bin/sh
docker build -t borba/pod_client:latest ./client
docker build -t borba/pod_db:latest ./db


docker run -it borba/pod_client
docker run -it borba/pod_client