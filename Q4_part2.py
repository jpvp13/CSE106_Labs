from matplotlib import colors
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

data = pd.read_csv('weather_data.txt')

# lineX = data.plot.line()

ax =plt.gca()
ax.minorticks_on()
data.hist('actual_precipitation')
plt.title("Graph showing actual precipitation")
plt.grid()


# plt.plot(x , y)

# data.plot(y, kind = 'line', color = 'b')


plt.show()
