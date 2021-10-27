from __future__ import print_function
import sys
from flask import Flask, request, jsonify, json
from flask.templating import render_template
from flask_sqlalchemy import SQLAlchemy




app = Flask(__name__, static_url_path='', static_folder='')
app.config ['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///storage.db'


db = SQLAlchemy(app)

class students(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    fullName = db.Column( db.String(50), nullable = False)
    grade = db.Column(db.Text, nullable = False)



def __init__ (self, name, grade):
    self.name = name
    self.grade = grade


@app.route('/')
def home():
    return render_template('index.html')
#! will create all tables
# db.create_all()

#!get all styudents
@app.route('/grades', methods = ['GET'])
def getAll():
    
    return students.query.all()

#! add student
@app.route('/grades', methods = ['POST'])
def addStudent():
    # fullName = request.get_json('nameADD')
    # grade = request.get_json('gradeADD')
    # fullName = request.get_json()
    fullName = request.form.get['nameADD']
    
    # data = students(fullName, grade)

    # db.session.add(data)
    # db.session.commit()
    print(fullName, file= sys.stderr)
    return 'test'

#! specific student
# @app.rout('/grades/<fullName>', methods = ['GET'])
# def specificStudent(fullName):

        



if __name__ == '__app__':
    
    app.run(debug=True)