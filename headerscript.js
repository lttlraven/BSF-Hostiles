// JavaScript Document
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
window.addEventListener('mouseup', function(event){
	var div = document.getElementById('mySidenav');
	if (event.target != div && event.target.parentNode != div){
        document.getElementById("mySidenav").style.width = "0";
    }
});
function on() {
  document.getElementById("fallback").style.display = "block";
}

function off() {
  document.getElementById("fallback").style.display = "none";
}