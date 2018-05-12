document.addEventListener("DOMContentLoaded", main);

const imageSrc = ["images/firework.gif","images/firework2.gif","images/firework3.gif","images/firework4.gif", "images/heart1.gif", "images/heart2.gif", "images/heart3.gif", "images/heart4.gif"]

function main(){

	document.querySelector("#clear").addEventListener('click', clearScreen);
	document.addEventListener('click', handleClick);

	
}

function handleClick(evt){

	if(evt.target.id !== "clear"){

		document.querySelector('#clear').classList.remove('hidden');

		//console.log(evt.pageX, evt.pageY);

		const img = createPicture();

		const div = document.createElement('div');

		div.classList.add("popup");

		const per = Math.round((Math.random()*20)+10)/100;

		//calculate the width in pixels
		const width = screen.width*per;


		div.style.width =  width + "px";
		div.style.height = width + "px";

		div.style.top = (evt.pageY - (width/2)) + "px";
		div.style.left = (evt.pageX - (width/2)) + "px";

		div.appendChild(img);


		document.querySelector(".images").appendChild(div);

	}


	

}

function createPicture(){

	const img = document.createElement("img");
	img.src = imageSrc[Math.round(Math.random()*(imageSrc.length-1))];

	return img;
}

function clearScreen(evt){
	// console.log(evt);
	// console.log('clear screen');

	document.querySelector(".images").innerText = "";
}