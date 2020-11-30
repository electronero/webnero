$(document).on("click", "#pin-code", function(){
    $(".alert").css("display", "none");
    if(pin_code.length < 5){
        $(".alert-danger").css("display", "block");
    }
    else {
        //console.log(pin_code);
        location.href = location.href.replace("pin-code", "login");
    }
        
});
