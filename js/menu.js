var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");
// var blackout = document.getElementById("blackout");
var faBars = document.getElementsByClassName("fa-bars");
var faTimes = document.getElementsByClassName("fa-times");

openBtn.addEventListener("click", function () {
  document.getElementById("mySidenav").style.width = "100%";
  // blackout.classList.add("blackout");
  openBtn.classList.add("close");
  closeBtn.classList.remove("close");
});
closeBtn.addEventListener("click", function () {
  document.getElementById("mySidenav").style.width = "0";
  openBtn.classList.remove("close");
  closeBtn.classList.add("close");
  // blackout.classList.remove("blackout");
});
