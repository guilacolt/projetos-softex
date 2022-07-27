ano = True
while ano == True:
    try:
        nome = input("Qual o seu nome?")
        nascimento = int(input("Qual o ano do seu nascimento?"))
        if nascimento >= 1922 and nascimento <= 2021:
            idade = 2022 - nascimento
            print(f"Seu nome é {nome} e você tem ou completará em 2022 {idade} anos")
            ano = False
        if nascimento < 1922 or nascimento > 2021:
            print("Coloque um ano entre 1922 e 2021.")
    except:
        print("Você não colocou um número no seu ano de nascimento")