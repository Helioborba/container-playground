import redis
conn = redis.from_url('redis://:eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81@redis:6379')

# For debugging inside container
#rq info --url redis://:eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81@redis:6379 -R
conn.ping()


