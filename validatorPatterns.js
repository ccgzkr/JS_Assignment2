"use strict"

let i = 0;
let fName = [];
let lName = [];
let lockName = [];
let combinations = [];
let studentString = "";

document.getElementById("lockerForm").onsubmit = function () { lockerFormSubmit();    
};

function lockerFormSubmit()
{
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let lockerNumber = document.getElementById("lockerNumber").value;
    let combination = document.getElementById("combination").value;

        let option = document.createElement("option");
        option.setAttribute("value" , lastName);
        let text = lastName + ", " + firstName;
        let textNodeSelectList = document.createTextNode(text);
        option.append(textNodeSelectList);
        document.getElementById("student").appendChild(option);

        //
          // studentString += lastName + ", " + firstName + "\n";
          // console.log(studentString);
          // document.getElementById("student").innerHTML = studentString;


         document.getElementById("selectedLocker").value = lockerNumber;
         document.getElementById("selectedCombination").value = combination;

         let node = document.createElement("li");
         let list = lockerNumber + ": " + lastName + ", " + firstName;
         let textnode = document.createTextNode(list);
         node.appendChild(textnode);
         document.getElementById("lockerList").appendChild(node);
    i++;
}
