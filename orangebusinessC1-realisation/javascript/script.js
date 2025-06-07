function myFunction(){
    var x = document.getElementById('laNav');
    var c = document.getElementById('contact-us');
    var cbtn = document.getElementById('close-btn');
    if (x.className === "topnav") {
        x.className += " responsive";
        c.style.display = "block";
        cbtn.hidden = false;
    } else {
        x.className = "topnav";
        c.style.display = "none";
        cbtn.hidden = true;
    }
}
document.getElementById('menubar').onclick = myFunction;
document.getElementById('close-btn').onclick = myFunction;