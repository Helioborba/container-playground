FROM python:3.9-alpine3.14

WORKDIR /client
COPY ./ ./

RUN apk add --no-cache --virtual .build-deps g++ python3-dev libffi-dev openssl-dev && \
    apk add --no-cache --update python3 

RUN pip install --upgrade pip
RUN yes | pip install -r requirements.txt
# flask run não esta sendo utilizado?
RUN chmod +x ./flask-run-win.sh 

CMD ["python","-u","./app.py"]

