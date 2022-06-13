from sqlalchemy import create_engine, Table, Column, Integer, String, MetaData
meta = MetaData()
import os

basedir = os.path.abspath(os.path.dirname(__file__))
engine = create_engine('sqlite:///'+os.path.join(basedir,'main','data.sqlite'), echo = True)

students = Table(
   'city', meta, 
   Column('id', Integer, primary_key = True), 
   Column('name', String), 
   Column('coordinate_x', Integer), 
   Column('coordinate_y', Integer)
)

meta.create_all(engine)
