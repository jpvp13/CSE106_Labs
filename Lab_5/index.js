const async = true;
let fullName;
let gpa;

let option = document.querySelectorAll("Action-Options");

  



function getAllStudents() {
    clearGetAllStudents();
    const xhttp = new XMLHttpRequest();
    document.getElementById('output').style.display = 'block';
    document.getElementById('searchBar').style.display = 'none';

    
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

function addStudentAJAX(){   //!this is the orignal and works correctly
    const xhttp = new XMLHttpRequest();

    fullName = document.getElementById("fullName").value;
    gpa = document.getElementById("Gpa").value;


    if(/\d/.test(fullName) == true & /^(\d+[a-zA-Z]|[a-zA-Z]+\d)(\d|[a-zA-Z])*/mg.test(gpa) == true ){

        document.getElementById("displayInput").innerHTML = "Both fields have incorrect values within them. Please check both of your inputs."

        // console.log("Inside test 1")

    }else if(/\d/.test(fullName) == true){    //! checks to make sure the name input bar only has letters

        document.getElementById("displayInput").innerHTML = "A incorrect character was input in the name field. Please only use characters ranging from A-Z in the name field."

        // console.log("Inside test 2")
        // console.log("The input is a number")

    }else if(/^(\d+[a-zA-Z]|[a-zA-Z]+\d)(\d|[a-zA-Z])*/mg.test(gpa) == true){

        console.log("GPA has a character inside of itself")
        document.getElementById("displayInput").innerHTML = "A incorrect character was input into the GPA field. Please only use values ranging from 0-9 (including decimals) in the GPA field."
       
        // console.log("Inside test 3")
        // console.log("The type of GPA is " + gpa)
    }else{
        console.log("passed all tests")


        document.getElementById("displayInput").innerHTML = "";
        document.getElementById("displayInput").innerHTML = "The name that was entered is: " + fullName;
    
    
        xhttp.open("POST","https://amhep.pythonanywhere.com/grades", true);
        xhttp.setRequestHeader("Content-Type", "application/json");
        const body = {"name": fullName, "grade": gpa};
        // xhttp.send(JSON.stringify(body));
        if(xhttp.send(JSON.stringify(body)) == 409){
            console.log("AHHH")
        }
    }
    


    // xhttp.onload = function(){
    //     let sendingData = JSON.parse(this.responseText);
    //     for (let key in sendingData){
    //         console.log("SendingData is equal to: " + sendingData);
    //         document.getElementById("displayInput").innerHTML += "(" + key + ": " + sendingData + ")";
    //     }
    // };
}

function showSearchBar(){  //this will display the appropriate fields when clicked on "add student"
    document.getElementById("searchBar").style.display = "block";
    document.getElementById("output").style.display = "block";

}

function getSpecificStudent(){

}




function clearContents() {  //~ clears out the output area ready for new input
    document.getElementById("searchBar").style.display = "none";
    document.getElementById("output").style.display = "none";
    document.getElementById("output").innerHTML = "";
}



//~https://stackoverflow.com/questions/23476532/check-if-string-contains-only-letters-in-javascript