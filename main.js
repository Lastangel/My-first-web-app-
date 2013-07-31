// Arthor: Clifton Abraham
// VFW 1307
// Project 3 07/27/2013

window.addEventListener("DOMContentLoaded", function(){


// getElements
 function $(x){
var information = document.getElementById(x);
    return information;
   }
   // set Links

   

 getCheckBoxValue = function(){ // check this 
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
             $("clear").style.display = "inline";
             $("displayLink").style.display = "none";
             $("addNew").style.display = "inline";
            break;
        case "off":
             $("myForm").style.display = "block";
              $("clear").style.display = "inline";
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
  
  showData = function(){
   toggleControls("on");
   if(localStorage.length === 0){
    alert("No Data Saved in Storage. Default Data as been added.");
    autoFillData();
   }
   var makeDiv = document.createElement("div");
   makeDiv.setAttribute("id", "items");
  var makeList = document.createElement("ul");
   makeDiv.appendChild(makeList);
   document.body.appendChild(makeDiv);
   $("items").style.display = "block"; // make corection 
   for(var i=0, j=localStorage.length; i<j; i++){
    var makeli = document.createElement("li");
    var linksLi = document.createElement("li"); // week 3 addition
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
      makeSubList.appendChild(linksLi); // week 3 addition
    }
     makeItemLinks(localStorage.key(i) , linksLi);
   }
  } // end of show data  function
  
  autoFillData = function(){
    for(var n in json){
        var id = Math.floor( Math.random() * 1000000001 );
        localStorage.setItem(id, JSON.stringify(json[n]))
    }
  }
  
  
   makeItemLinks = function(key, linksLi){
    
    var editLink = document.createElement("a");
        editLink.href = "#";
        editLink.key = key;
    var editText = "Edit Task?";
    editLink.addEventListener("click", editItem);
    editLink.innerHTML = editText;
     linksLi.appendChild(editLink);
     
     var breakTag = document.createElement("br");
         linksLi.appendChild(breakTag);
   
     var deleteLink =document.createElement("a");
      deleteLink.href = "#";
      deleteLink.key = key;
  var deleteText = "Delete Task?";
    
   deleteLink.addEventListener("click", deleteItem);
    deleteLink.innerHTML = deleteText;
     linksLi.appendChild(deleteLink);
    
 }
   editItem = function(){
    var value = localStorage.getItem(this.key);
    var item = JSON.parse(value);
    
    toggleControls("off");
    
    $("fname").value = item.fname[1];
    $("lname").value = item.lname[1];
    $("email").value = item.email[1];
    $("pword").value = item.pword[1];
 
   
   if(item.vLivingRoom[1] == "Yes"){
    $("vLivingRoom").setAttribute("checked", "checked");
   }
   if(item.sKitchen[1] == "Yes"){
    $("sKitchen").setAttribute("checked", "checked");
   }
   if(item.wDishes [1] == "Yes"){
     $("wDishes").setAttribute("checked", "checked");
     }
     if(item.gUpCar[1] == "Yes"){
       $("gUpCar").setAttribute("checked", "checked");
     }
     if(item.cStore[1] == "Yes"){
        $("cStore").setAttribute("checked", "checked");
     }
     $("comments").value = item.comments[1];
     
     save.removeEventListener("Click", saveData);
     $("complete").value = "Edit Task";
     var editComplete = $("complete");
     editComplete.addEventListener("click", validate);
     editComplete.key = this.key;
     
     
     
     
   } // end of edit function
   
   deleteItem = function(){
    var ask = confirm("Are you sure you want to delete Task?");
    if(ask){
        localStorage.removeItem(this.key);
        window.location.reload();
    }else{
        alert("your task has not been deleted");
    }
   }
    var displayLink = $("displayLink");
   
   displayLink.addEventListener("click", showData);
   
    clearStorage = function(){
     if(localStorage.length === 0){
        alert("There is no Data to Clear")
     }else{
        localStorage.clear();
        alert("All the Tasks are Deleted!");
        window.location.reload();
        return false; 
     }
    } // end of clear function
  var clearData = $("clear");
  clearData.addEventListener("click", clearStorage);
  
  validate = function(e){
    var getFname = $("fname");
    var getLname = $("lname");
    var getEmail = $("email");
    var getPWord = $("pword");
   errMsg.innerHTML = "";
     getFname.style.border = "1px solid black";
     getLname.style.border = "1px solid black";
     getEmail.style.border = "1px solid black";
     getPWord.style.border = "1px solid black";
     
  var messageAry = [ ];
    
    if(getFname.value === ""){
        var fNameError = "Please enter First name. ";
        getFname.style.border = "1px solid red";
        messageAry.push(fNameError);
    }
    
    if(getLname.value === ""){
        var lNameError = "Please enter Last name. ";
        getLname.style.border = "1px solid red";
        messageAry.push(lNameError);
    }
    
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!(re.exec(getEmail.value))){
        var emailError = "Please enter a valid email address.";
        getEmail.style.border = "1px solid red";
        messageAry.push(emailError);
    }
      if(getPWord.value === ""){
        var pWordError = "Please make a password.";
        getPWord.style.border = "1px solid red";
        messageAry.push(pWordError);
    }
    if(messageAry.length >= 1){
        for(var i=0, j=messageAry.length; i< j; i++){
            var txt = document.createElement("li");
            txt.innerHTML = messageAry[i];
            $("errors").appendChild(txt);
        } e.preventDefault();
       return false;
 
    } else {
        saveData();
    }
 
  
  }
  
  
  
  
  // gloabal varibles
  
     var save = $("complete"),
       vLivingRoom = "No",
       sKitchen    = "No",
       wDishes     = "No",
       gUpCar      = "No",
       cStore      = "No";
     var errMsg = $("errors");
    
     var id,
         item,
         save,
         saveData;


 save.addEventListener("click", validate)
  
}); // end of function

     
