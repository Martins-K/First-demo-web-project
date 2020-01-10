function flagAnimation() {
	var pos = 0; 
	var t = setInterval(flagAnimation, 10);
	var flag = document.getElementById("latvijas-karogs");
	pos += 10;
	if(pos >= 180) {
    clearInterval(t);
	}
}