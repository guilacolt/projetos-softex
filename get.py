#Crie uma classe e insira nela, no mínimo, dois atributos, os quais devem ter um método acessor (get) 
#e um método modificador (set) para cada. Defina um objeto para cada atributo e elabore um construtor para criar alguma regra.

from turtle import color


class Celular():
    def __init__(self, cor, marca):
        self.cor = cor
        self.marca = marca
    
    def get_cor(self):        #usando get para chamar a atributo
        return self.cor
    
    def set_cor(self, c):   #usando set alterar o atributo 
        self.cor = c
    
    def get_marca(self):
        return self.marca
    
    def set_marca(self, b):
        self.marca = b

#agora coloquemos o objeto teste
phone = Celular("branca", "Motorola")
#testar se consigo chamar

print("telefone de cor {} e marca {}".format(phone.get_cor(), phone.get_marca()))

#até aqui foi, agora vamos atualizar os valores
color = input("Qual a cor que você gostaria seu celular? ")
phone.set_cor(color)

brand = input("Qual a marca que você gostaria seu celular? ")
phone.set_marca(brand)
#agora vamos testarr se funcionou 

print("telefone de cor {} e marca {}".format(phone.get_cor(), phone.get_marca()))
#funfou!




