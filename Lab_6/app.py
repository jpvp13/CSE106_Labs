from os import error
from flask import Flask, json, render_template, jsonify, request, url_for, redirect
import requests
from requests.api import post
from requests.structures import CaseInsensitiveDict
from werkzeug.datastructures import Headers
app = Flask(__name__, static_url_path='', static_folder='')


def write_json(dictonary):
    jFile = open("storage.json", "w")
    json.dump(dictonary, jFile)
    jFile.close()

def load(fileName):
    with open(fileName) as f:
        data = json.load(f)
    f.close()
    return data

# def errorScreen():
#     text = ('<p> oops, nothing matches that input </p>')

#     return 

jsonFile = load("storage.json")


@app.route('/')
def home():
    return render_template("index.html")



@app.route('/grades', methods = ['GET'])    #this handles get ALL students
def getAll():
    
    return jsonFile
    


@app.route('/grades/<fullName>', methods = ['GET']) #this returns specific student
def specificStudent(fullName):
        if fullName in jsonFile:
            return {fullName: jsonFile[fullName]}

        # else: 
        #     errorScreen() #! change this if error



@app.route('/grades',methods = ['POST'])
def addStudent():
    requested = request.get_json()
    jsonFile[requested['name']] = requested['grade']
    write_json(jsonFile)
    return jsonFile
    


@app.route('/grades/<fullName>', methods = ['DELETE'])  #Deletes students
def deleteStudent(fullName):

    if fullName in jsonFile:
        del jsonFile[fullName]
        write_json(jsonFile)
        return jsonFile
    # else:
    #     return errorScreen()



@app.route('/grades/<fullName>', methods = ['PUT']) #Updates students
def updateStudents(fullName):
    if fullName in jsonFile:
        requested = request.get_json()
        jsonFile[fullName] = requested['grade']
        write_json(jsonFile)
        return jsonFile
    # else:
    #     return errorScreen()




if __name__ == '__main__':
    
    app.run(debug=True)