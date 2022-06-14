
from dataclasses import dataclass
from sqlalchemy import create_engine, Column, Integer, String, Text
from sqlalchemy.orm import declarative_base

db = create_engine('postgresql+psycopg2://user:any@postgres_db/postgres') #/city
Base = declarative_base()
@dataclass # Utilizado para corrigir problemas com JSON quando o sql-alchemy vai interpretar os dados retornados.
class City(Base):

    __tablename__ = 'city'
    
    id = Column(Integer,primary_key=True)
    name = Column(Text)
    coordinate_x = Column(Integer)
    coordinate_y = Column(Integer)

    def __init__(self, name:str, coordinates:dict) -> None:
        self.name = name
        self.coordinate_x = coordinates['x']
        self.coordinate_y = coordinates['y']

class CityProperties(City):
    
    def __init__(self, name:str, buildings:int, stations:int, rivers:bool) -> None:
        self.name = name
        self.buildings_t = buildings
        self.stations_t = stations
        self.rivers = rivers