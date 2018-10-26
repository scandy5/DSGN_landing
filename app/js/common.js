$(function() {



});

// function openMenu() { 
// 	document.getElementById('sidebar').classList.toggle('active');
// 	document.getElementById('toggle-btn').classList.toggle('active-btn');
// 	document.getElementById('toggle-btn').classList.toggle('toggle-btn');
// }

function openMenu() {
	document.getElementById('sidebar').classList.toggle('is-active');
	document.getElementById('navigation').classList.toggle('opacity-1');
	document.getElementById('navigation').classList.toggle('opacity-0');
}