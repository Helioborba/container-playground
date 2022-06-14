from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import os

# start app
app = Flask(__name__) # Setar Dir padrão para futuros templates assim como criação do APP

# config the db needs
basedir = os.path.abspath(os.path.dirname(__file__)) # Criação de PATH para futuros items
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://user:any@postgres_db/postgres'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'mysecretkey'

db = SQLAlchemy(app)
Migrate(app, db)



