// Arthor: Clifton Abraham
// VFW 1307
// Project 2 07/16/2013

// getElements 
var fName = document.getElementById("fname");
var lName = document.getElementById("lname");
var pWord = document.getElementById("pword");
var eMail = document.getElementById("email");
var checkBoxes = document.getElementById("myForm").chor
var confirmTasks = document.getElementById("confirm");
//var myTask = document.getElementbyName("ul")
// checkboxes function
//console.log(checkBoxes);
 var checkValue = function(){
    for(i=0, j=checkBoxes.length; i<j; i++){
        if(checkBoxes[i].checked){
         console.log(checkBoxes[i].value);
            
        };
        
    };

};

//localStorage function
 var collectData = function(){
    var fName = localStorage.setItem("FirstName", fname.value);
    var lName = localStorage.setItem("LastName" , lname.value);
    var pWord = localStorage.setItem("PassWord" , pword.value);
    var eMail = localStorage.setItem("Email"    , email.value);
   // var myTask = localStarage.setItem("ul", ul.value);
};
// eventlisteners
 fname.addEventListener("blur", collectData);
 lname.addEventListener("blur", collectData);
 pWord.addEventListener("blur", collectData);
 eMail.addEventListener("blur", collectData);
 confirmTasks.addEventListener("click",checkValue);
 //myTask.addEventListener("blur",collectData);

 //for loop on localStorage
 for(i=0, j=localStorage.length; i<j; i++){
 console.log(localStorage.key(i));
 }
 
 
