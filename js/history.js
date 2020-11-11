$(function() {
    $('#side-menu').metisMenu();
});

$(document).ready(function() {

    ModelViewController.fillHistory();

    $('#transaction-history').DataTable({
        responsive: true,
        "order": [[ 3, 'desc' ]]
    });
    var allInputs = $(":input");
    //allInputs.attr('type');
    //$("#").click();
    var coin_selected = $(".btn-selected").attr("id");
        switch(coin_selected){
        case 'etnx-coin':
                $(".sorting_asc").click();
            return allInputs.val("ETNX");
        case 'etnxp-coin':
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
