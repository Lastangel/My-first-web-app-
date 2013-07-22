// Arthor: Clifton Abraham
// VFW 1307
// Project 2 07/16/2013
window.addEventListener("DOMContentLoaded", function(){
var id;
var item;
var saveData;

// getElements
 function $(x){
var information = document.getElementById(x);
    return information;
   }
   // set Links
  /* var displayLink = $("displayLink");
   displayLink.addEventListener("click", getData);*/
   
 /*  var clearData = $("clear");
   clearData.addEventListener("click", clearStorage);*/
   
   var saveData = $("complete");
  saveData.addEventListener("click", saveData);
   
        saveData = function(){
        var id             = math.floor( math.random() * 1000000001 );
     item               = {};
     item.fname           = ["First name:", $("fname").value ];
     item.lname           = ["Last Name:" , $("lname").value  ];
      item.email           = ["Email:" , $("email").value ];
     item.pword           = ["Password:" , $("pword").value ];
        /*item.comments    = ["Comments:", $("comments").value];*/
        }
      
        // Saved Data
     localStorage.setItem(id , JSON.stringify(item));
    // alert("Tasks Saved");
     // saveData.addEventListener("click", saveData);
/*
var fName = document.getElementById("fname");
var lName = document.getElementById("lname");
var pWord = document.getElementById("pword");
var eMail = document.getElementById("email");
//var checkBoxes = document.getElementById("myForm").chor
//var confirmTasks = document.getElementById("complete");
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
 //for loop on localStorage
  for(i=0, j=localStorage.length; i<j; i++){
 console.log(localStorage.key(i));
 }
 

//localStorage function
 var collectData = function(){
    var fName = localStorage.setItem("FirstName", fname.value);
    var lName = localStorage.setItem("LastName" , lname.value);
    var pWord = localStorage.setItem("PassWord" , pword.value);
    var eMail = localStorage.setItem("Email"    , email.value);
   // var myTask = localStarage.setItem("ul", ul.value);
   /s/ Store
 // Saved Data
 localStorage.setItem(id , JSON.stringify(tasks));
 alert("Tasks Saved");
    
 };
};
// eventlisteners
 fname.addEventListener("blur", collectData);
 lname.addEventListener("blur", collectData);
 pWord.addEventListener("blur", collectData);
 eMail.addEventListener("blur", collectData);
 confirmTasks.addEventListener("click", checkValue);
 //myTask.addEventListener("blur",collectData);
*/


}); // end of function 

