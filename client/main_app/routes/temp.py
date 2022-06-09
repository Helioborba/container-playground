from flask import Blueprint,render_template,jsonify,send_file,request
from main_app.model.city import City
import requests

temp_blueprint = Blueprint('temp',__name__)

@temp_blueprint.route('/list', methods=['GET'])
def list():
    query_city = City.query.all()

    json = []
    for value in query_city:
        json.append(
            {
                "name":value.name,
                "x":value.coordinate_x,
                "y":value.coordinate_y
            }
        )
    
    return jsonify(json)



@temp_blueprint.route('/image', methods=['GET'])
def image():
    return send_file('static/images/building.svg', mimetype='image/svg')



@temp_blueprint.route('/matches', methods=['GET', 'POST'])
def matches():
    d = requests.get('http://nginx:80/server/gets')
    return jsonify(d.json())


@temp_blueprint.route('/extract', methods=['GET', 'POST'])
def extract():
   
    json = []
    # time.sleep(2)
    # json.append(
    #     {
    #         "name":job.result,
    #         'id':job.id
    #     }
    # )
    
    return jsonify(json)