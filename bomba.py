import time 
def contador(t): 
    
    while t: 
        mins, secs = divmod(t, 60) 
        tempo = '{:02d}:{:02d}'.format(mins, secs) 
        print(tempo, end="\r") 
        time.sleep(1) 
        t -= 1
    print('KABUM!!!') 
t = input("Apresente os segundos de início: ") 
contador(int(t)) 
