
let more = document.querySelectorAll(".more");
for (let i = 0; i < more.length; i++) {
  more[i].addEventListener("click", function () {
    more[i].parentNode.classList.toggle("active");
  });
}
var icon = document.getElementById("darkicon");
let body = document.getElementById('body')
var darkmode ;
if(localStorage.getItem('myCat'))
{
  darkmode = localStorage.getItem('myCat');
}
else
{
  darkmode = 'white';
}

localStorage.setItem('myCat',darkmode);

if(localStorage.getItem('myCat') == 'black')
{
  icon.src = "images/sun.png";
  document.body.classList.add("dark-theme");
}

// var icon = document.getElementById("darkicon");
icon.onclick = function () {
document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme"))
  {
    icon.src = "images/sun.png";
    localStorage.setItem('myCat','black');
  }
  else{
    icon.src = "images/moon.png";
    localStorage.setItem('myCat','white');
  }
};

// take a variable which 

