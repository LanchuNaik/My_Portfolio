var tablink=document.getElementsByClassName("tab-link");
var tabcontent=document.getElementsByClassName("tab-content");
   
function opentab(tabname){
  for(tablinks of tablink){
     tablinks.classList.remove("active-link");
  }
  for(tabcontents of tabcontent){
    tabcontents.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

 var sidemenu=document.getElementById("sidemenu");
 function openmenu(){
  sidemenu.style.right="0";
 }
 function closemenu(){
  sidemenu.style.right="-200px";
 }

 var typed = new Typed(".auto-type",{
 strings:["Java","Oracle SQL","Python","Machine-Learning"],
 typeSpeed:150,
 backSpeed:150,
 loop:true
 })