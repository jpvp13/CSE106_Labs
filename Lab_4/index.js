// import $ from "jquery";

let repeat;
let expectOperation = false;
let text;
let firstNum;
let secNum;
let operation;
let total;
let newValue;
let equalAgain;
let first = true
let second = false
let count = 0
let op
let stopEquals = false //this allows for the equalsDisplay to be used
let insideEquals = false
let STARTNEW = false
let operatorPressed = false
let equalsPressed = false

function checkElement(val){
    switch (val){
        case '+':
            return value = '+'
        case '-':
            return value = '-'
        case '*':
            return value = '*'
        case "/":
            return value = '/'
        case "1":
            return value = 1
        case "2":
            return value = 2 
        case "3":
            return value = 3
        case "4":
            return value = 4
        case "5":
            return value = 5
        case "6":
            return value = 6 
        case "7":
            return value = 7
        case "8":
            return value = 8
        case "9":
            return value = 9
        case "0":
            return value = 0
        case ".":
            return value = '.'
    }
}


function displayValue(val){
    // console.log(val)
    // repeat = false;

    // STARTNEW = false
    let operationCount
    
    

    op = checkElement(val)

    console.log("Op = " + op)


    if(op == '+' || op == '-' || op == '/' || op == '*' ){
        operationCount = 1
        text = document.getElementById("workspace").value += val;
        operation = op
        
        // console.log("This is what is inside of operation: " + operation)
        // console.log("The value of operation at this moment is : " + operation)

        

        document.getElementById("outputFIRST").innerHTML = text   //this will edit the output on screen using the newly appended value
        first = false
        second = true
        // operation = true //this will let the operation print

        if(count > 0 & operatorPressed == true){    //!check here
            console.log("I am inside of the loops that supposed to check if another operator was entered")
            equalsDisplayValue(total, secNum, operation)
            count = count + 1
            // solve()
        }

    }

    if(operationCount >1){
        document.getElementById('ERRORS').innerHTML = "ONLY ONE OPERATOR"
    }

    // console.log("#######The value of first is: " + first + " and then the value of second is: " + second)

    if(first == true & second == false & (op == '.' || op == 1 || op == 2 || op == 3 || op == 4 || op == 5 || op == 6 || op == 7 || op == 8 || op == 9 ||op == 0 ) ){
        // console.log('im inside first loop')
        // text = document.getElementById("workspace").value += val;  //this will append val to whatever value was before
        // firstNum = text.split(/[+,-,/,*]/)
        // text = document.getElementById("workspace").value += val;
        text = document.getElementById("workspace").value += val;
        // console.log("Trying to split these equations into first numbers " + text)
        document.getElementById("outputFIRST").innerHTML = text   //this will edit the output on screen using the newly appended value
    
    }

    if(first == false & second == true & (op == '.' || op == 1 || op == 2 || op == 3 || op == 4 || op == 5 || op == 6 || op == 7 || op == 8 || op == 9 ||op == 0)){
        // console.log('im inside second loop')
        text = document.getElementById("workspaceSECOND").value += val;  //this will append val to whatever value was before
        secNum = text //saving this value for lab specified reason of = button -> act as a add
        // console.log("before splitting the text variable = " + text)
        // secNum = text.split('')

        // console.log("Trying to split these equations into second numbers " + text)
        document.getElementById("outputSECOND").innerHTML = text   //this will edit the output on screen using the newly appended value
        
        
    }
}






  


