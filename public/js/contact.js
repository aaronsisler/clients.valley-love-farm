$(document).ready(function () {
    $('#contactUsForm').validate({
        // initialize plugin
        // rules & options
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            phoneNumber: {
                required: false,
                digits: true,
                minlength: 10,
                maxlength: 10
            }
        },
        submitHandler: function (form) {
            collectInfoAndSendEmail();
            return false;  // blocks regular submit given there is ajax
        }
    });
});
function collectInfoAndSendEmail() {
    let phoneNumber = $('#contactPhone').val();
    let phoneAreaCode = phoneNumber.substring(0, 3);
    let phonePrefix = phoneNumber.substring(3, 6);
    let phoneLineNumber = phoneNumber.substring(6, 10);
    let formattedNumber = "".concat("(", phoneAreaCode, ")", " ", phonePrefix, "-", phoneLineNumber);
    $.ajax({
        url: "https://formspree.io/valleylovehs@gmail.com",
        method: "POST",
        data:
            {
                name: $('#contactName').val(),
                email: $('#contactEmail').val(),
                phone: formattedNumber,
                comment: $('#contactComment').val()
            },
        dataType: "json"
    })
        .done(function () { onSuccessfulEmailSend(); })
        .fail(function () { onFailureEmailSend() });
}

function onSuccessfulEmailSend() {
    $('#contactUsDiv').hide();
    $('#contactUsOpener').hide();
    $('#contactUsSuccess').show();
}

function onFailureEmailSend() {
    $('#contactUsDiv').hide();
    $('#contactUsOpener').hide();
    $('#contactUsError').show();
}

function resetContactInfo() {
    $('#contactName').val("");
    $('#contactEmail').val("");
    $('#contactPhone').val("");
    $('#contactComment').val("");
    $('#contactUsDiv label').hide();
}