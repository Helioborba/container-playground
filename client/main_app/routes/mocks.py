import os
import json
from main_app.helpers.errorHandlers.responses import ApiRaisedError
from flask import Blueprint, jsonify, request

mocks_blueprint = Blueprint('mocks', __name__)


@mocks_blueprint.route('/mock', methods=['GET']) 
def dataApi():
    fileDir = os.path.join(os.path.dirname('app'), 'static', 'mock.json') 
    print(fileDir)
    with open(fileDir) as json_file: 
        data = json.load(json_file) 
    return jsonify(data)

@mocks_blueprint.route('/mock_no_value', methods=['GET']) 
def noDataApi():
    data = {}
    return jsonify(data)

@mocks_blueprint.route('/mock_err', methods=['GET']) 
def dataErr():
    raise ApiRaisedError(500, "sevidor não tinha arquvios para enviar")

@mocks_blueprint.route('/mock_post', methods=['POST']) 
def dataSetA():
    input_json = request.get_json(force=True) 
    print('dados do cliente: ', input_json)
    resolve = {'message':'trabalhando'}
    return jsonify(resolve)