function equalsDisplayValue(total, secNum){

        let x;
        let y;
        let z
        // clearPrevious()
        clearEquals()
        operatorPressed = true  //! considering this


        text = document.getElementById("workspace").value += total;

        if(Math.sign(text) == 1 & operation == '*'){
            // console.log("I AM INSIDE MULTIPLE")
            text = document.getElementById("workspace").value += '*';
            // console.log("Number inside of text within equalsDisplayValue " + text)
            document.getElementById("outputFIRST").innerHTML = text   //this will edit the output on screen using the newly appended value
            text = document.getElementById("workspaceSECOND").value += secNum;
            document.getElementById("outputSECOND").innerHTML = text   //this will edit the output on screen using the newly appended value
            x = document.getElementById('workspace').value
            // console.log("X has value: " + x)
            y = document.getElementById('workspaceSECOND').value
            // console.log("Y has value: " + y)

            total = eval(x + y)

            document.getElementById("RESULT").innerHTML = total

            // console.log("The total arithmetic of z is: " + total)
        }else if((Math.sign(text) == 1) & operation == '/'){
            // console.log("I AM INSIDE DIVIDE")
            text = document.getElementById("workspace").value += '/';
            // console.log("Number inside of text within equalsDisplayValue " + text)
            document.getElementById("outputFIRST").innerHTML = text   //this will edit the output on screen using the newly appended value
            text = document.getElementById("workspaceSECOND").value += secNum;
            document.getElementById("outputSECOND").innerHTML = text   //this will edit the output on screen using the newly appended value
            x = document.getElementById('workspace').value
            console.log("X has value: " + x)
            y = document.getElementById('workspaceSECOND').value
            console.log("Y has value: " + y)

            total = eval(x / y)

            document.getElementById("RESULT").innerHTML = total

            // console.log("The total arithmetic of z is: " + total)
        }else if(Math.sign(text) == 1 & operation == '+'){

            // console.log("I AM INSIDE ADD")
            text = document.getElementById("workspace").value += '+';
            // console.log("Number inside of text within equalsDisplayValue " + text)
            document.getElementById("outputFIRST").innerHTML = text   //this will edit the output on screen using the newly appended value
            text = document.getElementById("workspaceSECOND").value += secNum;
            document.getElementById("outputSECOND").innerHTML = text   //this will edit the output on screen using the newly appended value
            x = document.getElementById('workspace').value
            // console.log("X has value: " + x)
            y = document.getElementById('workspaceSECOND').value
            // console.log("Y has value: " + y)

            total = eval(x + y)

            document.getElementById("RESULT").innerHTML = total

            // console.log("The total arithmetic of z is: " + total)
        }else if((Math.sign(text) == -1) || (total == 0) & operation == '-'){
            // console.log("I AM INSIDE SUBTRACT")
            text = document.getElementById("workspace").value += '-';
            // console.log("Number inside of text within equalsDisplayValue " + text)
            document.getElementById("outputFIRST").innerHTML = text   //this will edit the output on screen using the newly appended value
            text = document.getElementById("workspaceSECOND").value += secNum;
            document.getElementById("outputSECOND").innerHTML = text   //this will edit the output on screen using the newly appended value
            x = document.getElementById('workspace').value
            // console.log("X has value: " + x)
            y = document.getElementById('workspaceSECOND').value
            // console.log("Y has value: " + y)

            total = eval(x + y)

            document.getElementById("RESULT").innerHTML = total

            // console.log("The total arithmetic of z is: " + total)
        }
        // }else if(Math.sign(text) == -1){
        //     text = document.getElementById("workspace").value += '-';
        // }



        //! below here this 'works'
        // text = document.getElementById("workspace").value += total;
        // console.log("Number inside of text within equalsDisplayValue " + text)
        // document.getElementById("outputFIRST").innerHTML = text   //this will edit the output on screen using the newly appended value
        // text = document.getElementById("workspaceSECOND").value += secNum;
        // document.getElementById("outputSECOND").innerHTML = text   //this will edit the output on screen using the newly appended value

        // console.log("Number inside of secNum within equalsDisplayValue " + secNum)
        
        
        // x = document.getElementById('workspace').value
        // console.log("X has value: " + x)
        // y = document.getElementById('workspaceSECOND').value
        // console.log("Y has value: " + y)

        // total = eval(x + y)

        // document.getElementById("RESULT").innerHTML = total

        // console.log("The total arithmetic of z is: " + total)
        //!between here this works
        // solve();

}

