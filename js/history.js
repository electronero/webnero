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
        document.getElementById('sorting_coins').value = 'ETNX'
        //$("#sorting_asc_coins").click();
        $(".sorting_desc").click();
        console.log(document.getElementById('sorting_coins').value)
}
    function etnxpSort() {
        document.getElementById('sorting_coins').value = 'ETNXP'
        $("#sorting_desc_coins").click();
        //$(".sorting_desc").click();
        console.log(document.getElementById('sorting_coins').value)
}
//     function etnxcSort() {
//   document.getElementsByClassName("input-sm").innerHTML = "ETNXC";
// }
    function ltnxSort() {
        document.getElementById('sorting_coins').value = 'LTNX';
        console.log(document.getElementById('sorting_coins').value)
}
    function gldxSort() {
        document.getElementById('sorting_coins').value = 'GLDX';
        console.log(document.getElementById('sorting_coins').value)
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
