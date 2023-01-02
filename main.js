var canvas = document.getElementById("myCanvas");
var contexto = canvas.getContext("2d");
var img_width = 300;
var img_height = 100;
var img_image;
var img_x = 100;
var img_y = 100;

function add() {
	var img_imgTag = new Image(); 
	var img_imgTag.onload = uploadimg;
	var img_imgTag.src = img_image;
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown, my_keydown");

function my_keydown(e){
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)){
			aplhabetkey();
			document.getElementById("d1").innerHTML="Voce precionou uma tecla alfabetica";
			console.log("alphabet key");
			nunberkey();
			document.getElementById("d1").innerHTML="Voce precionou uma tecla numerica";
			console.log("nuber key");
			arrowkey();
			document.getElementById("d1").innerHTML="Voce precionou uma tecla direcional";
			console.log("arrow key");
			specialkey();
			document.getElementById("d1").innerHTML="Voce precionou uma tecla especial";
			console.log("special key");
		}
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
	}
}

function aplhabetkey(){
	img_image="alfabeto.png"

}
function numberkey(){
	img_image="números.png"
}
function arrowkey(){
	img_image="direcional.png"
}
function specialkey(){
	img_image="especial.png"
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}