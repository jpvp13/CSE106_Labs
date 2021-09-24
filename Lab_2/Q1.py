import numpy as np

print("\n")
print(" (A) Create and print a 4x2 matrix with values ranging from 2 to 10\n")

#! (A)
simpArr= np.arange(2,10).reshape(4,2)
print(simpArr)


print("_________________________________________________")
print(" (B) Create and print a 8x8 matrix and fill it with a checkerboard pattern\n")

#! (B)
checkerArr = np.ones((8,1), dtype = int)

# i, j = 0
checkerArr[1::2,::2] = 0    #??
checkerArr[::2,1::2] = 0    #??


# final = bitget(times +1, 1)

print(checkerArr)

print("_________________________________________________")
print(" (C) Get the unique values of a list\n")

#! (C)
#& Find Unique Values



List = [10, 20, 10, 30, 20, 40, 20, 20, 10, 30, 0, 50, 10]

find = np.array(List)

print(np.unique(find))

print("_________________________________________________")
print(" (D) Get the values greater than 37 in the list\n")


#! (D)
#& get values greater than 37

List2 = [6, 75, 9, 82, 36, 42, 59, 3, 52, 1, 32, 68, 93, 4, 27, 85, 0, -3, 57]

array = np.array(List2) #put list into a array

greaterThan = np.where(array > 37)  #finds the position where the array value is larger than requested value (37)

print(array[greaterThan])   #pull the value out of array where the index is larger than the value


print("_________________________________________________")
print(" (E) Convert the values of a list of values in Centigrade into Fahrenheit degrees\n")


#! (E)
#& convert centigrade into Fahrenheit

List3 = [0, 12, 45.21 ,34, 99.91]

array3 = np.array(List3)

print("The value of list3 in fahrenheit are: " , (5*(array3))/9 - (5*32)/9)


print("_________________________________________________")


