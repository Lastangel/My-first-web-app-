// Arthor: Clifton Abraham
// VFW 1307
// Project 2 07/16/2013
var id;
var item;
var save;
var saveData;

window.addEventListener("DOMContentLoaded", function(){


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
   

   
      saveData = function(){
     var id            = math.floor( math.random() * 1000000001 );
       item                 = {};
     item.fname             = ["First name:", $("fname").value ];
      item.lname            = ["Last Name:" , $("lname").value  ];
     item.email            = ["Email:" , $("email").value ];
     item.pword            = ["Password:" , $("pword").value ];
        /*item.comments    = ["Comments:", $("comments").value];*/
    localStorage.setItem(id , JSON.stringify(item)); 
    alert("Tasks Saved");

  } 
   var save = $("complete");
       save.addEventListener("click", saveData)
       
}); // end of function

        
    
