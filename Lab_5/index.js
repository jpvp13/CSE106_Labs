const async = true;
let fullName = "jhn";
let gpa;

let option = document.querySelectorAll("Action-Options");

  



function getAllStudents() {
    clearGetAllStudents();
    const xhttp = new XMLHttpRequest();
    document.getElementById('output').style.display = 'block';
    
    xhttp.onload = function() {
        // const myObj =JSON.parse(this.responseText);
        const myObj = JSON.stringify(JSON.parse(this.responseText), null, 2);   //! this converts my JSON response into a string and changes size
        let i = 0;
        for(i; i < myObj.length; i++){  //! this iterates through the length of the JSON response
            if( myObj[i] != "{" & myObj[i] != "}"  & myObj[i] != '"' & myObj[i] != ","){    //! checks to remove the {}"," to help diplay to user
                
                console.log("This is the contents = " + myObj[i]);
                // addto = myObj[i]
                document.getElementById("output").innerHTML += myObj[i];    //~ this will append the newly cleaned text to the end of the previously displayed message
            }
        }
    };

    xhttp.open("GET","https://amhep.pythonanywhere.com/grades", true);
    xhttp.send();
}

function clearGetAllStudents(){
    document.getElementById("output").innerHTML = "<legend><em><u>Students Name : GPA</u></em></legend> ";
}

function addStudentAJAX(){
    console.log("I am inside of add student")

    let fullName = document.getElementById("fullName").value;
    let bga = document.getElementById("Gpa").value;
    // clearContents();

    console.log(fullname);
    console.log(gpa)

    document.getElementById("searchBar").style.display = 'block';
    document.getElementById("output").style.display = 'block';
}

// function getValues(){   //! this reads my input fields
//     console.log("I am inside of getValues")
//     fullName = document.getElementById("fullName").value;
//     // lastName = document.getElementById("lname").value;
//     gpa = document.getElementById("gpa").value;

//     console.log("The name inside of fullName is =" + fullName);
//     console.log("The number inside of gpa is =" + gpa);
//     // document.getElementsByClassName("output").innerHTML = fullName;


// }  

function clearContents() {  //~ clears out the output area ready for new input
    document.getElementById("searchBar").style.display = "none";
    document.getElementById("output").style.display = "none";
    document.getElementById("output").innerHTML = "";
}

