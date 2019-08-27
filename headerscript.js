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