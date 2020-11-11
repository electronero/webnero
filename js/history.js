$(function() {
    $('#side-menu').metisMenu();
});

$(document).ready(function() {

    ModelViewController.fillHistory();

    $('#transaction-history').DataTable({
        responsive: true,
        "order": [[ 3, 'desc' ]]
    });
    var allInputs = $("#sorting_coins");
    //allInputs.attr('type');
    //$("#").click();
    $('.sorting_asc').attr('id', 'sorting_asc_coins');
    $('.sorting_desc').attr('id', 'sorting_desc_coins');
    $('.input-sm').attr('id', 'sorting_coins');
    console.log($('.row_GLDX even'));
    function etnxSort() {
        document.getElementById('sorting_coins').value = ''
        //$("#sorting_asc_coins").click();
        $(".sorting_desc").click();
        document.getElementById("sorting_coins").innerHTML = "ETNX";
        console.log($('#sorting_coins'))
        console.log($('#sorting_coins').val())
}
    function etnxpSort() {
        document.getElementById('sorting_coins').value = ''
        $("#sorting_desc_coins").click();
        //$(".sorting_desc").click();
        $('#sorting_coins').val("ETNXP");
        document.getElementById("sorting_coins").innerHTML = "ETNXP";
        console.log($('#sorting_coins'))
        console.log($('#sorting_coins').val())
}
//     function etnxcSort() {
//   document.getElementsByClassName("input-sm").innerHTML = "ETNXC";
// }
    function ltnxSort() {
        document.getElementById('sorting_coins').value = ''
        $(this).closest('form').find("input[type=search], textarea").val("LTNX");
        $('#sorting_coins').val("LTNX");
        document.getElementById("sorting_coins").innerHTML = "LTNX";
}
    function gldxSort() {
        document.getElementById('sorting_coins').value = ''
        $(this).closest('form').find("input[type=search], textarea").val("GLDX");
        $('#sorting_coins').val("GLDX");
        document.getElementById("sorting_coins").innerHTML = "GLDX";
}
//     function crfiSort() {
//   document.getElementsByClassName("input-sm").innerHTML = "CRFI";
// }
    document.getElementById("etnx-coin").addEventListener("click", etnxSort);
    document.getElementById("etnxp-coin").addEventListener("click", etnxpSort);
    //document.getElementById("etnxc-coin").addEventListener("click", etnxcSort);
    document.getElementById("ltnx-coin").addEventListener("click", ltnxSort);
    document.getElementById("gldx-coin").addEventListener("click", gldxSort);
    //document.getElementById("crfi-coin").addEventListener("click", crfiSort);
    
});
