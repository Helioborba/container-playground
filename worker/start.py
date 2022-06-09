import redis
from rq import Worker, Queue, Connection
import sys

# conn = redis.Redis(host=os.environ['REDIS_HOST'], port=os.environ['REDIS_PORT'], password=os.environ['REDIS_PASSWORD'])
conn = redis.from_url('redis://:eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81@redis:6379')
#rq info --url redis://:eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81@redis:6379 -R
q = Queue(connection=conn)
conn.ping()

with Connection(conn):
        qs = sys.argv[1:] or ['default']

        w = Worker(qs,name='strider')
        w.work()