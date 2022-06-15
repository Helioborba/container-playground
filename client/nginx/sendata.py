# Utilizado para enviar vários requests ao endpoint
#('{$c_produto}',{$t_ativo},'{$descricao}',{$n_fiscal},'{$n_serial}', {$localizacao}, '{$date}', {$id_usuario}
from random import randrange
# import time
import time
import requests
import json
from datetime import datetime

c_produto = "21312313"
t_ativo = 1 # 1-6
descricao = "texto"
n_fiscal = 1231231
n_serial = "12312312"
localizacao = 1 # 1-6

# Dics com os dados
ativos = {   
    4:"notebook",
	14:"celular",
    24:"mouse",
    34:"teclado",
    44:"fone",
    54:"monitor",
    64:"all in one"
}

localizacoes = {
	4:"São Paulo",
	14:"Cuiaba",
    24:"Fortaleza",
    34:"Rio De Janeiro",
    44:"Paraná"
}

usuarios = {
    4:"joaovc@witsolutions.com",
    14:"leonardo@witsolutions.com",
    24:"gabriel@witsolutions.com",
    34:"willyan@witsolutions.com",
    44:"tamara@witsolutions.com"
    #55:"fra@f" < teste
}

funcionarios = {
    4: "JOÃO VINÍCIUS DA COSTA",
    14:	"LEONARDO AUGUSTO COELHO FERREIRA",
    24:	"GABRIEL BARBOSA TEIXEIRA",
    34:	"WILLYAN LOPES DE CARVALHO",
    44: "TAMARA SILVA DIAS"
}

# arrays com os ID da DB
ativosArray = [4,14,24,34,44,54,64]  
localArray = [4,14,24,34,44]
usuariosArray = [4,14,24,34,44]
funcionariosArray = [4,14,24,34,44]

# criar textos supporte
textInicializador = ["Outro","Mais um","Foi adicionado um","Foi colocado mais um "]
textCelular = ["Lenovo","Xiaomi","Samsung","Apple"]
textCompFinalizador = ["quebrado.","velho.","usado.","novo.","utilizado."]

# recebe um numero entre 0-6 e retorna o ID (4-14-24,etc)
#  funções supporte
def getAtivo():
    return ativosArray[randrange(0,len(ativosArray))]

def getLocalizacao():
    return localArray[randrange(0,len(localArray))]

def getUsuario():
    return usuariosArray[randrange(0,len(usuariosArray))]

def randLarge(): # seriais/produtos/fiscal
    return randrange(9999,99999999)

# Preparar textos, recebe o numero do ativo
def prepararDescricao(ativo):
    # default para todos
    descricao = f"{textInicializador[randrange(0,len(textInicializador))]} {ativos[ativo]} {textCompFinalizador[randrange(0,len(textCompFinalizador))]}"

    # Custom para marcas
    if ativo == 14: # celulares
        descricao = f"{textInicializador[randrange(0,len(textInicializador))]} {ativos[ativo]} da {textCelular[randrange(0,len(textCelular))]} {textCompFinalizador[randrange(0,len(textCompFinalizador))]}"
    
    return descricao

def criaData():
    date_string = f"2022-{randrange(1,5)}-{randrange(1,30)}"
    return date_string 

class RandomObject:
    """ Utilizado para criar um objeto randomico contendo dados para o post """
    def __init__(self):
        self.c_produto = f"{randLarge()}" #string
        self.t_ativo = getAtivo() # 0 - 6
        self.n_fiscal = randLarge() # int
        self.n_serial = f"{randLarge()}" # string
        self.localizacao = getLocalizacao() # 0 - 4
        self.descricao = prepararDescricao(self.t_ativo)
        self.usuario = getUsuario() # 0 - 4
        self.date = criaData()

    def postRandomData(self):
        """ Criar o post apos iniciar objeto, lembrar que retorna um json"""
        return json.dumps({'c_produto':self.c_produto, 't_ativo':self.t_ativo,'descricao':self.descricao,'n_fiscal':self.n_fiscal,'localizacao':self.localizacao,'id_usuario':self.usuario,'n_serial':self.n_serial,'data':self.date})

# Criar 20 Objetos e fazer o post no localhost
# time.sleep(10)
# objectArray = []
# for _ in range(0,):
#     time.sleep(4)
#     obj = RandomObject()
#     r = requests.post('http://localhost:5000/client_php/model/adicionar.php',data=obj.postRandomData())
#     list = r.json()
#     print(f"A resposta do servidor foi: {list['MSG']}")
#     objectArray.append(obj)
time.sleep(10)
objectArray = []
while True:
    time.sleep(1)
    obj = RandomObject()
    r = requests.post('http://localhost:5000/client_php/model/adicionar.php',data=obj.postRandomData())
    list = r.json()
    print(f"A resposta do servidor foi: {list['MSG']}")
    objectArray.append(obj)