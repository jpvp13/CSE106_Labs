from matplotlib import colors
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

data = pd.read_csv('weather_data.txt')

# lineX = data.plot.line()

ax =plt.gca()
ax.minorticks_on()
data.plot(kind = 'line', x = 'date', y = 'actual_max_temp', ax = ax, color = 'r', label = "Actual_Max_Temp")
data.plot(kind = 'line', x = 'date', y = 'actual_min_temp', ax = ax, color = 'b', label = "Actual_Min_Temp")
plt.title("Graph showing Max and Min Temps over a year")
plt.grid()


# plt.plot(x , y)

# data.plot(y, kind = 'line', color = 'b')


plt.show()
