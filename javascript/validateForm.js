function validateForm() {
	console.log("Funkcija sāk darboties");
	var userEmail = document.forms["lietotaja-forma"]["user-email"].value;
	var containsAtSign = /[@]/;
	if (userEmail === "") {
		alert("You haven't filled out your email!");
		return false;
	}
	if (containsAtSymbol.test(userEmail)) {
		alert ("Your name contains @ sign!");

 	}
}