function loadDoc() {
	var text = document.getElementById("text");
  	var xhttp = new XMLHttpRequest();
  	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
	 		text.innerHTML = this.responseText;
	    }
  	};
	xhttp.open("GET", "info.txt", true);
	xhttp.send();
}