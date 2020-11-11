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
    var elements = document.getElementById('sorting_coins');

    console.log($('.row_GLDX even'));
    console.log(document.getElementsByClassName('input-sm').item(0))
    console.log(document.getElementsByClassName('input-sm').item(1).val)
    console.log(document.getElementsByClassName('input-sm').item(2))
    var element = $(".input-sm", "#transaction-history_filter");
    console.log(element);
    
    function etnxSort() {
        document.getElementById('sorting_coins').innerhtml = 'ETNX';
        //$("#sorting_asc_coins").click();
        $(".sorting_desc").click();
        $(".input-sm", "#transaction-history_filter").val("ETNX");
        var elements_props = $(".input-sm", "#transaction-history_filter");
        console.log($(".input-sm", "#transaction-history_filter").val("ETNX"))
        console.log(elements_props[0].value)
        console.log(elements_props)
        $(".input-sm", "#transaction-history_filter").click();
        $(".input-sm").click();
        let sorting = document.getElementById('sorting_coins');
        sorting.click();
        $(".input-sm", "#transaction-history_filter")[0].value.click()
}
    function etnxpSort() {
        document.getElementById('sorting_coins').innerhtml = 'ETNXP';
        //$("#sorting_asc_coins").click();
        $(".sorting_desc").click();
        $(".input-sm", "#transaction-history_filter").val("ETNXP");
        var elements_props = $(".input-sm", "#transaction-history_filter");
        console.log($(".input-sm", "#transaction-history_filter").val("ETNXP"))
        console.log(elements_props[0].value)
        console.log(elements_props)
        $(".input-sm", "#transaction-history_filter").click();
        $(".input-sm").click();
        let sorting = document.getElementById('sorting_coins');
        sorting.click();
        $(".input-sm", "#transaction-history_filter")[0].value.click()
}
//     function etnxcSort() {
//   document.getElementsByClassName("input-sm").innerHTML = "ETNXC";
// }
    function ltnxSort() {
        document.getElementById('sorting_coins').innerhtml = 'LTNX';
        //$("#sorting_asc_coins").click();
        //$(".sorting_asc").click();
        $(".input-sm", "#transaction-history_filter").val("LTNX")
        console.log($(".input-sm", "#transaction-history_filter").val("LTNX"))
        console.log(document.getElementById('sorting_coins').value)
        $(".input-sm", "#transaction-history_filter").click();
        $(".input-sm").select(function(){
        $("input").val("LTNX");
        });
        $("#ltnx-coin").click(function(){
          $(".input-sm").trigger("click");
        });
        $(".input-sm", "#transaction-history_filter")[0].value.click()
    }
    function gldxSort() {
        document.getElementById('sorting_coins').innerhtml = 'GLDX';
        //$("#sorting_asc_coins").click();
        //$(".sorting_asc").click();
        $(".input-sm", "#transaction-history_filter").val("GLDX")
        console.log($(".input-sm", "#transaction-history_filter").val("GLDX"))
        console.log(document.getElementById('sorting_coins').value)
        $(".input-sm", "#transaction-history_filter").click();
        $(".input-sm").select(function(){
        $("input").val("GLDX");
        });
        $("#gldx-coin").click(function(){
          $(".input-sm").trigger("click");
        });
        $(".input-sm", "#transaction-history_filter")[0].value.click()
}
//     function crfiSort() {
//   document.getElementsByClassName("input-sm").innerHTML = "CRFI";
// }
    document.getElementById("etnx-coin").addEventListener("click", etnxSort);
    document.getElementById("etnxp-coin").addEventListener("click", etnxpSort);
          $(".input-sm", "#transaction-history_filter").select(function(){
        $("input").val("ETNXP");
      });
      $("button").click(function(){
        $("input").trigger("select");
      });
    //document.getElementById("etnxc-coin").addEventListener("click", etnxcSort);
    document.getElementById("ltnx-coin").addEventListener("click", ltnxSort);
    document.getElementById("gldx-coin").addEventListener("click", gldxSort);
    //document.getElementById("crfi-coin").addEventListener("click", crfiSort);
    
});
