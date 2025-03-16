var display = document.getElementById("demo");
var progres = document.getElementById("prog");
function act() {
   var URL = "https://fhiness.github.io/Spin/";
   var message = "Abig oppurtunity awaits you  " + URL;
   var whatsappUrl = 'https://wa.me/?text=' + encodeURIComponent(message);
   window.location.href = whatsappUrl;

    let  param = 10;
    var per = document.getElementById("per");
    var display = document.getElementById("demo");
    var inpu = document.getElementById("inp");
    var progres = document.getElementById("prog");
     progres.value += param;
     per.innerHTML = progres.value+"%";
     if (progres.value >= 100) {
        display.innerHTML ="You HAVE COMPLETED THE TASK";
        alert("You have complete the task");
     }
     else if (progres.value >= 65) {
       progres.value -= 7;
     }
     else if (progres.value >= 80) {
       progres.value += 3;
     }
      else {
        display.innerHTML= "YOU HAVE NOT COMPLETE THE TASK";
     }
}

function spin(params) {
    var stop = document.getElementById("stop");
    var spin = document.getElementById("spin");
    var main = document.getElementById("main");
    var active = document.getElementById("active");
    var congrat = document.getElementById("congrat");
    spin.style.transform = "rotate(85deg)";
    spin.style.animation = "none";

   
    setTimeout(() => {
        active.animate([
        {display: "block"},
        {transform: "scale(1.3) translatey(200px)"},
        {transform: "scale(1)  translatey(200px)"}
        
    ],
    {
        duration : 5000,
        iterations: 1,
    }
   )   
     }, 8000);

     setTimeout(() => {
        congrat.animate([
        {display: "block"},
        
    ],
    {
        duration : 7000,
        iterations: 1,
    }
   )   
     }, 7000);
   
   

    spin.disabled = true;
      stop.disabled = true;
      stop.style.opacity = 0.5;
    spin.animate([
        {transform: "rotatez(0deg)"},
        { transform: "rotatez(3600deg)"}
    ],
    {
        duration : 5000,
        iterations: 1,
    }
   )


   setInterval(() => {
      main.style.display = "block";
   }, 5000);
}
function comment(params) {
    var com = document.getElementById("comment");
    var dis = document.getElementById("display");
    var con = document.getElementById("commentcon");
    var display = document.getElementById("demo");

    
    
    if (com.value != "") {
        con.style.display = "block";
    }
    else{
        display.innerHTML = "Write a comment.....?";
    }
    dis.value = com.value;
}
function access() {
    var pa = document.getElementById("access");
    if (progres.value >= 100) {
        pa.href = "reward.html";
    } else {
        display.innerHTML = "share till the bar is 100%";
    }
}
