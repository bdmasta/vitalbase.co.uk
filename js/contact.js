$(function() {

   $("input,textarea,select").jqBootstrapValidation({
       preventSubmit: true,
       submitError: function($form, event, errors) {
           // additional error messages or events
       },
       submitSuccess: function($form, event) {
           event.preventDefault(); // prevent default submit behaviour
           // get values from FORM
           var name = $("input#name").val();
           var email = $("input#email").val();
           var company = $("input#company").val();
           var message = $("textarea#message").val()
           var address = $("input#address").val();;
           var firstName = name; // For Success/Failure Message
           // Check for white space in name for Success/Fail message
           if (firstName.indexOf(' ') >= 0) {
               firstName = name.split(' ').slice(0, -1).join(' ');
           }
           $.ajax({
               url: "../mail/contact_me.php",
               type: "POST",
               data: {
                   name: name,
                   email: email,
                   company: company,
                   message: message,
                   address: address
               },
               cache: false,
               success: function() {
                   // Success message
                   $('#success').html("<div class='alert alert-success'>");
                   $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                       .append("</button>");
                   $('#success > .alert-success')
                       .append("<strong>Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais.</strong>");
                   $('#success > .alert-success')
                       .append('</div>');

                   //clear all fields
                   $('#contactForm').trigger("reset");
               },
               error: function() {
                   // Fail message
                   $('#success').html("<div class='alert alert-danger'>");
                   $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                       .append("</button>");
                   $('#success > .alert-danger').append("<strong>Désolé, le serveur ne semble pas répondre. Ré-essayez ultérieurement.");
                   $('#success > .alert-danger').append('</div>');
                   //clear all fields
                   $('#contactForm').trigger("reset");
               },
           })
       },
       filter: function() {
           return $(this).is(":visible");
       },
   });

   $("a[data-toggle=\"tab\"]").click(function(e) {
       e.preventDefault();
       $(this).tab("show");
   });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
   $('#success').html('');
});
