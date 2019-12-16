var arr=["fase2.png","Opendoor2.png","3.jpg","4.jpg"];
$("a").click(function(){
    var i = $(this).index();
    $("img").attr("src",arr[i]);
})