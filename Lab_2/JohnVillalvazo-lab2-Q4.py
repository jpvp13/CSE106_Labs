import pandas as pd
import matplotlib.pyplot as plt

data = pd.read_csv('weather_data.txt')

#! this prints the line graph of max vs min temps

ax =plt.gca()
ax.minorticks_on()
data.plot(kind = 'line', x = 'date', y = 'actual_max_temp', ax = ax, color = 'r', label = "Actual_Max_Temp")
data.plot(kind = 'line', x = 'date', y = 'actual_min_temp', ax = ax, color = 'b', label = "Actual_Min_Temp")
plt.title("Graph showing Max and Min Temps over a year")
plt.grid()



#! this prints the histgram of actual precipiation
data.hist('actual_precipitation', histtype= 'bar', bins = 6 )
plt.title("Graph showing actual precipitation")
# plt.grid()
plt.style.use('ggplot')



plt.show()
