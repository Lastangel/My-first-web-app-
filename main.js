
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
 getCheckBoxValue = function(){
   if($("vLivingRoom").checked){
    vLivingRoom = $("vLivingRoom").value;
   } else{
    vLivingRoom = "No"
   }
   if($("sKitchen").checked){
    sKitchen = $("sKitchen").value;
   } else{
    sKitchen = "No"
   } if($("wDishes").checked){
    wDishes = $("wDishes").value;
   } else{
    wDishes = "No" 
   }
   if($("gUpCar").checked){
    gUpCar = $("gUpCar").value;
   } else{
    gUpCar = "No"
   }
   if($("cStore").checked){
    cStore = $("cStore").value;
   } else{
    cStore = "No"
   }
 }
  // Toggle controls
  function toggleControls(n){
    switch(n){
        case "on":
            $("myForm").style.display = "none";
            
           // $("clear").stlye.display = "inline";
            
            $("displayLink").style.display = "none";
            
            $("addNew").style.display = "inline";
            break;
        case "off":
             $("myForm").style.display = "block";
             
            $("clear").stlye.display = "inline";
            
            $("displayLink").style.display = "inline";
            
            $("addNew").style.display = "none";
            
            $("items").style.display = "none"; // correct 
            break;
        default:
            return false;
    }
  }
  
  
  
   
      saveData = function(){
     var id                 = Math.floor( Math.random() * 1000000001 );
    getCheckBoxValue();
       item                 = {};
       item.fname           = ["First name:", $("fname").value ];
       item.lname           = ["Last Name:" , $("lname").value  ];
       item.email           = ["Email:" , $("email").value ];
       item.pword           = ["Password:" , $("pword").value ];
       item.comments        = ["Comments:", $("comments").value];
       item.vLivingRoom     = ["Vacuum Living room:", $("vLivingRoom").value];
       item.sKitchen        = ["Sweep Kitchen:", $("sKitchen").value];
       item.wDishes         = ["Wash Dishes:", $("wDishes").value];
       item.gUpCar          = ["Gas up the Vehicle:", $("gUpCar").value];
       item.cStore          = ["Go to corner Store:", $("cStore").value ];
    localStorage.setItem(id , JSON.stringify(item)); 
    alert("Tasks Saved");

  } //end of save data function
  
   var save = $("complete"),
       vLivingRoom = "No",
       sKitchen    = "No",
       wDishes     = "No",
       gUpCar      = "No",
       cStore      = "No";
 save.addEventListener("click", saveData)
 
  // var displayLink = $("displayLink");
   showData = function(){
   toggleControls("on");
   var makeDiv = document.createElement("div");
   makeDiv.setAttribute("id", "items");
  var makeList = document.createElement("ul");
   makeDiv.appendChild(makeList);
   document.body.appendChild(makeDiv);
   $("items").style.display = "block"; // make corection 
   for(var i=0, j=localStorage.length; i<j; i++){
    var makeli = document.createElement("li");
    makeList.appendChild(makeli);
    var key    = localStorage.key(i);
    var value  = localStorage.getItem(key);
    var object = JSON.parse(value);
    var makeSubList = document.createElement("ul");
   makeli.appendChild(makeSubList);
    for(var n in object){
      var makeSubli = document.createElement("li");
      makeSubList.appendChild(makeSubli);
      var optSubText = object [n] [0]+ " " + object [n] [1];
      makeSubli.innerHTML = optSubText;
    }
    
   }
  } // end of display function 

    var displayLink = $("displayLink");
   displayLink.addEventListener("click", showData);
       
}); // end of function

     
