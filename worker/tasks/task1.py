import requests
import time
from model.city import City, db
from sqlalchemy.orm import sessionmaker
Session = sessionmaker(bind=db)
session = Session()

def count_words_at_url(url):
    resp = requests.get(url)
    return len(resp.text.split())

def get_all_db():
    city = None
    query_city = session.query(City).all()
    newCityData = []
    print("query",query_city)
    for city in query_city:
        newCityData.append({
            "id": city.id,
            "name": city.name,
            "coordinate_x": city.coordinate_x,
            "coordinate_y": city.coordinate_y
        })
    time.sleep(10)
    session.close_all()
    db.dispose()
    return newCityData 

def add_db(data):
    #query_city = City.query.all()
    city = City(data['city'], data['coords'])
    session.add(city)
    session.commit()
    session.close_all()
    db.dispose()
    return {"status":"200"}