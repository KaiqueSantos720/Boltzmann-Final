$("#back").on("click", function(){
    back()
});

$("#back-2").on("click", function(){
    back()
});

$("#btz1").on("click", function(){
    hideShow("#bio1")
});

$("#btz2").on("click", function(){
    hideShow("#bio2")
});

$("#btz3").on("click", function(){
    hideShow("#bio3")
});

$("#btz4").on("click", function(){
    hideShow("#bio4")
});

$("#btz5").on("click", function(){
    hideShow("#bio5")
});

$("#btz6").on("click", function(){
    hideShow("#bio6")
});

$("#btz7").on("click", function(){
    hideShow("#bio7")
});

$("#btz8").on("click", function(){
    hideShow("#bio8")
});

$("#btz9").on("click", function(){
    hideShow("#bio9")
});

$("#btz10").on("click", function(){
    hideShow("#bio10")
});

$("#btz11").on("click", function(){
    hideShow("#bio11")
});

$("#btz12").on("click", function(){
    hideShow("#bio12")
});

let hideShow = (e) => {
    $(".list").slideUp(1000)
    document.querySelector('.x').style.visibility = "visible"
    $(e).slideDown(1000)
}

let back = () => {
    document.querySelector('.x').style.visibility = "hidden"
    $(".biografia").slideUp(1000);
    $(".list").slideDown(1000);
}
