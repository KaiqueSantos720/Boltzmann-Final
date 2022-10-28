$("#sl1").on("click", function(){
    if (document.getElementById("showcase").style.width == "0vw"){
        float(1, document.getElementById("showcase2"), document.getElementById("showcase3"), document.getElementById("showcase4"))
        animate("#showcase2", "#showcase3", "#showcase", "#showcase4", "#showcase5")
    }
});

$("#sl2").on("click", function(){
    if(document.getElementById("showcase2").style.width < "100%"){
        float(2, document.getElementById("showcase3"), document.getElementById("showcase4"), document.getElementById("showcase5"))
        config(document.getElementById("showcase2"))
        animate("#showcase", "#showcase3", "#showcase2", "#showcase4", "#showcase5")
    }
});

$("#sl3").on("click", function(){
    if(document.getElementById("showcase3").style.width < "100%"){
        float(3, document.getElementById("showcase2"), document.getElementById("showcase4"), document.getElementById("showcase5"))
        config(document.getElementById("showcase3"))
        animate("#showcase", "#showcase2", "#showcase3", "#showcase4", "#showcase5")
    }
});

$("#sl4").on("click", function(){
    if(document.getElementById("showcase4").style.width < "100%"){
        float(4, document.getElementById("showcase3"), document.getElementById("showcase2"), document.getElementById("showcase5"))
        config(document.getElementById("showcase4"))
        animate("#showcase", "#showcase2", "#showcase4", "#showcase3", "#showcase5")
    }
});

$("#sl5").on("click", function(){
    if(document.getElementById("showcase5").style.width < "100%"){
        float(5, document.getElementById("showcase3"), document.getElementById("showcase2"), document.getElementById("showcase4"))
        config(document.getElementById("showcase5"))
        animate("#showcase", "#showcase2", "#showcase5", "#showcase3", "#showcase4")
    }
});

let animate = (e1, e2, e3, e4, e5) => {
    let vetor = [e1, e2, e3, e4, e5]
    for(i = 0; i < vetor.length; i++){
        if(vetor[i] === e3){
            $(vetor[i]).animate({width: '0vw'}, "slow");
            $(vetor[i]).show(0);
            $(vetor[i]).animate({width: '100%'}, "slow");
        }
        else{
            $(vetor[i]).animate({width: '0vw'}, "slow");
            $(vetor[i]).hide(0);
        }
    }
}

let config = (e) => {
    e.style.display = "flex";
    e.style.justifyContent = "center";
    e.style.alignItems = "center";
}

let float = (e1, e2, e3, e4) => {
    let vetor = [e1, e2, e3, e4]
    for (i = 0; i < vetor.length; i++){
        if(vetor[i] === 4){
            vetor[i+1].style.float = "left";
            vetor[i+2].style.float = "left";
            vetor[i+3].style.float = "right";
        }

        if(vetor[i] === 5){
            vetor[i+1].style.float = "left";
            vetor[i+2].style.float = "left";
            vetor[i+3].style.float = "left";
        }

        if(vetor[i] === 3){
            vetor[i+1].style.float = "left";
            vetor[i+2].style.float = "right";
            vetor[i+3].style.float = "right";
        }

        if(vetor[i] === 2){
            vetor[i+1].style.float = "right";
            vetor[i+2].style.float = "right";
            vetor[i+3].style.float = "right";
        }

        if(vetor[i] === 1){
            vetor[i+1].style.float = "right";
            vetor[i+2].style.float = "right";
            vetor[i+3].style.float = "right";
            document.getElementById("showcase5").style.float = "right";
        }
    }
}

let windowWidth = window.innerWidth;
console.log(windowWidth)
if(windowWidth > 1500){
    window.sr = ScrollReveal({ reset: true });

    sr.reveal(".center", { duration: 1000, rotate: {x: 0, y:100, z:00}, delay:500 })
    sr.reveal(".pl1", { duration: 1000, rotate: {x: 0, y:100, z:00}, delay:500 })
    sr.reveal(".form", { duration: 1000, delay:500 })
    sr.reveal("#produto", { duration: 1000, rotate: {x: 100, y:00, z:00}, delay:500 })
}
