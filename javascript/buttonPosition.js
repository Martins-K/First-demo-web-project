var clicks = 0;

function buttonPosition() {
	clicks = clicks + 1;
	var randNo = Math.floor(Math.random() * 600)
	var mainigais = document.getElementById("podzina");
	mainigais.style.position = "absolute";
	mainigais.style.top = randNo+"px";
	mainigais.style.left = randNo+"px";

	
		switch (clicks) {
			case 0:
				console.log("Clicks are"+clicks);
				break;
			case 1:
				mainigais.innerHTML = "Mēģini vēlreiz!";
				console.log("Clicks are"+clicks);
				break;
			case 2:
				mainigais.innerHTML = "Vēlreiz!";
				console.log("Clicks are"+clicks);
				break;
			case 3:
				clicks = 0;
				mainigais.innerHTML = "Apnika.. Kad esi gatavs, spied vēlreiz!";
				console.log("Clicks are"+clicks);
				break;
			}
		}

