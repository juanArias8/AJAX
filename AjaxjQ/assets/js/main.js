$(document).ready(()=>{
	var btn = $("#btnCheck");
	var text = $("#text");
	var userText = $("#userText");

	btn.on("click", ()=>{
		let user = userText.val();
		userText.val("");
		$.get("checkUser.php?user=" + user, (data, status)=>{
			if(status == "success"){
				if(data == "1"){
					text.text("Nombre existente");
				} else {
					text.text("Nombre desconocido");
				}
			}else {
				text.text("Ha ocurrido un error");
			}
		});
		setTimeout(()=> { text.text(""); }, 3000);
	})
});
