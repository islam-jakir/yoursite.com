$(document).ready(function(){
    $("#checkPicA").on("change",function(){
        $("#meA").html('<i style="color:blue" class="fas fa-check-circle"></i> Image(A)');
    });
    $("#checkPicB").on("change",function(){
        $("#meB").html('<i style="color:blue" class="fas fa-check-circle"></i> Image(B)');
    });
    $("#checkPicC").on("change",function(){
        $("#meC").html('<i style="color:blue" class="fas fa-check-circle"></i> Image(C)');
    });
    $("#checkPicD").on("change",function(){
        $("#meD").html('<i style="color:blue" class="fas fa-check-circle"></i> Image(D))');
    });
    $("#checkPicE").on("change",function(){
        $("#meE").html('<i style="color:blue" class="fas fa-check-circle"></i> Profile');
    });

    //edit
    $("#edit_all").on("click",function(){
        $(this).text($(this).text() == "Edit" ? "Close" : "Edit");
        $("#edit_logo").toggle();
        $("#pro_edit").toggle();
        $("#secA_edit").toggle();
        $("#secB_edit").toggle();
        $("#secC_edit").toggle();
        $("#secD_edit").toggle();
        $("#secE_edit").toggle();
    });
});