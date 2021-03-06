$(function() {
    $('#side-menu').metisMenu();
});

$(document).ready(function(){
    
});

$(document).on("change", "input[type='checkbox']", function(){
    hideAlert("success");
    hideAlert("danger");
    if(this.checked)
        $("#confirm-msg").text($(this).attr("msg-on"));
    else
        $("#confirm-msg").text($(this).attr("msg-off"));
    console.log($(this).attr("coin"));
    $("#confirm-modal").modal();
});

$(document).on("click", "#resetpwd", function(){
    hideAlert("success");
    hideAlert("danger");
    var newPwd = $("#newpwd").val();
    if(!Utils.isValidPassword(newPwd)){
        showAlert("danger", "Invalid password (min. 8 chars, one digit, one uppercase )");
        return;
    }
    if($("#confirmpwd").val() !== newPwd){
        showAlert("danger", "Password mismatch");
        return;
    }
    $("#confirm-msg").text("Are you sure you want to updated your password ?");
    $("#confirm-ok").data("operation", "password");
    $("#confirm-modal").modal();
});

$(document).on("click", "#resetcode", function(){
    hideAlert("success");
    hideAlert("danger");
    var newPin = $("#newcode").val();

    if(!Utils.isValidCode(newPin)){
        showAlert("danger", "Invalid code, please provide 5 digit");
        return;
    }

    if($("#confirmcode").val() !== newPin){
        showAlert("danger", "Pincode mismatch");
        return;
    }
    $("#confirm-msg").text("Are you sure you want to updated your pincode ?");
    $("#confirm-ok").data("operation", "password");
    $("#confirm-modal").modal();
});

$(document).on("click", "#confirm-ok", function(){
    console.log($(this).data("operation"));
    showAlert("success", "Operation success");
    $("#confirm-modal").modal('hide');
});

$(document).on("click", "#confirm-canc", function(){
    hideAlert("success");
    hideAlert("danger");
    $("#confirm-modal").modal('hide');
});

function showAlert(type, msg){
    $(".alert-" + type).text(msg);
    $(".alert-" + type).fadeIn();
}

function hideAlert(type){
    $(".alert-" + type).fadeOut();
}