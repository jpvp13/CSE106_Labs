findWord = input("Please enter a word to cross check file with: ").upper() #upper will make the inputed word into ALL CAPs

print("The word you chose is: ", findWord)

timeFound = 0

with open("Lab_1/Q3/PythonSummary.txt", "r") as file:

    line = file.read().upper() #upper will make all read words from file into ALL CAPS
    
    for i in line:
        justWords = line.replace(i, "") #iterates through each line and removes all punctuation
    
    
    timeFound = line.count(findWord) 
    print('Number of occurrences of the word :', timeFound)


#Resource
#https://thehelloworldprogram.com/python/python-string-methods/