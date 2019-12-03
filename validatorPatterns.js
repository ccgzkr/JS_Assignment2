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