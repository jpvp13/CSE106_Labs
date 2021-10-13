const async = true;
let fullName = "jhn";
let gpa;

let option = document.querySelectorAll("Action-Options");

// function getValues(){   //! this reads my input fields
//     fullName = document.getElementById("fullName").value;
//     // lastName = document.getElementById("lname").value;
//     gpa = document.getElementById("gpa").value;

//     document.getElementsByClassName("output").innerHTML = fullName;


// }    
console.log("I am outside")




function getAllStudents() {
    const xhttp = new XMLHttpRequest

        console.log("omg i was pressed")
 
    xhttp.open("GET", "https://amhep.pythonanywhere.com/grades", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
//     console.log("3");
    xhttp.onload = function(){
        // console.log("4");
        //!will probably need to deciper all of these outputs (using split?) then then output
        allstudents = this.responseText;
        document.getElementById('output').innerHTML = allstudents;
        // console.log(text)
    };
//     console.log("5");

    xhttp.send();
//     console.log("6");

}


// function addStudentAJAX() {
//     console.log("1");
//     let URL = "https://amhep.pythonanywhere.com/grades";
//     console.log("2");
//     let method = "POST";
//     xhttp.open("POST", "https://amhep.pythonanywhere.com/grades", async);
//     console.log("3");

//     xhttp.onload = function(){
//         console.log("4");
//         document.getElementById("add-item").innerHTML = this.response;
//     };
//     console.log("5");

//     xhttp.send();
//     console.log("6");

// }


