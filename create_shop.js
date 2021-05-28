//image repeater
setInterval(function(){
    if(document.getElementsByClassName("item")[3].classList.contains("active")){

        document.getElementsByClassName("item")[2].classList.add("active");
        document.getElementsByClassName("item")[3].classList.remove("active");

    }else if(document.getElementsByClassName("item")[2].classList.contains("active")){

        document.getElementsByClassName("item")[1].classList.add("active");
        document.getElementsByClassName("item")[2].classList.remove("active");

    }else if(document.getElementsByClassName("item")[1].classList.contains("active")){

        document.getElementsByClassName("item")[0].classList.add("active");
        document.getElementsByClassName("item")[1].classList.remove("active");
    
    }else if(document.getElementsByClassName("item")[0].classList.contains("active")){

        document.getElementsByClassName("item")[3].classList.add("active");
        document.getElementsByClassName("item")[0].classList.remove("active");
    
    }   
}, 1500);

//taken pic
function picA_view(event){
    var reader = new FileReader();
    reader.onload = function(){
        var output = document.getElementById("picA");
        output.src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
}

function picB_view(event){
    var reader = new FileReader();
    reader.onload = function(){
        var output = document.getElementById("picB");
        output.src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
}

function picC_view(event){
    var reader = new FileReader();
    reader.onload = function(){
        var output = document.getElementById("picC");
        output.src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
}

function picD_view(event){
    var reader = new FileReader();
    reader.onload = function(){
        var output = document.getElementById("picD");
        output.src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
}

function picE_view(event){
    var reader = new FileReader();
    reader.onload = function(){
        var output = document.getElementById("picE");
        output.src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
}
//top
document.querySelector("#namA").addEventListener("keyup",function(){
    var emptyValue = document.querySelector("#addNam").innerHTML = this.value + "<b id='permAll'></b>";
    if(emptyValue == 0){
        document.querySelector("#addNam").innerHTML = "<span style='cursor: not-allowed;color:gray;font-size:26px'>shop Name</span>";
    }
});
//middle
document.querySelector("#titlenam").addEventListener("keyup",function(){
    var emptyTitle = document.querySelector(".title_nam").innerHTML = this.value;
    if(emptyTitle == 0){
        document.querySelector(".title_nam").innerHTML = "<span style='cursor: not-allowed;color:gray;font-size:14px;text-transform: uppercase;'>SHOP TITLE</span>";
    }
});
//bottom
document.querySelector("#decp").addEventListener("keyup",function(){
    var emptyTitle = document.querySelector(".desc").innerHTML = this.value;
    if(emptyTitle == 0){
        document.querySelector(".desc").innerHTML = "<span style='cursor: not-allowed;color:gray;font-size:14px;text-transform: uppercase;'>Description write here...</span>";
    }
});
//p5rm 1ll
document.querySelector("#codeMe").addEventListener("keyup",function(){
    var checkPermCd = this.value;
    var cntCheck = checkPermCd.length;

    if(cntCheck > 5){
        document.querySelector("#permAll").innerHTML = "<i style='color:blue' class='fas fa-check-circle'></i>";
    }else{
        document.querySelector("#permAll").innerHTML = "";
    }
});