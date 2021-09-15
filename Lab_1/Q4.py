from os import read
import linecache


class Schedule:
    def __init__(self):
        self.courseText = "Course "
        self.creditText = "Number of Credits: "
        self.LectureDays = "Days of Lectures: "
        self.LectureTimes = "Lecture Time: "
        self.Stats = "Stat: on average, students get "
    def printInfo(self, classIndex, course, courseNum, courseName):
        print(self.courseText + "" + classIndex + ": " + course + courseNum + ": " + courseName)
         
view = Schedule()

with open("Lab_1/classesInput.txt", "r") as readFile:
    firstLine = int(readFile.readline())
    for startIndex in range(1, firstLine+1): #this is what splits the lines
        print("Inside of for loop, this is the " + str(startIndex) + " index")
        lineNumber = [0,1,2,3,4,5,6,7]
        store_line = []

        for readLine in range(2, 10):
            print("Inside for loop")
            testLine = readFile.readline(32) #this will be used at the end

            
            lineContents = readFile.readlines()
            store_line = lineContents[readLine]

            print(store_line)
            print(readLine)

            
        # for readLine in range(2, 10):
        #     # testLine = readFile.readline(32) #this will be used at the end
        #     LineInQuestion = linecache.getline('classesInput.txt', readLine)
        #     print("This is the " + str(readLine) + " line which reads " + LineInQuestion)
        
            
# print(store_line)
    # createFile = open("Lab_1/classSchedule.txt", "w+")
    
    # viewPrint = view.printInfo("1", "CSE", "31", "Data Structure")
    
    # for i in range(loopIndex):

    #     createFile.write(str(viewPrint) + "\n")

    # line = file.read()
    



# def __init__(self, courseDepartment, courseNumber, courseName, numCredits, lectDays, startTime, endTime, avgGrade):
        # self._courseDep = courseDepartment
        # self._courseNum = courseNumber
        # self._courseName = courseName
        # self._courseCredits = numCredits
        # self._lectureDays = lectDays
        # self._beginTime = startTime
        # self._endTime = endTime
        # self._averageGrade = avgGrade


#Resources
#https://www.geeksforgeeks.org/how-to-read-specific-lines-from-a-file-in-python/