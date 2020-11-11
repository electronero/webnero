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
    console.log($('.row_GLDX even'))
    var coin_selected = $(".btn-selected").attr("id");
        switch(coin_selected){
        case 'etnx-coin':
                $("#sorting_asc_coins").click();
            return allInputs.val("ETNX");
        case 'etnxp-coin':
                $("#sorting_desc_coins").click();
            return allInputs.val("ETNXP");
        case 'etnxc-coin':
            return allInputs.val("ETNXC"); 
        case 'ltnx-coin':
            return allInputs.val("LTNX"); 
        case 'gldx-coin':
            return allInputs.val("GLDX"); 
        case 'crfi-coin':
            return allInputs.val("CRFI"); 
        default:
            break;
        }     
});
