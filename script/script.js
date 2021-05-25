//moving the .display-content when collapse button is pressed
var navbar_toggler = document.querySelector(".navbar-toggler");
navbar_toggler.onclick = function(){
	var a = document.querySelector(".display-content").classList.toggle("display-content-move");
}
