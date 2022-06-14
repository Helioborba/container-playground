# import requests

from model.city import City, db
# from sqlalchemy.orm import sessionmaker
# # Session = sessionmaker(bind=db)
# # session = Session()


def count_words_at_url():
    '''Only reference, the real task is inside the worker'''
    return None

def get_all_db():
    '''Only reference, the real task is inside the worker'''
    return None


def add_db(data):
    #query_city = City.query.all()
    city = City(data['city'], data['coords'])
    db.session.rollback()
    db.session.add(city)
    db.session.commit()
    # session.close_all()
    # db.dispose()
    return {"status":"200"}

# import requests

# from model.city import City, db
# from sqlalchemy.orm import sessionmaker
# Session = sessionmaker(bind=db)
# session = Session()

# def count_words_at_url(url):
#     resp = requests.get(url)
#     return len(resp.text.split())

# def get_all_db():
#     query_city = City.query.all()
#     newCityData = []
#     for city in query_city:
#         newCityData.append({
#             "id": city.id,
#             "name": city.name,
#             "coordinate_x": city.coordinate_x,
#             "coordinate_y": city.coordinate_y
#         })
#     return newCityData 

# def add_db(data):
#     #query_city = City.query.all()
#     city = City(data['city'], data['coords'])
#     session.add(city)
#     session.commit()
#     return {"status":"200"}