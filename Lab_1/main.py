#part 1

num = list(map(int, input("Enter as many values as you'd like here: ").split()))
if num != None:
    
    i = 0
    total = 0
    while i <= len(num)-1:
        print(num[i])
        total = total + num[i]
        i = i + 1


    print(total)
else:
    print("Please enter values when prompted!")


