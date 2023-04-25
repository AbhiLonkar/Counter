var count = 0;

$(".decrease").on("click",function(){
    count-=1;
    $("#value").text(count)
});
$(".increase").on("click",function(){
    count+=1;
    $("#value").text(count)
});
$(".reset").on("click",function(){
    count = 0;
    $("#value").text(count)
})
$(".btn").on("click",function(){
    if ((count)<0){
        $("#value").css("color","red");
    }
    else if ((count)>0){
        $("#value").css("color","green");
    }
    else{
        $("#value").css("color","black")
    }
})



