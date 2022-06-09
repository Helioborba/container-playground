
import redis
from flask import Flask, jsonify
from rq import Worker, Queue, Connection
import time
import sys
from tasks.task import count_words_at_url
from redis import Redis
from datetime import datetime
from core.coreWorker import conn
sys.path.insert(0, '/')
# listen = ['3200']
#conn = redis.Redis(host=os.environ['REDIS_HOST'], port=os.environ['REDIS_PORT'], password=os.environ['REDIS_PASSWORD'])
# conn.ping()

# datetime object containing current date and time
now = datetime.now()

# dd/mm/YY H:M:S
dt_string = now.strftime("%d/%m/%Y %H:%M:%S")



app = Flask(__name__) # Setar Dir padrão para futuros templates assim como criação do APP
# Routes
@app.route('/', methods=['GET']) # home
def home():
    return None

@app.route('/gets',methods=['GET','POST'])
def gedata():
    q = Queue(connection=conn)
    workers = Worker.all(connection=conn)
    #job = q.enqueue(count_words_at_url,'http://nvie.com', job_id='5000', result_ttl=5000)
    job = q.enqueue(count_words_at_url, 'http://nvie.com', result_ttl=5000)
    job.meta['creation_date'] = dt_string
    job.save_meta()
    print(f'Job id: {job.id}')
    json = []
    json.append(
        {  
            "value: ": job.result,
            "job_ID: ": job.id,
            "status: ": job.get_status(),
            "name":"hey",
            "x":1,
            "y":1
        }
    )
    time.sleep(2)
    json.append(
        {  
            "value: ": job.result,
            "job_ID: ": job.id,
            "status: ": job.get_status(),
            "name":"hey",
            "x":1,
            "y":1
        }
    )
    job2 = q.jobs
    for q in job2:
            resQ = None
            try:
                resQ = q.meta['creation_date']
            except: # this will only mean that the meta is not visible
                resQ = 'No creation date added' 
            json.append(
            {
                "queue": {
                    "value: ": q.result,
                    "job_ID: ": q.id,
                    "status: ": q.get_status(),
                    "creation date: ": resQ
                }  
            })
    # print("ressssssss",job2.result)
    for x in workers:
        for q in job2:
            resQ = None
            try:
                resQ = q.meta['creation_date']
            except: # this will only mean that the meta is not visible
                resQ = 'No creation date added' 
            json.append(
            {
                "worker": {
                    "worker Name: ":x.name,
                    "worker State: ":x.state,
                    "working time: ":x.total_working_time,
                    "fail rate: ":x.failed_job_count
                },
                "queue": {
                    "value: ": q.result,
                    "job_ID: ": q.id,
                    "status: ": q.get_status(),
                    "creation date: ": resQ
                }  
            }
    )
    return jsonify(json)


# Start the app as the main
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3200, debug=True)

