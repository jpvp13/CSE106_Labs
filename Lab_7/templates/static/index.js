const async = true;
let fullName;
let gpa;
let colonCount;

let option = document.querySelectorAll("Action-Options");




function addStudentAJAX(){   //!this is the orignal and works correctly
    const xhttp = new XMLHttpRequest();

    fullName = document.getElementById("fullNameADD").value;
    grade = document.getElementById("GradeADD").value;


    colonCount = countOccurances(grade, ".");
    if(fullName === "" & grade === ""){
        console.log("TESTTEST")

        document.getElementById("displayInputADD").innerHTML = "You did not enter anything before pressing submit. Please enter at least one value into each input bar."
    }else if(fullName === ""){
        document.getElementById("displayInputADD").innerHTML = "You did not enter anything into the Full Name input bar before pressing submit. Please enter at least one value."

    }else if(grade === ""){
        document.getElementById("displayInputADD").innerHTML = "You did not enter anything into the Grade input bar before pressing submit. Please enter at least one value."

    }else if((/\d/.test(fullName) == true)  & /^(\d+[a-zA-Z]|[a-zA-Z]+\d)(\d|[a-zA-Z]|\/)*/mg.test(grade) == true ){  //!checks if both inputs have wrong values (######Allow for periods as some people have those in their names####)

        document.getElementById("displayInputADD").innerHTML = "Both fields have incorrect values within them. Please check both of your inputs."

        // console.log("Inside test 1")

    }else if(/\d/.test(fullName) == true | /\//g.test(fullName) == true | /=/g.test(fullName) == true | /`/g.test(fullName) == true | /"/g.test(fullName) == true | /'/g.test(fullName) == true){    //! checks to make sure the name input bar only has letters

        document.getElementById("displayInputADD").innerHTML = "A incorrect character was input in the name field. Please only use characters ranging from A-Z in the name field."

        // console.log("Inside test 2")
        // console.log("The input is a number")

    }else if(/^(\d+[a-zA-Z]|[a-zA-Z]+\d)(\d|[a-zA-Z])*/mg.test(grade) == true){
        console.log("grade has a character inside of itself")
        document.getElementById("displayInputADD").innerHTML = "A letter was found in the grades input bar. Please only use integers inside of the grade field."


    }else if(colonCount > 1){   //!checks to make sure grade does not have letters

        

        document.getElementById("displayInputADD").innerHTML = "To many colons were entered into the input bar. Only one (1) is allowed."

       
        // console.log("Inside test 3")
        // console.log("The type of grade is " + grade)
    }else {
        console.log("passed all tests")


        document.getElementById("displayInputADD").innerHTML = "";
        document.getElementById("displayInputADD").innerHTML = "The name that was entered is: " + fullName + "<br>";
        document.getElementById("displayInputADD").innerHTML += "The grade that was entered is: " + grade;
    

        // xhttp.open("POST","https://amhep.pythonanywhere.com/grades", true);
        xhttp.open("POST","/grades", true);

        const body = {'name': fullName, 'grade': grade};

        xhttp.setRequestHeader("Content-Type", "application/json");
        xhttp.send(JSON.stringify(body));
        // xhttp.send(fullName, grade)
        // console.log(fullName, grade)

        // xhttp.send();

        xhttp.onload = function() {
            const myObj = this.responseText;
            // const myObj = JSON.stringify(JSON.parse(this.responseText),null, 1);   //! this converts my JSON response into a string and changes size
            let i = 0;
            for(i; i < myObj.length; i++){  //! this iterates through the length of the JSON response
                if( myObj[i] != "{" & myObj[i] != "}"  & myObj[i] != '"' & myObj[i] != ","){    //! checks to remove the {}"," to help diplay to user
                    
                    // console.log("This is the contents = " + myObj[i]);
                    // addto = myObj[i]
                    document.getElementById("output").innerHTML +=  myObj[i];    //~ this will append the newly cleaned text to the end of the previously displayed message
                }
            }
        };
       
    }
    


    // xhttp.onload = function(){
    //     let sendingData = JSON.parse(this.responseText);
    //     for (let key in sendingData){
    //         console.log("SendingData is equal to: " + sendingData);
    //         document.getElementsByClassName("displayInput").innerHTML += "(" + key + ": " + sendingData + ")";
    //     }
    // };
}


