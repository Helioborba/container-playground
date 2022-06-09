from crypt import methods
import os
from unicodedata import name

import redis
from flask import Flask, jsonify
from rq import Worker, Queue, Connection
import time
import sys
from tasks.task import count_words_at_url
from redis import Redis
from datetime import datetime
sys.path.insert(0, '/')
listen = ['3200']
conn = redis.Redis(host=os.environ['REDIS_HOST'], port=os.environ['REDIS_PORT'], password=os.environ['REDIS_PASSWORD'])
q = Queue(connection=conn)
conn.ping()

# datetime object containing current date and time


# dd/mm/YY H:M:S




# app = Flask(__name__) # Setar Dir padrão para futuros templates assim como criação do APP
# print('root',app.root_path)

# @app.route('/', methods=['GET']) #home
# def home():
#     job = q.enqueue(count_words_at_url, 'http://nvie.com')
#     print(f'Job id: {job.id}')
#     json = []
#     json.append(
#         {
#             "name":"hey",
#             "x":1,
#             "y":1
#         }
#     )
#     time.sleep(2)
#     job2 = q.fetch_job(job.id)
#     json.append(
#         {
#             "name":"hey",
#             "x":1,
#             "y":[job.id,job2.result]
#         }
#     )
    
#     return jsonify(json)

# def startWorker():
#     with Connection(conn):
#         qs = sys.argv[1:] or ['default']

#         w = Worker(qs,name='strider')
#         w.work()
#"password='eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81'"
if __name__ == '__main__':
    #with Connection(conn):
        # queue = Queue('default')
        # w = Worker([queue],connection=conn, name='foo')
        # w.work()
        # queue = Queue('default')
        # workers = Worker.all(queue=queue)
        # worker = workers[0]
        # print("name",worker.name)
        #app.run(host='0.0.0.0', port=3200, debug=True)
    with Connection(conn):
        qs = sys.argv[1:] or ['default']

        w = Worker(qs,name='strider')
        w.work()
    # with Connection(conn):
    #     worker = Worker(list(map(Queue, listen)),name='archer')
    #     worker.work()