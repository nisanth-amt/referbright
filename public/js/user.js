$( document ).ready(function() {
   console.info('ready');    
   // TODO: validate
   var formData = {}; //Array

   $("#professional").on('click', function() {
   $.ajax({
       url : "./profession",
       type: "POST",
       data : formData,
       success: function(data, textStatus, jqXHR)
       {
        //data - response from server
          $("#mainContainer > div").replaceWith(data);
       },
       error: function (jqXHR, textStatus, errorThrown)
       {
 
       }
    });
    });
});
