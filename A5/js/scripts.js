function dropdown(){
	var showNav = document.getElementById("myTopNav");
	if (showNav.style.display === "none"){
		showNav.style.display = "block";
	}
	else{
		showNav.style.display = "none";
	}
}
function sendMsg(){
	var first = document.getElementById("fN").value;
	var last = document.getElementById("lN").value;
	var email = document.getElementById("email").value;
	var message = document.getElementById("msg").value;
	var text=
	alert("Your message has been recieved.\nThank you " + first + "!");
}

// help from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_collapsible
var faq = document.getElementsByClassName("expandable");
var i;
for (i = 0; i < faq.length; i++) {
	faq[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var faqP = this.nextElementSibling;
		if (faqP.style.display === "block"){
			faqP.style.display = "none";
		}
		else{
			faqP.style.display = "block";
		}
	});
}