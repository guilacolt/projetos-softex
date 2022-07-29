import pandas as pd
import numpy as np

df = pd.read_csv("./notas_alunos.csv")
df['media'] = (df['nota_1'] + df['nota_2']) / 2
df['situacao'] = np.where((df['media'] < 7) | (df['faltas'] > 5), 'Reprovado', 'Aprovado')
#as condicionais dentro do numpy, é and = & e or = |
print(df)
df.to_csv('alunos_situacao.csv') 

print(f"Maior número de faltas: {df['faltas'].max()}")
print(f"Média geral das notas dos alunos: {df['media'].median()}")
print(f"Maior média: {df['media'].max()}")







