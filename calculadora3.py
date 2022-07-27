
print("Bem vindos a calculadora!")

sair = False
while sair == False:
    operacao = input("Qual a operação desejado: '1' soma, '2' subtração, '3' multiplicação, '4' divisão, 0 para sair da calculadora. ")
    
    if operacao == '0':
        print("Até a próxima")
        sair = True
    if operacao != '1' and operacao != '2' and operacao != '3' and operacao != '4':
        print("Essa operação não existe! Escolha entre '1', '2', '3', '4', '0'")
    else:
        numero1 = int(input("Qual o primeiro número?"))
        numero2 = int(input("Qual o segundo número?"))
        if operacao == '1':
            operacao = (numero1 + numero2)
            print(operacao)
        elif operacao == '2':
            operacao = (numero1 - numero2)
            print(operacao)
        elif operacao == '3':
            operacao = (numero1 * numero2)
            print(operacao)
        elif operacao == '4':
            operacao = (numero1 / numero2)
            print(operacao)
