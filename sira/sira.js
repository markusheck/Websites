    $(document).ready(function(){
        $('#send_message').click(function(e){
            //stop the form from being submitted
            e.preventDefault();

            /* declare the variables, var error is the variable that we use on the end
            to determine if there was an error or not */
            var error = false;
            var field_firstname = $('#field_firstname').val();
            var field_lastname = $('#field_lastname').val();
            var field_postal_code = $('#field_postal_code').val();
            var field_city = $('#field_city').val();
            var field_phone = $('#field_phone').val();
            var field_email = $('#field_email').val();
            var field_nachricht = $('#field_nachricht').val();
			
//            if(message.length == 0){
//                var error = true;
//                $('#message_error').fadeIn(500);
//            }else{
//                $('#message_error').fadeOut(500);
//            }

            //now when the validation is done we check if the error variable is false (no errors)
            if(error == false){
                //and change the button text to Sending...
                $('#send_message').attr({'disabled' : 'true', 'value' : 'Sending...' });

                /* using the jquery's post(ajax) function and a lifesaver
                function serialize() which gets all the data from the form
                we submit it to send_email.php */

				alert( $("#contact_form").serialize() );
                $.post("mailto:markus.heck@comet-software.com", $("#contact_form").serialize(),function(result){
				    $('#send_message').attr({'disabled' : 'true', 'value' : 'Gesendet' });

				});
            }
        });
    });