
function reset()
{
    $(".row2").show();
    $(".row4 , .row6 , .row9").hide();
}


$(document).ready(function () {
$(function(){
    $(".row4 , .row6 , .row9").hide();
})
});

//if obi was clicked
$(".obirow2").on("click",function(){
    $(".row2 , .row6 , .row9").hide();
    $(".row4").show();
    $(".obirow4").show();
    $(".lukerow4").hide();   
    $(".sidirow4").hide();
    $(".maulrow4").hide();
//enemies row
    $(".row6").show();
    $(".obirow6").hide();
    $(".lukerow6").show();   
    $(".sidirow6").show();
    $(".maulrow6").show();

});
//if luck was clicked
$(".lukerow2").on("click",function(){
    $(".row2  , .row6, .row9").hide();
    $(".row4").show();
    $(".obirow4").hide();
    $(".lukerow4").show();   
    $(".sidirow4").hide();
    $(".maulrow4").hide();
//enemies row
    $(".row6").show();
    $(".obirow6").show();
    $(".lukerow6").hide();   
    $(".sidirow6").show();
    $(".maulrow6").show();

});
//if Sidi was clicked  
$(".sidirow2").on("click",function(){
    $(".row2  , .row6, .row9").hide();
    $(".row4").show();
    $(".obirow4").hide();
    $(".lukerow4").hide();   
    $(".sidirow4").show();
    $(".maulrow4").hide();
//enemies row
    $(".row6").show();
    $(".obirow6").show();
    $(".lukerow6").show();   
    $(".sidirow6").hide();
    $(".maulrow6").show();

});
//if maul was clicked
$(".maulrow2").on("click",function(){
    $(".row2  , .row6, .row9").hide();
    $(".row4").show();
    $(".obirow4").hide();
    $(".lukerow4").hide();   
    $(".sidirow4").hide();
    $(".maulrow4").show();
//enemies row
    $(".row6").show();
    $(".obirow6").show();
    $(".lukerow6").show();   
    $(".sidirow6").show();
    $(".maulrow6").hide();

});

//getting defender as obi
$(".obirow6").on("click",function(){
    //enemies row
    //$(".row6").show();
    $(".obirow6").hide();

//defender row
    $(".row9").show();
    $(".obirow9").show();
    $(".lukerow9").hide();   
    $(".sidirow9").hide();
    $(".maulrow9").hide();
});

//getting defender as luke
$(".lukerow6").on("click",function(){
    //enemies row
    //$(".row6").show();
    $(".lukerow6").hide();

//defender row
    $(".row9").show();
    $(".obirow9").hide();
    $(".lukerow9").show();   
    $(".sidirow9").hide();
    $(".maulrow9").hide();
});

//getting defender as sidi
$(".sidirow6").on("click",function(){
    //enemies row
    //$(".row6").show();
    $(".sidirow6").hide();

//defender row
    $(".row9").show();
    $(".obirow9").hide();
    $(".lukerow9").hide();   
    $(".sidirow9").show();
    $(".maulrow9").hide();
});

//getting defender as maul
$(".maulrow6").on("click",function(){
    //enemies row
    //$(".row6").show();
    $(".maulrow6").hide();

//defender row
    $(".row9").show();
    $(".obirow9").hide();
    $(".lukerow9").hide();   
    $(".sidirow9").hide();
    $(".maulrow9").show();
});

$("#reset").on("click",function(){
reset();
});

$("#fight").on("click",function(){
    
});




