validatorPatterns
-------------------------------------------------------------------------------------------------
"use strict"

jQuery.validator.addMethod("firstName", function(value,elem){
    return this.optional(elem) || /^[A-Za-z]+[A-Za-z '-]*[A-Za-z]+$/.test(value);
}"The input first name is invalid");

jQuery.validator.addMethod("lastName", function(value,elem){
    return this.optional(elem) || /^[A-Za-z]+[A-Za-z '-]*[A-Za-z]+$/.test(value);
},"The input last name is invalid");


jQuery.validator.addMethod("lockerNumber", function(value,elem){
    return this.optional(elem) || /^1?[0-9]{0, 3}$/.test(value);
},"The locker number is invalid");

jQuery.validator.addMethod("combination", function(value,elem){
    return this.optional(elem) || /^[0-5]?\d-[0-5]?\d-[0-5]?\d$/.test(value);
},"The combination is invalid");


studentString += newContent
document.getElementById("output").innerHTML = studentString;

let fname = "a";
let lname = "A";
let lnum = 1;
let lcom = lca;

let student = {"firstName": fname, "lastName": lname, "lockerNumber": lnum, "lockerCombination": lcom};

let students =[]

students.push(student);

console.log(students[0]["firstName"]);

function bubbleSort(students){
    for(let i = 0; i < students.length - 1; i++){
        for(let j = 0; j < students.length; j++){
            fullName1 = students[i]["lastName"] +  students[i]["firstName"];
            fullName2 = students[j]["lastName"] +  students[j]["firstName"];
            
            if(fullName1.compareTo(fullName2) > 0){
                let temp = students[i];
                students[i] = students[j];
                students[j] = temp
            }
        }
    }
}


function insertStudent(students, newStudent){
    let i = 0;
    while(students[i]["lastName"] +  students[i]["firstName"] < newStudent["lastName"] +  newStudent["firstName"]) {
        i++;
    }

    for(let i = 0; i < students.length; i++){
            let fullName1 = students[i]["lastName"] +  students[i]["firstName"];
            let fullName2 = newStudent["lastName"] +  newStudent["firstName"];
            
            if(fullName1.compareTo(fullName2) > 0){
            } else {
                break;
            }
    }
}


lockerinfo.html
-------------------------------------------------------------------------------------------------
    <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <link rel="stylesheet" type="text/css" href="css/form.css" />
        <title>Student Locker Information</title>
        <script src="scripts/lockerInfo.js" defer></script>
    </head>

    <body>
        <form id="lockerForm" action="#">
            <fieldset>
                <label for="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" />

                <label for="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" />

                <label for="lockerNumber">Locker Number</label>
                <input type="number" id="lockerNumber" name="lockerNumber" />

                <label for="combination">Locker Combination</label>
                <input type="text" id="combination" name="combination" />
                
                <input type="submit" value="Add" />
                <input type="reset" value="Clear" />
            </fieldset>
        </form>
        
        <form id="requestForm" action="#">
            <fieldset>
                <label for="student">Select a student:</label>
                <select id="student" onclick="setLockerFields()">
                </select>

                <label for="selectedLocker">Locker Number</label>
                <input type="number" id="selectedLocker" name="lockerNumber" readonly="readonly" />

                <label for="selectedCombination">Combination is:</label>
                <input type="text" id="selectedCombination"
                       readonly="readonly" />
            </fieldset>
        </form>

        <p>Lockers added:</p>
        <ul id="lockerList"></ul>
        <p>No lockers added yet</p>
    </body>
</html>

    
    

    
lockerinfo.js
-------------------------------------------------------------------------------------------------    
"use strict"

let i = 0;
// let fName = [];
// let lName = [];
// let lockName = [];
// let combinations = [];

let students = [];

window.onload = init;
function init() {
    document.getElementById("lockerForm").onsubmit = lockerFormSubmit;
}
function lockerFormSubmit(event)
{
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let lockerNumber = document.getElementById("lockerNumber").value;
    let combination = document.getElementById("combination").value;

    let student = {"firstName": firstName, "lastName": lastName, "lockerNumber": lockerNumber, "combination": combination};
    students.push(student);



    let x = document.getElementById("student");
    let c = document.createElement("option");
    c.text = students[i]["lastName"] + ", " + students[i]["firstName"];
    x.options.add(c, i);
    document.getElementById("selectedLocker").value = students[i]["lockerNumber"];
    document.getElementById("selectedCombination").value = students[i]["combination"];
    x.options[i].selected = true;

    let node = document.createElement("li");
    let list = students[i]["lockerNumber"] + ": " + students[i]["lastName"] + ", " + students[i]["firstName"];
    let textnode = document.createTextNode(list);
    node.appendChild(textnode);
    document.getElementById("lockerList").insertBefore(node , document.getElementById("lockerList").firstChild);
    i++;

    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("lockerNumber").value = "";
    document.getElementById("combination").value = "";
    event.preventDefault();
}

function setLockerFields()
{
    let index = document.getElementById("student").options.selectedIndex;
    document.getElementById("selectedLocker").value = students[index]["lockerNumber"];
    document.getElementById("selectedCombination").value = students[index]["combination"];
}
