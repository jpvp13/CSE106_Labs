from flask import Flask, request, jsonify, json, render_template
from flask_sqlalchemy import SQLAlchemy




app = Flask(__name__, static_url_path='', static_folder='')
app.config ['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///storage.sqlite'


db = SQLAlchemy(app)

class students(db.Model):
    fullName = db.Column( db.String(50), primary_key = True)
    grade = db.Column(db.Text, nullable = False)
    
    def __init__ (self, fullName, grade):
        self.fullName = fullName
        self.grade = grade


def makeDict(studentTable):
    dict = {}
    for student in studentTable:
        dict.update({student.fullName:student.grade})   #! returns json into a dictionary
    return dict

@app.route('/templates/index.html')
def home():
    db.create_all()
    return render_template('index.html')
    #! will create all tables
    


#!get all students
@app.route('/grades', methods = ['GET'])
def getAll():
    
   return makeDict(students.query.all())    #!sends json to JS,

#! add student
@app.route('/grades', methods = ['POST'])
def addStudent():
    data = request.get_json()
    fullName = data['name']
    Grade = data['grade']
    student = students(fullName, Grade)
    db.session.add(student)
    db.session.commit()
    return {fullName:Grade}



#! specific student
@app.route('/grades/<fullName>', methods = ['GET'])
def specificStudent(fullName):
    return makeDict(students.query.filter_by(fullName = fullName))


#! update specific students
@app.route('/grades/<fullName>', methods = ['PUT'])
def updateStudents(fullName):
    data = request.get_json()
    newGrade = data['grade']
    student = students.query.filter_by(fullName = fullName)
    student = student.update(dict(grade = newGrade))
    db.session.commit()
    return makeDict(students.query.all())


@app.route('/grades/<fullName>', methods = ['DELETE'])
def deleteStudent(fullName):
    
    db.session.delete(students.query.filter_by(fullName=fullName).first())
    db.session.commit()
    return makeDict(students.query.all())

if __name__ == '__app__':
    
    app.run(debug=True)