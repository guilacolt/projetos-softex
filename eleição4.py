import enum
class Candidatos(enum.Enum):
    candidato_a = 889
    candidato_b = 847
    candidato_c = 515
    branco = 0
candidatos = {"candidato A":0, "candidato B":0, "candidato C": 0, "branco": 0 , "nulo": 0}

votação = True
while votação:
    print("Apresentamos a urna eleitoral para eleições para o chanceler da república galática.")
    print("O cidadão tem as seguintes escolhas: para candidato A digite '889' , para candidato B digite '847', para candidato C digite '515' e se deseja branco digite '0'.")
    try:
        voto = int(input())
        if voto == Candidatos.candidato_a.value:
            candidatos["candidato A"] += 1
        elif voto == Candidatos.candidato_b.value:
            candidatos["candidato B"]+= 1
        elif voto == Candidatos.candidato_c.value:
            candidatos["candidato C"]+= 1
        elif voto == Candidatos.branco.value:
            candidatos["branco"]+= 1
        else:
            candidatos["nulo"]+= 1
        escolha = input("Você gostaria de votar novamente? 's' para sim e 'n' para não? ")
        if escolha == 'n':
            votação = False
    except:
        print("Você não digitou nenhuma das opções, vote novamente.")
print(f"O novo chancelar da republica galática é: {max(candidatos, key=candidatos.get)}")
print("Votos para candidato A: {}".format(candidatos["candidato A"]))
print("Votos para candidato B: {} ".format(candidatos["candidato B"]))
print("Votos para candidato C: {} ".format(candidatos["candidato C"]))
print("Votos para branco: {} ".format(candidatos["branco"]))
print("Votos para nulo: {} ".format(candidatos["nulo"]))
