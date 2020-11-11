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
            return $('.input-sm').val("ETNX");
        case 'etnxp-coin':
                $("#sorting_desc_coins").click();
            return $('.input-sm').val("ETNXP");
        case 'etnxc-coin':
            return $('.input-sm').val("ETNXC"); 
        case 'ltnx-coin':
            return $('.input-sm').val("LTNX"); 
        case 'gldx-coin':
            return $('.input-sm').val("GLDX"); 
        case 'crfi-coin':
            return $('.input-sm').val("CRFI"); 
        default:
            break;
        }     
});
