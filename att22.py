class Cadastro:
    def __init__ (self, nome, cadastro, nascimento, naturalidade, genero):
        self.name = nome
        self.age = cadastro
        self.ano = nascimento
        self.nature = naturalidade
        self.gender = genero
        
        print("seu nome: ", self.name)
        print("Idade: ", self.age - self.ano)
        print("Natural de: ",self.nature )
        print("Gênero: ", self.gender)
        #lembrar que nessa parte é diferente as definições respectivas do que eu quero
        return
novocadastro = Cadastro ("Guilherme", 2022, 1998, "Pernambuco", "masculino")
novocadastro2 = Cadastro ("Paloma",2022, 1998, "Pernambuco", "feminina")
novocadastro3 = Cadastro ("Shoyo", 2022, 2017, "Pernambuco", "canino")
#lembrar sempre de definir as strings com ""
