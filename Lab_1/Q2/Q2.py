sentence = input("Please enter a sentence: ")
repeat = int(input("How many times would you like for this sentence to be repeated?: "))

with open("Lab_1\Q2\CompletedPunishment.txt", "w") as file:
  for i in range(repeat):
    file.write(sentence + "\n")