function getSpecificStudentAJAX(){
    const xhttp = new XMLHttpRequest();

    
    fullName = document.getElementById("fullNameGetSpecific").value;

    if(/\d/.test(fullName) == true | /\d/.test(fullName) == true | /\//g.test(fullName) == true | /=/g.test(fullName) == true | /`/g.test(fullName) == true | /"/g.test(fullName) == true | /'/g.test(fullName) == true){    //! checks to make sure the name input bar only has letters

        document.getElementById("displayInputSpecific").innerHTML = "A incorrect character was input in the name field. Please only use characters ranging from A-Z in the name field."

        // console.log("Inside test 2")
        // console.log("The input is a number")

    }else {
        console.log("passed all tests")


        document.getElementById("displayInputSpecific").innerHTML = "";
        document.getElementById("displayInputSpecific").innerHTML = "The name that was entered is " + fullName;
    
    
        // xhttp.open("GET","https://amhep.pythonanywhere.com/grades/" + fullName , true);
        xhttp.open("GET","/grades/" + fullName , true);

        // newURL = "?grade" + gpa;
        xhttp.send();
        console.log("https://amhep.pythonanywhere.com/grades/" + fullName);
        // console.log("GPA contains: " + gpa);
        // console.log("This is what is being sent to the server: " + xhttp.send(JSON.stringify(body)));

        xhttp.onload = function() {
            // const myObj = this.responseText;   //! this converts my JSON response into a string and changes size

            const myObj = JSON.stringify(JSON.parse(this.responseText), null, 2);   //! this converts my JSON response into a string and changes size
            let i = 0;
            for(i; i < myObj.length; i++){  //! this iterates through the length of the JSON response
                if( myObj[i] != "{" & myObj[i] != "}"  & myObj[i] != '"' & myObj[i] != ","){    //! checks to remove the {}"," to help diplay to user
                    
                        console.log("This is the contents = " + myObj[i]);
                        // addto = myObj[i]
                        document.getElementById("output").innerHTML += "" + myObj[i];    //~ this will append the newly cleaned text to the end of the previously displayed message
                    
                }
            }
        }
        
    }

    // xhttp.send();
}

function getAllStudentsAJAX() { //!returns all students within server on screen for urser
    // clearContentsOfElements();
    const xhttp = new XMLHttpRequest();
    document.getElementById("outputGetAll").innerHTML = "<legend><em><u>Students Name : Grade</u></em></legend> ";
    document.getElementById('outputGetAll').style.display = 'block';
    document.getElementById('output').style.display = 'none';
    
    
    clear_Elements_For_Get_All();

    document.getElementById("optionDisplay").innerHTML = "Retrieve All Students"

    // xhttp.open("GET","https://amhep.pythonanywhere.com/grades", true);
    xhttp.open("GET","/grades", true);
    xhttp.send();

    xhttp.onload = function() {
        // const myObj = this.responseText;
        // const myObj =JSON.parse(this.responseText);
        // console.log(myObj)
        const myObj = JSON.stringify(JSON.parse(this.responseText),null, 1);   //! this converts my JSON response into a string and changes size
        // const myObj = JSON.stringify(this.responseText)   //! this converts my JSON response into a string and changes size

        let i = 0;
        for(i; i < myObj.length; i++){  //! this iterates through the length of the JSON response
            if( myObj[i] != "{" & myObj[i] != "}"  & myObj[i] != '"' & myObj[i] != ","){    //! checks to remove the {}"," to help diplay to user
                
                console.log("This is the contents = " + myObj[i]);
                // addto = myObj[i]
                document.getElementById("outputGetAll").innerHTML +=  myObj[i];    //~ this will append the newly cleaned text to the end of the previously displayed message
            }
        }
    };

    
    
}


