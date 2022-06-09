from crypt import methods
import os
from unicodedata import name

import redis
from flask import Flask, jsonify
from rq import Worker, Queue, Connection
from tasks.task import count_words_at_url
from redis import Redis
from datetime import datetime

conn = redis.from_url('redis://:eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81@redis:6379')
#rq info --url redis://:eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81@redis:6379 -R
conn.ping()


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
# if __name__ == '__main__':
    #with Connection(conn):
        # queue = Queue('default')
        # w = Worker([queue],connection=conn, name='foo')
        # w.work()
        # queue = Queue('default')
        # workers = Worker.all(queue=queue)
        # worker = workers[0]
        # print("name",worker.name)
        #app.run(host='0.0.0.0', port=3200, debug=True)
    # with Connection(conn):
    #     qs = sys.argv[1:] or ['default']

    #     w = Worker(qs,name='strider')
    #     w.work()
    # with Connection(conn):
    #     worker = Worker(list(map(Queue, listen)),name='archer')
    #     worker.work()