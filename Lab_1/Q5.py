
class gradeMachine(dict):
    def __init__(self):
        self = dict()
    def addJson(self, data, key):
        with open("Lab_1/grades.txt", "r+") as totFile:
            totFile.truncate(0)
            totFile.close()


        with open("Lab_1/grades.txt", "a") as file:
            file.write("{\n")
            for key in data:
                file.write(f'  "{key}":{data[key]},\n')
            
            file.write("}")
            file.close()
            
    def userActions(self, data):
        inputedData = {}    #this is where users input will be stored

        edit = int(input("If you want to add a new student enter 0 | If you want to search for a students grade enter 1| If you want to edit a students information enter 2 | If you want to delete a students grade enter 3 : "))

        if edit == 0:
            name = input("Enter new students name: ")
            grade = input("Enter students grade (ex. x.x): ")
            inputedData[name] = grade
            data.update(inputedData)
            dictClass.addJson(data, name)
            print(name + "'s grade: ", data[name])
            print()

        elif edit == 1:
            name = input("Enter the students exact full name you are looking for: ")
            print(f"{name}'s grade: {data[name]}")

        elif edit == 2:
            name = input("Enter the name of the students record that you want to edit: ")
            editGrade = input("Enter the new grade for this student: ")
            data[name] = editGrade
            dictClass.addJson(data,name)
            print(name + "'s new grade is: " + editGrade)
            print()
        elif edit == 3:
            name = input("Enter the students exact full name of whose grade you are wanting to erase: ")
            data[name] = None
            dictClass.addJson(data, name)
            print(name + "'s grade has been deleted")
            print("")



#Start here "Main"
with open("Lab_1/grades.txt", "r+") as file:
    data = {}  #imports grades.txt into a dictionary

    dictClass = gradeMachine()
    print("Importing data...")
    for lineNum in file:
        if lineNum != "{\n" and lineNum != "}":
            lineNum = lineNum.strip()
            key , value = lineNum.split(":")
            key = key.strip('""')
            value = value.strip(",")
            data[key] = value
            # print("Inside of loops: ", data)
    # print(data)

    dictClass.userActions(data)