function updateStudentAJAX(){
    const xhttp = new XMLHttpRequest();

    
    fullName = document.getElementById("fullNameUpdate").value;
    newGPA = document.getElementById("GpaUpdate").value;
    colonCount = countOccurances(newGPA, '.')

    // xhttp.open("PUT","https://amhep.pythonanywhere.com/grades/" + fullName, true);
    xhttp.open("PUT","/grades/" + fullName , true);
    console.log("I am inside of update student")

    if(fullName === "" & newGPA === ""){
        console.log("TESTTEST")

        document.getElementById("displayInputUpdate").innerHTML = "You did not enter anything before pressing submit. Please enter at least one value into each input bar."
    }else if(fullName === ""){
        document.getElementById("displayInputUpdate").innerHTML = "You did not enter anything into the Full Name input bar before pressing submit. Please enter at least one value."

    }else if(newGPA === ""){
        document.getElementById("displayInputUpdate").innerHTML = "You did not enter anything into the Grade input bar before pressing submit. Please enter at least one value."

    }else if(/\d/.test(fullName) == true  & /^(\d+[a-zA-Z]|[a-zA-Z]+\d)(\d|[a-zA-Z])*/mg.test(newGPA) == true ){  //!checks if both inputs have wrong values (######Allow for periods as some people have those in their names####)

        document.getElementById("displayInputUpdate").innerHTML = "Both fields have incorrect values within them. Please check both of your inputs."

        // console.log("Inside test 1")

    }else if(/\d/.test(fullName) == true | /\d/.test(fullName) == true | /\//g.test(fullName) == true | /=/g.test(fullName) == true | /`/g.test(fullName) == true | /"/g.test(fullName) == true | /'/g.test(fullName) == true){    //! checks to make sure the name input bar only has letters

        document.getElementById("displayInputUpdate").innerHTML = "A incorrect character was input in the name field. Please only use characters ranging from A-Z in the name field."

        // console.log("Inside test 2")
        // console.log("The input is a number")

    }else if(/^(\d+[a-zA-Z]|[a-zA-Z]+\d)(\d|[a-zA-Z])*/mg.test(newGPA) == true){

        console.log("grade has a character inside of itself")
        document.getElementById("displayInputADD").innerHTML = "A letter was found in the grades input bar. Please only use integers inside of the grade field."

    }else if (colonCount > 1){   //!checks to make sure GPA does not have letters

        console.log("GPA has a character inside of itself")

            document.getElementById("displayInputUpdate").innerHTML = "To many colons were entered into the input bar. Only one (1) is allowed."


    }else {
        console.log("passed all tests")


        document.getElementById("displayInputUpdate").innerHTML = "";
        document.getElementById("displayInputUpdate").innerHTML = "The name that was entered is: " + fullName + "<br></br>";
        document.getElementById("displayInputUpdate").innerHTML += "The NEW GPA that was entered is: " + newGPA;


        xhttp.setRequestHeader("Content-Type", "application/json");
        const body = JSON.stringify({"grade": newGPA});

        // console.log(body)

        xhttp.send(body);

        //! before this we are updating the requested value


        //!after this we are doing a get specific student search to return everything in JSON via the GET request

        xhttp.onloadend = function() {
            const xhttp = new XMLHttpRequest();
            console.log("Im inside of onReadyState")
            // newURL = "?grade" + gpa;
            xhttp.open("GET","https://amhep.pythonanywhere.com/grades/" + fullName , true);

            console.log("https://amhep.pythonanywhere.com/grades/" + fullName);
            const myObj = JSON.stringify(JSON.parse(this.responseText), null, 2);   //! this converts my JSON response into a string and changes size
            let i = 0;
            for(i; i < myObj.length; i++){  //! this iterates through the length of the JSON response
                if( myObj[i] != "{" & myObj[i] != "}"  & myObj[i] != '"' & myObj[i] != ","){    //! checks to remove the {}"," to help diplay to user
                    
                        console.log("This is the contents = " + myObj[i]);
                        // addto = myObj[i]
                        document.getElementById("output").innerHTML +=  myObj[i];    //~ this will append the newly cleaned text to the end of the previously displayed message
                    
                }
            }
            xhttp.send();
        }


        

       
    }

}

function deleteStudentAJAX(){
    const xhttp = new XMLHttpRequest();

    fullName = document.getElementById("fullNameDelete").value;

    
    // if(/\d/.test(fullName) == true | /\d/.test(fullName) == true | /\//g.test(fullName) == true | /=/g.test(fullName) == true | /`/g.test(fullName) == true | /"/g.test(fullName) == true | /'/g.test(fullName) == true){    //! checks to make sure the name input bar only has letters
    if(/\d/.test(fullName) == true ){    //! checks to make sure the name input bar only has letters

        document.getElementById("displayInputDelete").innerHTML = "A incorrect character was input in the name field. Please only use characters ranging from A-Z in the name field."

        // console.log("Inside test 2")
        // console.log("The input is a number")

    }else {
        console.log("passed all tests")


        document.getElementById("displayInputDelete").innerHTML = "";
        document.getElementById("displayInputDelete").innerHTML = "The name that was entered is " + fullName;
    
    
        // xhttp.open("DELETE","https://amhep.pythonanywhere.com/grades/" + fullName , true);
        xhttp.open("DELETE","/grades/" + fullName , true);
        // newURL = "?grade" + gpa;
        xhttp.send();
        console.log("https://amhep.pythonanywhere.com/grades/" + fullName);
        // console.log("GPA contains: " + gpa);
        // console.log("This is what is being sent to the server: " + xhttp.send(JSON.stringify(body)));

        xhttp.onload = function() {
            // const myObj =JSON.parse(this.responseText);
            const myObj = JSON.stringify(JSON.parse(this.responseText),null, 1);   //! this converts my JSON response into a string and changes size
            let i = 0;
            for(i; i < myObj.length; i++){  //! this iterates through the length of the JSON response
                if( myObj[i] != "{" & myObj[i] != "}"  & myObj[i] != '"' & myObj[i] != ","){    //! checks to remove the {}"," to help diplay to user
                    
                    console.log("This is the contents = " + myObj[i]);
                    // addto = myObj[i]
                    document.getElementById("output").innerHTML +=  myObj[i];    //~ this will append the newly cleaned text to the end of the previously displayed message
                }
            }
        };
        
    }
}





