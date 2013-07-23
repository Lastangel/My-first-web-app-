// Arthor: Clifton Abraham
// VFW 1307
// Project 2 07/16/2013
var id;
var item;
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
   
   var saveData = $("complete");
   
      saveData = function(){
     var id            = math.floor( math.random() * 1000000001 );
       item                 = {};
     item.fname           = ["First name:", $("fname").value ];
      item.lname           = ["Last Name:" , $("lname").value  ];
     item.email           = ["Email:" , $("email").value ];
     item.pword           = ["Password:" , $("pword").value ];
        /*item.comments    = ["Comments:", $("comments").value];*/
    localStorage.setItem(id , JSON.stringify(item));
   alert("Tasks Saved");
  // saveData.addEventListener("click", saveData)
        } 
     // saveData.addEventListener("click", saveData)
        // Saved Data
    //localStorage.setItem(id , JSON.stringify(item));
    // alert("Tasks Saved");
   // saveData.addEventListener("click", saveData);
    
//  
}); // end of function 

       saveData.addEventListener("click", saveData)
