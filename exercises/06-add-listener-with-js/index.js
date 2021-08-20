window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	//some code here
	let theGreen = document.querySelector('#theGreen');
	theGreen.addEventListener('click', myListenerFunction);
};

//the listener function here
function myListenerFunction(){
	alert("woohoo!");
}