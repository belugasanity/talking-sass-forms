//JS file
//
// $('form.ajax').on('submit', function(){
// 	var that = $(this),
// 		url = that.attr('action'),
// 		type = that.attr('method'),
// 		data = {};
//
// 	that.find('[name]').each(function(index, value){
// 		var that = $(this),
// 			name = that.attr('name'),
// 			value = that.val();
//
// 		data[name] = value;
// 	});
// 	console.log(data);
//
// 	$.ajax({
// 		url: url,
// 		type: type,
// 		data: data,
// 		success: function(response){
// 			console.log(response);
// 		}
// 	});
// 	return false;
// });




// magic.js
// $(document).ready(function() {
//
//     // process the form
//     $('form').submit(function(event) {
//
//         // get the form data
//         // there are many ways to get this data using jQuery (you can use the class or id also)
//         var formData = {
//             'name'              : $('input[name=name]').val(),
//             'address'   		: $('input[name=address]').val(),
//             'from'              : $('input[name=from]').val(),
//             // 'body'   			: $('input[name=body]').val()
//         };
//
//         // process the form
//         $.ajax({
//             type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
//             url         : 'contact.php', // the url where we want to POST
//             data        : formData, // our data object
//             dataType    : 'json', // what type of data do we expect back from the server
//             encode          : true
//         })
//         // using the done promise callback
//             .done(function(data) {
//
//                 // log data to the console so we can see
//                 console.log(data);
//
//                 // here we will handle errors and validation messages
//             });
//
//         // stop the form from submitting the normal way and refreshing the page
//         event.preventDefault();
//     });
//
// });


// magic.js
// $(document).ready(function() {

//     // process the form
//     $('form').submit(function(event) {
//
//         $('.form-group').removeClass('has-error'); // remove the error class
//         $('.help-block').remove(); // remove the error text
//
//         // get the form data
//         // there are many ways to get this data using jQuery (you can use the class or id also)
//         var formData = {
//             'name'              : $('input[name=name]').val(),
//             'address'   		: $('input[name=address]').val(),
//             'from'              : $('input[name=from]').val(),
//             'body'   			: $('input[name=body]').val()
//         };
//
//         // process the form
//         $.ajax({
//             type 		: 'POST', // define the type of HTTP verb we want to use (POST for our form)
//             url 		: 'contact.php', // the url where we want to POST
//             data 		: formData, // our data object
//             dataType 	: 'json', // what type of data do we expect back from the server
//             encode 		: true
//         })
//         // using the done promise callback
//             .done(function(data) {
//
//                 // log data to the console so we can see
//                 console.log(data);
//
//                 // here we will handle errors and validation messages
//                 if ( ! data.success) {
//
//                     // handle errors for name ---------------
//                     if (data.errors.name) {
//                         $('#name-group').addClass('has-error'); // add the error class to show red input
//                         $('#name-group').append('<div class="help-block">' + data.errors.name + '</div>'); // add the actual error message under our input
//                     }
//
//                     // handle errors for email ---------------
//                     if (data.errors.email) {
//                         $('#address-group').addClass('has-error'); // add the error class to show red input
//                         $('#address-group').append('<div class="help-block">' + data.errors.email + '</div>'); // add the actual error message under our input
//                     }
//
//                     // handle errors for superhero alias ---------------
//                     if (data.errors.superheroAlias) {
//                         $('#email-group').addClass('has-error'); // add the error class to show red input
//                         $('#email-group').append('<div class="help-block">' + data.errors.superheroAlias + '</div>'); // add the actual error message under our input
//                     }
//
//                 } else {
//
//                     // ALL GOOD! just show the success message!
//                     $('form').append('<div class="alert alert-success">' + data.message + '</div>');
//
//                     // usually after form submission, you'll want to redirect
//                     // window.location = '/thank-you'; // redirect a user to another page
//
//                 }
//             })
//
//             // using the fail promise callback
//             .fail(function(data) {
//
//                 // show any errors
//                 // best to remove for production
//                 console.log(data);
//             });
//
//         // stop the form from submitting the normal way and refreshing the page
//         event.preventDefault();
//     });
//
// });


$(document).ready(function() {

    $(function () {
        // Get the form.
        var form = $('#ajax-contact');

        // Get the messages div.
        var formMessages = $('#form-messages');

        // TODO: The rest of the code will go here...
    });

	// Set up an event listener for the contact form.
    $(form).submit(function(event) {
        // Stop the browser from submitting the form.
        event.preventDefault();

        // TODO
    });


    // Serialize the form data.
    var formData = $(form).serialize();


    // Submit the form using AJAX.
    $.ajax({
        type: 'POST',
        url: $(form).attr('action'),
        data: formData
    })



	.done(function(response) {
		// Make sure that the formMessages div has the 'success' class.
		$(formMessages).removeClass('error');
		$(formMessages).addClass('success');

		// Set the message text.
		$(formMessages).text(response);

		// Clear the form.
		$('#name').val('');
		$('#email').val('');
		$('#message').val('');
	})


	.fail(function(data) {
		// Make sure that the formMessages div has the 'error' class.
		$(formMessages).removeClass('success');
		$(formMessages).addClass('error');

		// Set the message text.
		if (data.responseText !== '') {
			$(formMessages).text(data.responseText);
		} else {
			$(formMessages).text('Oops! An error occured and your message could not be sent.');
		}
	});



};