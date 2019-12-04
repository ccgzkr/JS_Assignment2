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
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.1/jquery.validate.min.js"></script>
    <script src="lockerinfor.js" defer></script>
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
        <input type="text" id="selectedCombination" readonly="readonly" />
    </fieldset>
</form>

<p>Lockers added:</p>
<ul id="lockerList"></ul>
<p id="lockerListComment">No lockers added yet</p>
</body>

</html>

    
    

    
lockerinfo.js
-------------------------------------------------------------------------------------------------    
"use strict";

window.onload = init;

jQuery.validator.addMethod("nameChars", function (value, elem) {
    ret &= this.optional(elem) || /^[A-Za-z]+[A-Za-z '-]*[A-Za-z]+$/.test(value);
    return ret;
}, "The input name is invalid");

jQuery.validator.addMethod("lockerNumberChars", function (value, elem) {
    ret &= this.optional(elem) || /^1?[0-9]{0, 3}$/.test(value);
    return ret;}, "The locker number is invalid"
);

jQuery.validator.addMethod("combinationChars", function(value, elem) {
        ret &= this.optional(elem) || /^[0-5]?\d-[0-5]?\d-[0-5]?\d$/.test(value);
        return ret;
    }, "The combination is invalid"
);

let i = 0;
let students = [];
let ret = true;

const firstNameElement = document.getElementById("firstName");
const lastNameElement = document.getElementById("lastName");
const lockerNumberElement = document.getElementById("lockerNumber");
const combinationElement = document.getElementById("combination");

function init() {
    document.getElementById("lockerForm").onsubmit = inputValidator;
}

function inputValidator(event) {
    event.preventDefault();

    $(document).ready(function(){
        $("#lockerForm").validate({
            rules: {
                firstName: {
                    required: true,
                    nameChars: true

                },
                lastName: {
                    required: true,
                    nameChars: true

                },
                lockerNumber: {
                    required: true,
                    lockerNumberChars: true

                },
                combination: {
                    required: true,
                    combinationChars: true
                },
            },
            messages:{
                firstName:{
                    required: "Your name?",
                    nameChars: "Invalid format"
                },
                lastName:{
                    required: "Your name?",
                    nameChars: "Invalid format"
                },
                lockerNumber:{
                    required: "Your locker number?",
                    lockerNumberChars: "Invalid format"
                },
                combination:{
                    required: "Your combination?",
                    combinationChars: "Invalid format"
                }
            }
        })
    });

    if (ret) {
        let firstName = firstNameElement.value;
        let lastName = lastNameElement.value;
        let lockerNumber = lockerNumberElement.value;
        let combination = combinationElement.value;
        lockerFormSubmit(firstName, lastName, lockerNumber, combination);
    }

    ret = true;
}

function lockerFormSubmit(firstName, lastName, lockerNumber, combination) {
    let student = {
        "firstName": firstName,
        "lastName": lastName,
        "lockerNumber": lockerNumber,
        "combination": combination
    };
    students.push(student);

    let studentRequestItem = document.getElementById("student");
    let optionItem = document.createElement("option");
    optionItem.text = students[i]["lastName"] + ", " + students[i]["firstName"];
    studentRequestItem.options.add(optionItem, i);
    document.getElementById("selectedLocker").value = students[i]["lockerNumber"];
    document.getElementById("selectedCombination").value = students[i]["combination"];
    studentRequestItem.options[i].selected = true;

    let node = document.createElement("li");
    let lockerInforList = students[i]["lockerNumber"] + ": " +
        students[i]["lastName"] + ", " +
        students[i]["firstName"];
    let textnode = document.createTextNode(lockerInforList);
    node.appendChild(textnode);
    document.getElementById("lockerList").insertBefore(node, document.getElementById("lockerList").firstChild);

    if (student.length !== 0) {
        document.getElementById("lockerListComment").innerHTML = "";
    }

    i++;

    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("lockerNumber").value = "";
    document.getElementById("combination").value = "";
}

function setLockerFields() {
    let index = document.getElementById("student").options.selectedIndex;
    document.getElementById("selectedLocker").value = students[index]["lockerNumber"];
    document.getElementById("selectedCombination").value = students[index]["combination"];
}

