
$( document ).ready(function(){

	$("#content").hide();

	$("#know_more").click(function(){
	  $("#content").show();
	  // this.hide();
	});

	// var form = $('form');
	// $("form").on("submit",function( event ) {
 //  		event.preventDefault();
 //  		console.log("not");
 //  		// $.ajax({
 //    //         type: form.attr('method'),
 //    //         url: form.attr('action'),
 //    //         data: form.serialize(),
 //    //         dataType: 'json',
 //    //         success: function (data) {
 //    //         	console.log(data);
 //    //         },
 //    //         error: function(err){
 //    //         	console.log(err);	
 //    //         }
 //    //     });
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
	// });


});
