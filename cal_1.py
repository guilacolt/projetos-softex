def calculate():
    calculadora = input("Qual operação você gostaria de realizar? aperte '1' para soma, '2' para subtração'3' para multiplicação e '4' para divisão. ")
    
    if calculadora !='1'  and calculadora !='2' and calculadora !='3' and calculadora !='4' :
        print("0")
    else:
        numero1 = int(input("Qual o primeiro número que você gostaria de utilizar?"))
        numero2 = int(input("Qual o segundo número que você gostaria de utilizar?"))
    
        if calculadora == '1':
            print(f"{numero1} + {numero2}")
            print(numero1 + numero2)
        elif calculadora == '2':
            print(f"{numero1} - {numero2}")
            print(numero1 - numero2)
        elif calculadora == '3':
            print(f"{numero1} * {numero2}")
            print(numero1 * numero2)
        elif calculadora == '4':
            print(f"{numero1} / {numero2}")
            print(numero1 / numero2)
        
calculate()