var stop = document.querySelector(".red");

var caution = document.querySelector(".yellow");

var go = document.querySelector(".green");

var currentState = "none"

function cycleLight() {
	if (currentState == "none") {
		stop.style.backgroundColor = "white";
		caution.style.backgroundColor = "white";
		go.style.backgroundColor = "white";
		currentState = "red";
	} else if (currentState == "red") {
		stop.style.backgroundColor = "red";
		caution.style.backgroundColor = "white";
		go.style.backgroundColor = "white";
		currentState = "yellow";
	} else if (currentState == "yellow") {
		stop.style.backgroundColor = "white";
		caution.style.backgroundColor = "yellow";
		go.style.backgroundColor = "white";
		currentState = "green";
	} else {
		stop.style.backgroundColor = "white";
		caution.style.backgroundColor = "white";
		go.style.backgroundColor = "green";
		currentState = "red";
	}


}
setInterval(cycleLight, 1000)
