from flask import Flask, json, render_template, jsonify, request, url_for, redirect
import requests
from requests.api import post
from requests.structures import CaseInsensitiveDict
from werkzeug.datastructures import Headers
app = Flask(__name__)




@app.route('/')
def home():
    return render_template("index.html")



@app.route('/grades', methods = ['GET'])    #this handles get ALL students
def getAll():
    if request.method == 'GET':
        return redirect("https://amhep.pythonanywhere.com/grades")
    else:
        home()


@app.route('/grades/<fullName>', methods = ['GET']) #this returns specific student
def specificStudent(fullName):
    if request.method == 'GET':
        # q = request.args['fullNameGetSpecific']
        q = fullName
        print(q)
        # go = request.args['submit']
        return redirect("https://amhep.pythonanywhere.com/grades/" + q)
    else:
        home()



@app.route('/grades',methods = ['POST', 'GET'])
def addStudent():
    # if request.method == "POST":
    Name = request.get_json('fullNameADD')
    # Grade = request.get_json('gradeADD')

    # newData = {'name': Name, 'grade': Grade}
    # data = request.get_json()
    # data = request.json
    # response_content = None
    # print(Name + " " + Grade)
    url = 'https://amhep.pythonanywhere.com/grades'

    headers = {'Content-Type': 'application/json'}

    r = requests.post(url, data=json.dumps(Name), headers=headers)
    print(Name)
    # return redirect("https://amhep.pythonanywhere.com/grades")
    return jsonify(Name)

    


@app.route('/grades/<fullName>', methods = ['DELETE'])  #Deletes students
def deleteStudent(fullName):

    q = fullName
    return redirect("https://amhep.pythonanywhere.com/grades/" + q)



@app.route('/grades/<fullName>', methods = ['PUT']) #Updates students
def updateStudents(fullName):
    q = fullName
    return redirect("https://amhep.pythonanywhere.com/grades/" + q)




if __name__ == '__main__':
    app.run(debug=True)