// let button = document.getElementById('equal')

// button.onclick = function() {
//     count += 1;
//   };

function solve(){

    count += 1

    // if(count > 1){
    //     STARTNEW = true
    // }

    if(count > 1 & STARTNEW == false){
        equalsDisplayValue(total, secNum, operation)
    }

    if(count > 1 & (operation == '+' || operation == '-' || opeation == '/' || operation == '*')){  //! ended here for appending after output
        console.log("Inside of the loop once a second operation is pressed")

        equalsDisplayValue(total, secNum,operation)
    }   
    
    let x;
    let y;
    // let z = x + y;
    x = document.getElementById('workspace').value
    // console.log("X has value: " + x)
    y = document.getElementById('workspaceSECOND').value
    // console.log("Y has value: " + y)

    // console.log("This is inside of operation still: " + operation)
    amount = checkNums(x)
    // console.log(checkNums(x))
    // if(operation.contains() == '.'){

    // }
    try{
        total = eval(x+y)
    } catch(err){
        console.log("Oh Oh, you entered something wrong")   //!MAKE THIS LARGE MAYBE EVEN RESET THE SCREEN?
    }


    

    document.getElementById("RESULT").innerHTML = total

    // console.log("The total arithmetic of z is: " + total)
    console.log("#####################################################################")
    
    // console.log("The total of count is " + count)

    

    
    console.log("The total of click count is " + count)
        
    
    // first = true
    // second = false
}

function checkNums(thingToCheck) { 
    var arr = thingToCheck.split('.', '.')
    return dotCount = arr;    
}


function clearEquals(){
    document.getElementById("workspace").value = "" //this physically clears what workspace has "remembered" since workspace value gets passed to output
    document.getElementById("workspaceSECOND").value = "" //this physically clears what workspace has "remembered" since workspace value gets passed to output
    document.getElementById("outputFIRST").innerHTML = ""    //this clears what the user sees on screen
    document.getElementById("outputSECOND").innerHTML = ""    //this clears what the user sees on screen
    document.getElementById("RESULT").innerHTML = ""    //this clears what the user sees on screen
    x = 0
    y = 0

}

  
//function that clear the display
function clearPrevious(){

    console.log("Clear was pressed");
    STARTNEW = true
    first = true
    second = false
    count = 0
    document.getElementById("workspace").value = "" //this physically clears what workspace has "remembered" since workspace value gets passed to output
    document.getElementById("workspaceSECOND").value = "" //this physically clears what workspace has "remembered" since workspace value gets passed to output
    document.getElementById("outputFIRST").innerHTML = ""    //this clears what the user sees on screen
    document.getElementById("outputSECOND").innerHTML = ""    //this clears what the user sees on screen
    document.getElementById("RESULT").innerHTML = ""    //this clears what the user sees on screen
    x = 0
    y = 0
    secNum = 0
    
    // equalAgain = false;
    // console.log("The value inside of output is now: " + document.getElementById("output").value);
}



//! THIS ONE WORKS JUST IN CASE LOL
// function that display value
// function displayValue(val){
//     console.log(val)
//     // repeat = false;

//     text = document.getElementById("workspace").value += val;  //this will append val to whatever value was before
//     console.log("Inside of displayValue, This is inside of text:" + text)
//     document.getElementById("output").innerHTML = text   //this will edit the output on screen using the newly appended value
//     save = val;
 
// }


//function that evaluates the expressipn and return result
// function solve(){

    
//     let x;

//     // if(repeat == true){
//     //     equalAgain = true;
//     //     displayValue(newValue);
//     // }


//     x = document.getElementById("workspace").value  //this will take the whole expression and pass into a temp variable
//     total = eval(x) //inside here eval will execute whatever arithmetic is requested
//     document.getElementById("output").innerHTML = total
//     console.log(total) 
//     newValue = total;

//     console.log("Testing the value of total within solve " + total);
    
//     repeat = true;
//     // console.log("The value of repeat at this very moment is = " + repeat);

// }