
// !#################################################################################################################################
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


function newProblem(xValue, operator){

    first = true
    second = false
    clearPrevious()
    

    if(first == true & second == false ){
        text = document.getElementById("workspace").value += xValue;
        // console.log("Trying to split these equations into first numbers " + text)
        document.getElementById("outputFIRST").innerHTML = text   //this will edit the output on screen using the newly appended value
        text = document.getElementById("workspace").value += operator
        document.getElementById("outputFIRST").innerHTML = text
    }
}

function displayValue(val){
    // console.log(val)
    // repeat = false;

    // STARTNEW = false
    let operationCount = 0
    
    

    op = checkElement(val)

    console.log("Op = " + op)

    if(operationCount > 1){
        document.getElementById('RESULT').innerHTML = "ONLY ONE OPERATOR"
    }

    if(op == '+' || op == '-' || op == '/' || op == '*' ){
        
        text = document.getElementById("workspace").value += val;
        operation = op
        
        if(count >= 1){  //! ended here for appending after output
            console.log("Inside of the loop once enter was clicked ONCE and a operator was entered")
            console.log("The value of total is: " + total)
            console.log("The value of secNum is: " + secNum)
            console.log("The value of operator is: " + operation)
    
            // equalsDisplayValue(total, secNum, operation)
            newProblem(total, operation)
        }   

            if(count >= 1 & operatorPressed == true){    //!check here
                console.log("I am inside of the loops that supposed to check if another operator was entered")
                equalsDisplayValue(total, secNum, operation)
                // count = count + 1
                // solve()
            }
        

        document.getElementById("outputFIRST").innerHTML = text   //this will edit the output on screen using the newly appended value

        first = false
        second = true

        operationCount += 1

    }

    

    // console.log("#######The value of first is: " + first + " and then the value of second is: " + second)

    if(first == true & second == false & (op == '.' || op == 1 || op == 2 || op == 3 || op == 4 || op == 5 || op == 6 || op == 7 || op == 8 || op == 9 ||op == 0 ) ){
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






  


function equalsDisplayValue(total, secNum, operation){

        let x;
        let y;
        let z
        // clearPrevious()
        clearEquals()
        operatorPressed = true  //! considering this


        text = document.getElementById("workspace").value += total;
        if (operation == '*'){

        // if(Math.sign(text) == 1 & operation == '*'){
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
        }else if (operation == '/'){

        // }else if((Math.sign(text) == 1) & operation == '/'){
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

        }else if (operation == '+'){

        // }else if(Math.sign(text) == -1 & operation == '+'){

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

            total = eval(x - y)

            document.getElementById("RESULT").innerHTML = total 
        } else if (operation == '-'){
        // }else if((Math.sign(text) == -1) &  operation == '-'){
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
        }
  
}


function solve(){

    count += 1
    STARTNEW = false

    if(count > 1 & STARTNEW == false){
        console.log("The value of count is: " + count)
        console.log("Inside of = being clicked more than once LOOP 1")

        console.log("The value of total is: " + total)
        console.log("The value of secNum is: " + secNum)
        console.log("The value of operation is: " + operation)
        equalsDisplayValue(total, secNum, operation)
        operatorPressed = true
    }
    let x;
    let y;
    // let z = x + y;
    x = document.getElementById('workspace').value
    // console.log("X has value: " + x)
    y = document.getElementById('workspaceSECOND').value
    // console.log("Y has value: " + y)

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
    // STARTNEW = true
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
    total = 0
    text = 0
    // operation = ''
}