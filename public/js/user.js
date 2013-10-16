$(document).ready(function () {
    console.info('ready');
    // TODO: validate
    var formData = {
        name: $("#yoga_instructor").val(),
        number: $("#yoga_instructor_in").val()
    }; //Array

    $("#professional").on('click', function () {
        $.ajax({
            url: "./profession",
            type: "POST",
            data: formData,
            success: function (data, textStatus, jqXHR) {
                //data - response from server
                $("#mainContainer > div").replaceWith(data);
            },
            error: function (jqXHR, textStatus, errorThrown) {

            }
        });
    });
});
