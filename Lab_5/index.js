const xhttp = new XMLHttpRequest();
// const URL;
const async = true;
let fullName = "jhn";
let lastName;
let gpa;
// xhttp.send();


function getValues(){   //! this reads my input fields
    fullName = document.getElementById("fullName").value;
    // lastName = document.getElementById("lname").value;
    gpa = document.getElementById("gpa").value;

    document.getElementsByClassName("output").innerHTML = fullName;


    
    // console.log(firstName);

}



function addStudentAJAX() {
    let option = "Add Student";
    document.getElementById("optionDisplay").innerText = option;
    // getValues();
    // console.log(fullName);
    console.log(gpa);
    const URL = "https://amhep.pythonanywhere.com/grades"
    console.log("I am inside of add student")
    const method = "POST";
    xhttp.open(method, URL, async);
    console.log(fullName);  //! ended here
    document.getElementsByClassName("output").innerText = fullName;


    
    


    // xhttp.setRequestHeader("Content-Type","application/json");
    // xhttp.onreadystatechange = function () {
    //     // document.getElementById('test').innerHTML = this.responseText;
    //     if(this.readyState == 4 && this.status == 200){
    //         document.getElementById("output").innerHTML = this.responseText;
    //     }
    // };

    // body = {"name":fullName,"grade":gpa};
    // // xhttp.send(JSON.stringify(body));
    // xhttp.send(JSON.stringify(body));
}