import pandas as pd
import operator

data = pd.read_csv('weather_data.txt', sep=",")



print("\n_________________________________________________")
print(" (A) What day(s) had the highest actual precipitation? \n")


highest  = data.actual_precipitation.max()

print("The highest value in actual precipitation is: ", highest)

findDate = data.loc[:,"actual_precipitation"] == highest 

print("The date that had the highest acutal precipitation is: ",  data.loc[findDate, "date"])



#max precipitation is 2.65



print("\n_________________________________________________")
print(" (B) What was the average actual max temp for July 2014? \n")

# print("This is to see what gets printed: ", data.loc[:,"date"].str.contains("^.*.*"))

average = data.loc[0:30,"actual_max_temp"].mean()
print("The average actual max temp for July 2014 is: ", average)

# searchDate = data.loc[:,"date"].str.contains(r'(?!$)')
# print("searchDate is: ", searchDate)
# average = data.actual_max_temp.mean() 

# print("The average actual max temp is: ", average)

# search = data.loc[0:30, "date"]
# test = data.loc[0:30, "actual_max_temp"]
# print(test)

# search = data.loc[data["date"].str.contains('2014-07-..')]

print("\n_________________________________________________")
print(" (C) What days was the actual max temp the record max temp? \n")

condition = data.loc[:, "actual_max_temp"] == data.loc[:, "record_max_temp"]

# print(condition)
findHotDates = data.loc[condition, "date"]

print("The dates where the actual max temp was the record max temp are as follow:\n",findHotDates)


print("\n_________________________________________________")
print(" (D)How much did it rain in October 2014? \n")


rain = data.loc[92:122, "actual_precipitation"].sum()
print("The total amount of rain in October 2014 was: ", rain)



print("\n_________________________________________________")
print(" (E) What day(s), if any, was the actual low temperature below 60 degrees and actual max temperature above 90 degrees on the same day? \n")

#actual low temp <= 60  3
#actual max temp >= 90  4

condition = (data.loc[:,"actual_min_temp"] < 60).all() & (data.loc[:,"actual_max_temp"] > 90).all()
# condition2 = condition == True & data.loc
# print(data.loc[condition, 'date'])
if condition == True:
    print("The day where both the temperate was the actual min temp and actual max temp is: ", data.loc[condition, 'date'])
elif condition == False:
    print("There is no day where the temperature was both the lowest and highest on the same day.")

#resource for 3E
#https://www.learndatasci.com/solutions/python-valueerror-truth-value-series-ambiguous-use-empty-bool-item-any-or-all/

