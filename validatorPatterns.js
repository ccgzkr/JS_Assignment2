validatorPatterns
-------------------------------------------------------------------------------------------------
"use strict"

jQuery.validator.addMethod("firstName", function(value,elem){
    return this.optional(elem) || /^[A-Za-z]+[A-Za-z '-]*[A-Za-z]+$/.test(value);
},"The input first name is invalid");

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
    
    
    

    
lockerinfo.js
-------------------------------------------------------------------------------------------------    
