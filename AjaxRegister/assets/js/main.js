$( document ).ready(()=>{

	var name 		= $( "#name" );
	var password 	= $( "#password" );
	var alert 		= $( "#alert" );
	var form 		= $( "#form" );
	var alertm		= $( "#alert-message" );
	var dataSend 	= { };

	alert.hide();

	form.submit((event)=>{
		alert.show( "slow" );
		event.preventDefault();

		dataSend 	= { 
			"name"		: name.val(),
			"password"	: password.val()
		}

		console.log(dataSend);

		$.ajax({
			type		: "POST",
			url			: "registerUser.php",
			data 		: dataSend,
			datatype	: "json",
			enconde		: true	
		}).done(( data )=>{
			data = JSON.parse(data);	
			if( data.success ){
				alertm.text( data.message );
			} else {
				if( data.errors.name )
					alertm.text( alertm.text() + " " + data.errors.name );
				if( data.errors.password )
					alertm.text( alertm.text() + " " + data.errors.password );
			}
		})

		setTimeout(()=> { 
			alertm.text( "" ); 
			alert.hide( "slow" );
		}, 4000);
	});
});
