#part 1

num = list(map(float, input("Enter as many values as you'd like here: ").split()))

if len(num) != 0:
    print("I am inside of the main loop!")
    
    i = 0
    total = 0
    while i <= len(num)-1:
        print(num[i])
        total = total + num[i]
        i = i + 1


    print(total)
else:
    print("Please enter values when prompted!")


