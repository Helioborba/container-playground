# ​I here for sonic, were sonic, this sonic?
from flask import jsonify,request
from rq import Worker, Queue
import time
import random #only for test
from tasks.task1 import count_words_at_url, get_all_db
from datetime import datetime
from core.coreWorker import conn
from model.city import City
from main import app, db

# datetime object containing current date and time
now = datetime.now()
dt_string = now.strftime("%d/%m/%Y %H:%M:%S")

# Routes
@app.route('/', methods=['GET']) # home
def home():
    return None

@app.route('/gets',methods=['GET','POST'])
def gedata():

    # datetime object containing current date and time
    now = datetime.now()

    # dd/mm/YY H:M:S
    dt_string = now.strftime("%d/%m/%Y %H:%M:%S")

    # creates the job
    q = Queue(connection=conn)
    workers = Worker.all(connection=conn)
    job = q.enqueue(count_words_at_url, 'http://nvie.com', result_ttl=5000)
    job.meta['creation_date'] = dt_string
    job.save_meta()
    
    # Returns the data of the job
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
            "worker": {
                "worker_name":workers[0].name,
                "state":workers[0].state,
                "birth":workers[0].birth_date,
                "job count":workers[0].successful_job_count,
                "working time":workers[0].total_working_time
            }
        }
    )

    return jsonify(json)


@app.route('/add',methods=['POST'])
def add():
    data = request.get_json()
    # q = Queue(connection=conn)
    # job = q.enqueue(add_db, data, result_ttl=5000)
    # job.meta['creation_date'] = dt_string
    # job.save_meta()
    # status = job.result

    # city = City(data['city'], data['coords'])
    # db.session.add(city)
    # db.session.commit()
    city = City(data['city'], data['coords'])
    db.session.add(city)
    db.session.commit()
    # status = add_db(data)
    return jsonify({"status":"200"})

@app.route('/search',methods=['POST'])
def search():
    data = request.get_json()
    query_city = City.query.filter(City.name.like(f"{data['city']}%"))

     # Creates the return data
    newCityData = []
    for city in query_city:
        newCityData.append({
            "id": city.id,
            "name": city.name,
            "coordinate_x": city.coordinate_x,
            "coordinate_y": city.coordinate_y
        })

    return jsonify({"city":newCityData})

@app.route('/del',methods=['POST'])
def delet():
    # find the city by id then delete it
    data = request.get_json()
    query_city = City.query.get(data['id'])
    
    # Creates the return data
    newCityData = []
    try:
        newCityData.append({
            "error": False,
            "id": query_city.id,
            "name": query_city.name,
            "coordinate_x": query_city.coordinate_x,
            "coordinate_y": query_city.coordinate_y
        })

        db.session.delete(query_city)
        db.session.commit()
    except:
        newCityData.append({
            "error":'Error ocurred when deleting the city, is the request modified?'
        })

    

    # returns the deleted city data
    return jsonify({"city":newCityData})

@app.route('/all', methods=['GET'])
def all():
    # Create redis queue
    q = Queue(connection=conn)
    job = q.enqueue(get_all_db,job_id='queue get', result_ttl=5000)
    job.meta['creation_date'] = dt_string
    job.save_meta()
    newCityData = job.result
    time.sleep(random.randint(3, 7))
    # Used only to simulate some loading time    
    return jsonify({"city":newCityData})


# @app.route('/db',methods=['GET','POST'])
# def db_access():
#     query_city = City.query.all()
#     json = []
#     for value in query_city:
#         json.append(
#             {
#                 "name":value.name,
#                 "x":value.coordinate_x,
#                 "y":value.coordinate_y
#             }
#         )
        
# Start the app as the main
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3200, debug=True)

