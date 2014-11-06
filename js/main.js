
$( document ).ready(function(){

	$("#content").hide();

	$("#know_more").click(function(){
	  $("#content").show();
	  // this.hide();
	});

	var form = $('form');
	$("form").on("submit",function( event ) {
  		// event.preventDefault();
  		
  		// if($('#idea_description').val().length > 300){
  		// 	event.preventDefault();	
  		// 	console.log("indeia maior que 300 chars");
  		// }

  // 		if($('#email').val() != $('#email_confirmation').val()){
		// 	event.preventDefault();	
  // 			console.log("Emails não são iguais");
  // 		}
  		
  // 		if($('#password').val().length < 8){
		// 	event.preventDefault();	
  // 			console.log("Password pequena de mais.");
		// }

  // 		if($('#password').val() != $('#password_confirmation').val()){
		// 	event.preventDefault();	
  // 			console.log("Passwords não são iguais");
  // 		}

  // 		$('#ideia_equipa').on('change', function(){
		// 	$("#idea_description").prop('disabled', true);
  // 		});



  		// $('#idea_description').removeAttr("required");
  		// $('#idea_description').prop('required',true);


  		// console.log("not");
  		// $.ajax({
    //         type: form.attr('method'),
    //         url: form.attr('action'),
    //         data: form.serialize(),
    //         dataType: 'json',
    //         success: function (data) {
    //         	console.log(data);
    //         },
    //         error: function(err){
    //         	console.log(err);	
    //         }
    //     });


		 //    $.ajax({
			// url: 'https://www51.e-goi.com/api/public/commons/ping',
			// contentType: 'application/json',
			// type: 'POST',
			// dataType: 'json',
			// data: JSON.stringify({
			// 	foo: "This text is left of",
			// 	bar: "this text..."
			// }),
			// success: function(data) {
			// 	var output = data.responseText;
			// 	console.log(output);
			// 	// ... do something useful
			// }
			// });
		 //  		// Submit ajax form and treat answer.
	});


});
