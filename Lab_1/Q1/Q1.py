#part 1
try:
  num = list(map(float, input("Enter as many values as you'd like here seperated by a space: ").split() ))
  # print(num)

  if len(num) < 2:
    print("Please enter more than 1 number!")
except:
    print("Please enter a number!")
else:
  if len(num) >= 2:
  
      i = 0
      total = 0
      while i <= len(num)-1:
          # print(num[i])
          total = total + num[i]
          i = i + 1
      print("Total sum of your enters values: ",total)
