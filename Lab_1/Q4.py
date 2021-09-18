from os import close, read
from io import TextIOWrapper
from typing import Text

class schedule_template:
    def __init__(self, scheduleNumber, courseDept, courseNum, courseName, credits, lectDays, startTime, endTime, stat):
        self._scheduleNum = scheduleNumber
        self._courseDept = courseDept
        self._courseNum = courseNum
        self._courseName = courseName
        self._credits = credits
        self._lectdays = lectDays
        self._startTime = startTime
        self._endTime = endTime
        self._stat = stat

    def printSchedule1(self):

        if self._scheduleNum == 1:
            line = open("Lab_1/classSchedule.txt", "w")

            line.write("COURSE " + str(self._scheduleNum) + ": " + self._courseDept + self._courseNum + ": " +  self._courseName + "\n")
            line.write("Number of Credits: " + self._credits + "\n")
            line.write("Days of Lectures: " + self._lectdays + "\n")
            line.write("Lecture Time: " + self._startTime + " - " + self._endTime + "\n")
            line.write("Stat: on average, students get " + self._stat + "% in this course" + "\n")
            line.write("\n")
        line.close()
    
    def printSchedule2(self):

        if self._scheduleNum == 2:
            line = open("Lab_1/classSchedule.txt", "a+")

            line.write("COURSE " + str(self._scheduleNum) + ": " + self._courseDept + self._courseNum + ": " +  self._courseName + "\n")
            line.write("Number of Credits: " + self._credits + "\n")
            line.write("Days of Lectures: " + self._lectdays + "\n")
            line.write("Lecture Time: " + self._startTime + " - " + self._endTime + "\n")
            line.write("Stat: on average, students get " + self._stat + "% in this course" + "\n")
            line.write("\n")
        line.close()

    def printSchedule3(self):
        if self._scheduleNum == 3:
            line = open("Lab_1/classSchedule.txt", "a+")

            line.write("COURSE " + str(self._scheduleNum) + ": " + self._courseDept + self._courseNum + ": " +  self._courseName + "\n")
            line.write("Number of Credits: " + self._credits + "\n")
            line.write("Days of Lectures: " + self._lectdays + "\n")
            line.write("Lecture Time: " + self._startTime + " - " + self._endTime + "\n")
            line.write("Stat: on average, students get " + self._stat + "% in this course" + "\n")
            line.write("\n")
        line.close()

    

class findFirstLine:    #returns the first line
    with open("Lab_1/classesInput.txt", "r") as line:
        first_line = line.readline()
    line.close()



with open("Lab_1/classesInput.txt", "r+") as readFile:
    amtSchedules = findFirstLine()  #returns 3
    text = readFile.readlines()
    
    # print("First Line: ", amtSchedules.first_line)
    amountOfLines = [len(text)] #returns 25


    count = 1

    while count < int(amtSchedules.first_line) + 1: #i < 3
        # print("Switch between the 3 schedules: ", count)
        i = 1
        
        if count == 1:
            # print("print 1")
            a = text[i].strip()
            b = text[i + 1].strip()
            c = text[i + 2].strip()
            d = text[i + 3].strip()
            e = text[i + 4].strip()
            f = text[i + 5].strip()
            g = text[i + 6].strip()
            h = text[i + 7].strip()

            classOne = schedule_template(count, a, b, c, d, e, f, g, h)
                # print("Value is ", x)
            classOne.printSchedule1()
            

        if count == 2:
            # print("print 2")
            a = text[i +8].strip()
            b = text[i + 9].strip()
            c = text[i + 10].strip()
            d = text[i + 11].strip()
            e = text[i + 12].strip()
            f = text[i + 13].strip()
            g = text[i + 14].strip()
            h = text[i + 15].strip()

            classOne = schedule_template(count, a, b, c, d, e, f, g, h)
                # print("Value is ", x)
            classOne.printSchedule2()

        if count == 3:
            # print("print 3")
            a = text[i + 16].strip()
            b = text[i + 17].strip()
            c = text[i + 18].strip()
            d = text[i + 19].strip()
            e = text[i + 20].strip()
            f = text[i + 21].strip()
            g = text[i + 22].strip()
            h = text[i + 23].strip()

            classOne = schedule_template(count, a, b, c, d, e, f, g, h)
                # print("Value is ", x)
            classOne.printSchedule3()



        count = count + 1
    readFile.close()
        
    
# print(amtSchedules)
#Resources
#https://www.geeksforgeeks.org/how-to-read-specific-lines-from-x-file-in-python/
#https://tutorial.eyehunts.com/python/python-file-modes-open-write-append-r-r-w-w-x-etc/