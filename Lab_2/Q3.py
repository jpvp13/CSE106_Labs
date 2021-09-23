import pandas as pd

data = pd.read_csv('Lab_2/Part_3/weather_data.txt', sep=",", header=None)



data.value_counts('date')
print(data)