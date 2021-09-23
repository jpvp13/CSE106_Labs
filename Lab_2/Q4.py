import pandas as pd
import matplotlib.pyplot as plt

data = pd.read_csv('Lab_2/Part_3/weather_data.txt', sep=",", header=None)


plt.plot(data)