let actives = [".content1", ".content2", ".content3", ".content4", ".content5", ".content6", ".content7", ".content8", ".content9", ".content10", ".content11", ".content12"]





$(".st1").click(function(){
    hideShow(".content1")
});

$(".st2").click(function(){
    hideShow(".content2")
});

$(".st3").click(function(){
    hideShow(".content3")
});

$(".st4").click(function(){
    hideShow(".content4")
});

$(".st5").click(function(){
    hideShow(".content5")  
});

$(".st6").click(function(){
    hideShow(".content6")
});

$(".st7").click(function(){
    hideShow(".content7")
});

$(".st8").click(function(){
    hideShow(".content8")
});

$(".st9").click(function(){
    hideShow(".content9")
});

$(".st10").click(function(){
    hideShow(".content10")
});

$(".st11").click(function(){
    hideShow(".content11")
});

$(".st12").click(function(){
    hideShow(".content12")
});







$("#caracteristicas1").click(function(){
    esfCarac("#esfera1", "#carac1")
});

$("#superterras1").click(function(){
    esfCarac("#carac1", "#esfera1")
});

$("#caracteristicas2").click(function(){
    esfCarac("#esfera2", "#carac2")
});

$("#superterras2").click(function(){
    esfCarac("#carac2", "#esfera2")
});

$("#caracteristicas3").click(function(){
    esfCarac("#esfera3", "#carac3")
});

$("#superterras3").click(function(){
    esfCarac("#carac3", "#esfera3")
});

$("#caracteristicas4").click(function(){
    esfCarac("#esfera4", "#carac4")
});

$("#superterras4").click(function(){
    esfCarac("#carac4", "#esfera4")
});

$("#caracteristicas5").click(function(){
    esfCarac("#esfera5", "#carac5")
});

$("#superterras5").click(function(){
    esfCarac("#carac5", "#esfera5")
});

$("#caracteristicas6").click(function(){
    esfCarac("#esfera6", "#carac6")
});

$("#superterras6").click(function(){
    esfCarac("#carac6", "#esfera6")
});

$("#caracteristicas7").click(function(){
    esfCarac("#esfera7", "#carac7")
});

$("#superterras7").click(function(){
    esfCarac("#carac7", "#esfera7")
});

$("#caracteristicas8").click(function(){
    esfCarac("#esfera8", "#carac8")
});

$("#superterras8").click(function(){
    esfCarac("#carac8", "#esfera8")
});

$("#caracteristicas9").click(function(){
    esfCarac("#esfera9", "#carac9")
});

$("#superterras9").click(function(){
    esfCarac("#carac9", "#esfera9")
});

$("#caracteristicas10").click(function(){
    esfCarac("#esfera10", "#carac10")
});

$("#superterras10").click(function(){
    esfCarac("#carac10", "#esfera10")
});

$("#caracteristicas11").click(function(){
    esfCarac("#esfera11", "#carac11")
});

$("#superterras11").click(function(){
    esfCarac("#carac11", "#esfera11")
});

$("#caracteristicas12").click(function(){
    esfCarac("#esfera12", "#carac12")
});

$("#superterras12").click(function(){
    esfCarac("#carac12", "#esfera12")
});






let hideShow = (e) => {
    for(i = 0; i < actives.length; i++){
        if(actives[i] != e){
            $(actives[i]).slideUp(1000)
        }
        else{
            $(actives[i]).slideDown(1000)
        }
    }
}

let esfCarac = (hide, show) => {
    $(hide).slideUp(1000)
    $(show).slideDown(1000)
}