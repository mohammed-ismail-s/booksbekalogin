
var validateURL = 'http://localhost:3000/login/validate';

$(document).ready(function () {
    $("#login").click(function (event) {
        event.preventDefault();
        data = {
            'username': $('#username').val(),
            'password': $('#password').val(),
        };
        $.ajax({
            type: 'post',
            data: data,
            url: validateURL,
            dataType: 'json'
        }).done(function (response) {
            if (response.fullname) {
                let fullname = response.fullname;
                let id = response._id;
                if (typeof (Storage) !== "undefined") {
                    localStorage.setItem("fullname", fullname);
                    localStorage.setItem("id", id);
                }
                location.href = './Pages/adminPage.html'
            } else {
                $('#username').val('');
                $('#password').val('');
                $('#errorInfo').text('Please Enter Correct Creditails');
            }
        });
    });

});