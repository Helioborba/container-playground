FROM python:3.9-alpine3.14

WORKDIR /serverWorker
COPY ./ ./

RUN apk add --no-cache --virtual .build-deps g++ python3-dev libffi-dev openssl-dev postgresql-dev && \
    apk add --no-cache --update python3 

RUN pip install --upgrade pip
RUN yes | pip install -r requirements.txt
# why is this not used?
## R_ THIS WILL CREATE A PROBLEM IF NOT USED FOR MIGRATIONS, THE ENV WILL NOT BE FLASK MAIN BUT RATHER APP
RUN chmod +x ./flask-run-win.sh 


CMD ["python","-u","./app.py"]