//! ##############################################################################################################################################################################################

function clearAddStudent(){ //!used specifically for addStudentAJAX
    fullName = '';
    gpa = '';
    colonCount = 0;
    body = 0;
}


function showSearchBarAddStudent(){  //!this will display the appropriate fields when clicked on "add student"
    document.getElementById("optionDisplay").innerHTML = "Add Student"
    document.getElementById("searchBarGetSpecificStudent").style.display = "none";
    document.getElementById('searchBarAddStudent').style.display = 'none';
    document.getElementById("searchBarDeleteStudent").style.display = "none";
    document.getElementById("searchBarUpdateStudent").style.display = "none";
    document.getElementById('outputGetAll').style.display = 'none';
    document.getElementById('description').style.display = 'none';


    document.getElementById("output").style.display = "block";
    // document.getElementById("output").innerHTML = "<legend><em><u>Students Name : GPA</u></em></legend> ";



    document.getElementById("searchBarAddStudent").style.display = "block";
    

}

function showSearchBar_SpecificStudent(){
    document.getElementById("optionDisplay").innerHTML = "Retrieve Specific Student"
    document.getElementById("searchBarAddStudent").style.display = "none";
    document.getElementById("searchBarDeleteStudent").style.display = "none";
    document.getElementById("searchBarUpdateStudent").style.display = "none";
    document.getElementById('outputGetAll').style.display = 'none';
    document.getElementById('description').style.display = 'none';


    document.getElementById("output").innerHTML = "<legend><em><u>Students Name : Grade</u></em></legend> ";




    document.getElementById("searchBarGetSpecificStudent").style.display = "block";
    document.getElementById("output").style.display = "block";
}

function showSearchBar_UpdateStudent(){
    document.getElementById("optionDisplay").innerHTML = "Update Specific Student Information"
    document.getElementById("searchBarAddStudent").style.display = "none";
    document.getElementById("searchBarGetSpecificStudent").style.display = "none";
    document.getElementById("searchBarDeleteStudent").style.display = "none";
    document.getElementById('description').style.display = 'none';



    document.getElementById("output").innerHTML = "<legend><em><u>Students Name : New Grade</u></em></legend> ";

    document.getElementById("searchBarUpdateStudent").style.display = "block";
    document.getElementById("output").style.display = "block";

}

function showSearchBar_DeleteStudent(){
    document.getElementById("optionDisplay").innerHTML = "Delete Specific Student Information"
    document.getElementById("searchBarAddStudent").style.display = "none";
    document.getElementById("searchBarGetSpecificStudent").style.display = "none";
    document.getElementById("searchBarUpdateStudent").style.display = "none";
    document.getElementById('output').style.display =  'block';
    document.getElementById('description').style.display = 'none';



    document.getElementById("output").innerHTML = "<legend><em><u>Students Name : Grade</u></em></legend> ";

    document.getElementById("searchBarDeleteStudent").style.display = "block";
}


function countOccurances(string, word){ //~used to count the occurnaces of a specificed string
    return string.split(word).length-1;
}

function clearContentsOfElements() {  //~ clears out the output area ready for new input
    document.getElementById("searchBar").style.display = "none";
    document.getElementById("output").style.display = "none";
    document.getElementById("output").innerHTML = "";
}

function clear_Elements_For_Get_All(){
    document.getElementById("searchBarAddStudent").style.display = "none";
    document.getElementById("searchBarGetSpecificStudent").style.display = "none";
    document.getElementById("searchBarUpdateStudent").style.display = "none";
    document.getElementById("searchBarDeleteStudent").style.display = "none";
    document.getElementById("description").style.display = "none";
    description
    
}

//~https://stackoverflow.com/questions/23476532/check-if-string-contains-only-letters-in-javascript