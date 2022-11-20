window.addEventListener("scroll", function(){
    if(this.window.scrollY > 150){
        this.document.querySelector("#navbar").style.opacity = 0.9
    } else{
        this.document.querySelector("#navbar").style.opacity = 1;
    }
});
class MobileNav{
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks(){
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = 'linkFade 0.5s ease forwards 0.3s');
        });
    }

    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick); 
    }

    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNav = new MobileNav(".mobile-menu", "#navbar-itens", "#navbar-itens li",);
mobileNav.init();

let img = document.getElementById("logo");
let idsch = ["#pg", "#titulo1", "#slogan1", "#i1", "#i2", "#i3", "#i4", "#i5", "#i6", "#i7", "#i8", "#ch-color1", "#ch-color2", "#ch-color3", "#ch-color4", "#ch-color5", "#ch-color6"];
let idsby = ["#pg", "#titulo2", "#slogan2", "#b1", "#b2", "#b3", "#b4", "#b5", "#b6", "#b7", "#b8", "#by-color1", "#by-color2", "#by-color3", "#by-color4", "#by-color5", "#by-color6"];
let idscy = ["#pg", "#titulo5", "#slogan5", "#e1", "#e2", "#e3", "#e4", "#e5", "#e6", "#e7", "#e8", "#cy-color1", "#cy-color2", "#cy-color3", "#cy-color4", "#cy-color5", "#cy-color6"];
let idsra = ["#pg", "#titulo3", "#slogan3", "#c1", "#c2", "#c3", "#c4", "#c5", "#c6", "#c7", "#c8", "#rm-color1", "#rm-color2", "#rm-color3", "#rm-color4", "#rm-color5", "#rm-color6"];
let idstt = ["#pg", "#titulo4", "#slogan4", "#d1", "#d2", "#d3", "#d4", "#d5", "#d6", "#d7", "#d8", "#tt-color1", "#tt-color2", "#tt-color3", "#tt-color4", "#tt-color5", "#tt-color6"];
let idsit = ["#pg", "#titulo6", "#slogan6", "#f1", "#f2", "#f3", "#f4", "#f5", "#f6", "#f7", "#f8", "#it-color1", "#it-color2", "#it-color3", "#it-color4", "#it-color5", "#it-color6"];
let idsat = ["#pg", "#titulo7", "#slogan7", "#g1", "#g2", "#g3", "#g4", "#g5", "#g6", "#g7", "#g8", "#at-color1", "#at-color2", "#at-color3", "#at-color4", "#at-color5", "#at-color6"];
let idsar = ["#pg", "#titulo8", "#slogan8", "#h1", "#h2", "#h3", "#h4", "#h5", "#h6", "#h7", "#h8", "#ar-color1", "#ar-color2", "#ar-color3", "#ar-color4", "#ar-color5", "#ar-color6"];
let idsml = ["#pg", "#titulo9", "#slogan9", "#j1", "#j2", "#j3", "#j4", "#j5", "#j6", "#j7", "#j8", "#ml-color1", "#ml-color2", "#ml-color3", "#ml-color4", "#ml-color5", "#ml-color6"];
let idslp = ["#pg", "#titulo10", "#slogan10", "#k1", "#k2", "#k3", "#k4", "#k5", "#k6", "#k7", "#k8", "#lp-color1", "#lp-color2", "#lp-color3", "#lp-color4", "#lp-color5", "#lp-color6"];
let idsmu = ["#pg", "#titulo11", "#slogan11", "#l1", "#l2", "#l3", "#l4", "#l5", "#l6", "#l7", "#l8", "#mu-color1", "#mu-color2", "#mu-color3", "#mu-color4", "#mu-color5", "#mu-color6"];
let idsll = ["#pg", "#titulo12", "#slogan12", "#p1", "#p2", "#p3", "#p4", "#p5", "#p6", "#p7", "#p8", "#ll-color1", "#ll-color2", "#ll-color3", "#ll-color4", "#ll-color5", "#ll-color6"];
let ids2 = ["#club1", "#club2", "#club3", "#club4", "#club5", "#club6", "#club7", "#club8", "#club9", "#club10", "#club11", "#club12"];
let idsi = ["#club1", "#club2", "#club3", "#club4", "#club5", "#club6", "#club7", "#club8", "#club9", "#club10", "#club11", "#club12", "#pg"];

$("#hfcb").on("click", function(){
    $("#camisas").slideUp(1000);
    $("#trofeus").slideUp(1000);
    $("#sobre").slideDown(1000);
});

$("#awfcb").on("click", function(){
    $("#sobre").slideUp(1000);
    $("#trofeus").slideUp(1000);
    $("#camisas").slideDown(1000);
});

$("#tfcb").on("click", function(){
    $("#sobre").slideUp(1000);
    $("#camisas").slideUp(1000);
    $("#trofeus").slideDown(1000);
});

$("#hche").on("click", function(){
    $("#camisas2").slideUp(1000);
    $("#trofeus2").slideUp(1000);
    $("#sobre2").slideDown(1000);
});

$("#ache").on("click", function(){
    $("#sobre2").slideUp(1000);
    $("#trofeus2").slideUp(1000);
    $("#camisas2").slideDown(1000);
});

$("#tche").on("click", function(){
    $("#sobre2").slideUp(1000);
    $("#camisas2").slideUp(1000);
    $("#trofeus2").slideDown(1000);
});

$("#hint").on("click", function(){
    $("#camisas3").slideUp(1000);
    $("#trofeus3").slideUp(1000);
    $("#sobre3").slideDown(1000);
});

$("#awint").on("click", function(){
    $("#sobre3").slideUp(1000);
    $("#trofeus3").slideUp(1000);
    $("#camisas3").slideDown(1000);
});

$("#tint").on("click", function(){
    $("#sobre3").slideUp(1000);
    $("#camisas3").slideUp(1000);
    $("#trofeus3").slideDown(1000);
});

$("#hra").on("click", function(){
    $("#camisas4").slideUp(1000);
    $("#trofeus4").slideUp(1000);
    $("#sobre4").slideDown(1000);
});

$("#awra").on("click", function(){
    $("#sobre4").slideUp(1000);
    $("#trofeus4").slideUp(1000);
    $("#camisas4").slideDown(1000);
});

$("#tra").on("click", function(){
    $("#sobre4").slideUp(1000);
    $("#camisas4").slideUp(1000);
    $("#trofeus4").slideDown(1000);
});

$("#htt").on("click", function(){
    $("#camisas5").slideUp(1000);
    $("#trofeus5").slideUp(1000);
    $("#sobre5").slideDown(1000);
});

$("#awtt").on("click", function(){
    $("#sobre5").slideUp(1000);
    $("#trofeus5").slideUp(1000);
    $("#camisas5").slideDown(1000);
});

$("#ttt").on("click", function(){
    $("#sobre5").slideUp(1000);
    $("#camisas5").slideUp(1000);
    $("#trofeus5").slideDown(1000);
});

$("#hcy").on("click", function(){
    $("#camisas6").slideUp(1000);
    $("#trofeus6").slideUp(1000);
    $("#sobre6").slideDown(1000);
});

$("#awcy").on("click", function(){
    $("#sobre6").slideUp(1000);
    $("#trofeus6").slideUp(1000);
    $("#camisas6").slideDown(1000);
});

$("#tcy").on("click", function(){
    $("#sobre6").slideUp(1000);
    $("#camisas6").slideUp(1000);
    $("#trofeus6").slideDown(1000);
});

$("#hat").on("click", function(){
    $("#camisas7").slideUp(1000);
    $("#trofeus7").slideUp(1000);
    $("#sobre7").slideDown(1000);
});

$("#awat").on("click", function(){
    $("#sobre7").slideUp(1000);
    $("#trofeus7").slideUp(1000);
    $("#camisas7").slideDown(1000);
});

$("#tat").on("click", function(){
    $("#sobre7").slideUp(1000);
    $("#camisas7").slideUp(1000);
    $("#trofeus7").slideDown(1000);
});

$("#har").on("click", function(){
    $("#camisas8").slideUp(1000);
    $("#trofeus8").slideUp(1000);
    $("#sobre8").slideDown(1000);
});

$("#awar").on("click", function(){
    $("#sobre8").slideUp(1000);
    $("#trofeus8").slideUp(1000);
    $("#camisas8").slideDown(1000);
});

$("#tar").on("click", function(){
    $("#sobre8").slideUp(1000);
    $("#camisas8").slideUp(1000);
    $("#trofeus8").slideDown(1000);
});

$("#hmil").on("click", function(){
    $("#camisas9").slideUp(1000);
    $("#trofeus9").slideUp(1000);
    $("#sobre9").slideDown(1000);
});

$("#awmil").on("click", function(){
    $("#sobre9").slideUp(1000);
    $("#trofeus9").slideUp(1000);
    $("#camisas9").slideDown(1000);
});

$("#tmil").on("click", function(){
    $("#sobre9").slideUp(1000);
    $("#camisas9").slideUp(1000);
    $("#trofeus9").slideDown(1000);
});

$("#hlp").on("click", function(){
    $("#camisas10").slideUp(1000);
    $("#trofeus10").slideUp(1000);
    $("#sobre10").slideDown(1000);
});

$("#awlp").on("click", function(){
    $("#sobre10").slideUp(1000);
    $("#trofeus10").slideUp(1000);
    $("#camisas10").slideDown(1000);
});

$("#tlp").on("click", function(){
    $("#sobre10").slideUp(1000);
    $("#camisas10").slideUp(1000);
    $("#trofeus10").slideDown(1000);
});

$("#hmu").on("click", function(){
    $("#camisas11").slideUp(1000);
    $("#trofeus11").slideUp(1000);
    $("#sobre11").slideDown(1000);
});

$("#awmu").on("click", function(){
    $("#sobre11").slideUp(1000);
    $("#trofeus11").slideUp(1000);
    $("#camisas11").slideDown(1000);
});

$("#tmu").on("click", function(){
    $("#sobre11").slideUp(1000);
    $("#camisas11").slideUp(1000);
    $("#trofeus11").slideDown(1000);
});

$("#hll").on("click", function(){
    $("#camisas12").slideUp(1000);
    $("#trofeus12").slideUp(1000);
    $("#sobre12").slideDown(1000);
});

$("#awll").on("click", function(){
    $("#sobre12").slideUp(1000);
    $("#trofeus12").slideUp(1000);
    $("#camisas12").slideDown(1000);
});

$("#tll").on("click", function(){
    $("#sobre12").slideUp(1000);
    $("#camisas12").slideUp(1000);
    $("#trofeus12").slideDown(1000);
});

$("#pg").on("click", function(){
    $("#chelsea-london").slideUp(1000);
    $("#bayern-munich").slideUp(1000);
    $("#leipzig-leipzig").slideUp(1000);
    $("#internazionale-milan").slideUp(1000);
    $("#atletico-madrid").slideUp(1000);
    $("#arsenal-london").slideUp(1000);
    $("#city-manchester").slideUp(1000);
    $("#united-manchester").slideUp(1000);
    $("#milan-milan").slideUp(1000);
    $("#liverpool-liverpool").slideUp(1000);
    $("#tottenham-london").slideUp(1000);
    $("#real-madrid").slideUp(1000);
    $("#inicio").delay(1200).fadeIn(1000);

    img.setAttribute('src', '../icons/logo-vermelha.png');


    document.getElementById("body").style.background = "#000";
    document.getElementById("navbar").style.background = "linear-gradient(to left, #91000f, #42020c)";
    document.getElementById("header").style.background = "#040c8e";

    for(i=0; i < idsi.length; i++){
        document.querySelector(idsi[i]).style.color = "#00000";
    }
});


$("#club1, #chelsea").on("click", function(){
    if(document.getElementById("inicio").style.display != "none"){
        $("#inicio").fadeOut(1000);
        $("#chelsea-london").delay(1200).slideDown(1000);
    }
    $("#bayern-munich").slideUp(1000);
    $("#internazionale-milan").slideUp(1000);
    $("#city-manchester").slideUp(1000);
    $("#tottenham-london").slideUp(1000);
    $("#atletico-madrid").slideUp(1000);
    $("#liverpool-liverpool").slideUp(1000);
    $("#leipzig-leipzig").slideUp(1000);
    $("#milan-milan").slideUp(1000);
    $("#arsenal-london").slideUp(1000);
    $("#real-madrid").slideUp(1000);
    $("#united-manchester").slideUp(1000);
    $("#chelsea-london").slideDown(1000);

    img.setAttribute('src', '../icons/logo-vermelha.png');

    document.getElementById("body").style.background = "#021226";
    document.getElementById("navbar").style.background = "#000000";

    document.getElementById("header").style.background = "#F23005";

    document.getElementById("hche").style.color = "#F23005";
    document.getElementById("ache").style.color = "#F23005";
    document.getElementById("tche").style.color = "#F23005";

    for(i=0; i < idsch.length; i++){
        document.querySelector(idsch[i]).style.color = "#F23005";
    }

    for(i=0; i < ids2.length; i++){
        document.querySelector(ids2[i]).style.color = "#fff";
    }
});

$("#club10").on("click", function(){
    if(document.getElementById("inicio").style.display != "none"){
        $("#inicio").fadeOut(1000);
        $("#bayern-munich").delay(1200).slideDown(1000);
    }
    $("#chelsea-london").slideUp(1000);
    $("#internazionale-milan").slideUp(1000);
    $("#tottenham-london").slideUp(1000);
    $("#atletico-madrid").slideUp(1000);
    $("#arsenal-london").slideUp(1000);
    $("#united-manchester").slideUp(1000);
    $("#milan-milan").slideUp(1000);
    $("#leipzig-leipzig").slideUp(1000);
    $("#liverpool-liverpool").slideUp(1000);
    $("#city-manchester").slideUp(1000);
    $("#real-madrid").slideUp(1000);
    $("#bayern-munich").slideDown(1000);

    img.setAttribute('src', '../icons/logo-vermelha.png');


    document.getElementById("body").style.background = "#dc052d";
    document.getElementById("navbar").style.background = "#dc052d";

    document.getElementById("header").style.background = "#fff";

    document.getElementById("hfcb").style.color = "#fff";
    document.getElementById("awfcb").style.color = "#fff";
    document.getElementById("tfcb").style.color = "#fff";

    for(i=0; i < idsby.length; i++){
        document.querySelector(idsby[i]).style.color = "#fff";
    }

    for(i=0; i < ids2.length; i++){
        document.querySelector(ids2[i]).style.color = "#dc052d";
    }
});

$("#club12").on("click", function(){
    if(document.getElementById("inicio").style.display != "none"){
        $("#inicio").fadeOut(1000);
        $("#internazionale-milan").delay(1200).slideDown(1000);
    }
    $("#chelsea-london").slideUp(1000);
    $("#bayern-munich").slideUp(1000);
    $("#tottenham-london").slideUp(1000);
    $("#milan-milan").slideUp(1000);
    $("#liverpool-liverpool").slideUp(1000);
    $("#leipzig-leipzig").slideUp(1000);
    $("#united-manchester").slideUp(1000);
    $("#arsenal-london").slideUp(1000);
    $("#city-manchester").slideUp(1000);
    $("#real-madrid").slideUp(1000);
    $("#atletico-madrid").slideUp(1000);
    $("#internazionale-milan").slideDown(1000);

    img.setAttribute('src', '../icons/logo-vermelha.png');


    document.getElementById("body").style.background = "linear-gradient(to left,  #011ea0 16.7%, black 16.7% 33.3%, #011ea0 33.3% 50%, black 50% 66.6%, #011ea0 66.6% 83.3%, black 83.3% 100%)";
    document.getElementById("navbar").style.background = "linear-gradient(to left,  #011ea0 16.7%, black 16.7% 33.3%, #011ea0 33.3% 50%, black 50% 66.6%, #011ea0 66.6% 83.3%, black 83.3% 100%)";

    document.getElementById("header").style.background = "linear-gradient(to left,  #011ea0 16.7%, black 16.7% 33.3%, #011ea0 33.3% 50%, black 50% 66.6%, #011ea0 66.6% 83.3%, black 83.3% 100%)";

    document.getElementById("hint").style.color = "#fff";
    document.getElementById("awint").style.color = "#fff";
    document.getElementById("tint").style.color = "#fff";

    for(i=0; i < idsit.length; i++){
        document.querySelector(idsit[i]).style.color = "#fff";
    }

    for(i=0; i < ids2.length; i++){
        document.querySelector(ids2[i]).style.color = "#fff";
    }
});

$("#club7, #real").on("click", function(){
    if(document.getElementById("inicio").style.display != "none"){
        $("#inicio").fadeOut(1000);
        $("#real-madrid").delay(1200).slideDown(1000);
    }
    $("#chelsea-london").slideUp(1000);
    $("#bayern-munich").slideUp(1000);
    $("#city-manchester").slideUp(1000);
    $("#atletico-madrid").slideUp(1000);
    $("#liverpool-liverpool").slideUp(1000);
    $("#arsenal-london").slideUp(1000);
    $("#milan-milan").slideUp(1000);
    $("#internazionale-milan").slideUp(1000);
    $("#united-manchester").slideUp(1000);
    $("#tottenham-london").slideUp(1000);
    $("#leipzig-leipzig").slideUp(1000);
    $("#real-madrid").slideDown(1000);

    img.setAttribute('src', '../icons/logo-vermelha.png');


    document.getElementById("body").style.background = "#000000";
    document.getElementById("navbar").style.background = "#6495ED";

    document.getElementById("header").style.background = "#CD5C5C";

    document.getElementById("hra").style.color = "#CD5C5C";
    document.getElementById("awra").style.color = "#CD5C5C";
    document.getElementById("tra").style.color = "#CD5C5C";

    for(i=0; i < idsra.length; i++){
        document.querySelector(idsra[i]).style.color = "#CD5C5C";
    }

    for(i=0; i < ids2.length; i++){
        document.querySelector(ids2[i]).style.color = "#fff";
    }
});

$("#club8").on("click", function(){
    if(document.getElementById("inicio").style.display != "none"){
        $("#inicio").fadeOut(1000);
        $("#atletico-madrid").delay(1200).slideDown(1000);
    }
    $("#chelsea-london").slideUp(1000);
    $("#bayern-munich").slideUp(1000);
    $("#leipzig-leipzig").slideUp(1000);
    $("#milan-milan").slideUp(1000);
    $("#city-manchester").slideUp(1000);
    $("#internazionale-milan").slideUp(1000);
    $("#arsenal-london").slideUp(1000);
    $("#tottenham-london").slideUp(1000);
    $("#liverpool-liverpool").slideUp(1000);
    $("#united-manchester").slideUp(1000);
    $("#real-madrid").slideUp(1000);
    $("#atletico-madrid").slideDown(1000);

    img.setAttribute('src', '../icons/logo-vermelha.png');


    document.getElementById("body").style.background = "linear-gradient(to left, #aa2522 14.3%, white 14.3% 28.6%, #aa2522 28.6% 42.8%, white 42.8% 57.1%, #aa2522 57.1% 71.4%, white 71.4% 85.7%, #aa2522 85.7% 100%)";
    document.getElementById("navbar").style.background = "linear-gradient(to left, #aa2522 14.3%, white 14.3% 28.6%, #aa2522 28.6% 42.8%, white 42.8% 57.1%, #aa2522 57.1% 71.4%, white 71.4% 85.7%, #aa2522 85.7% 100%)";

    document.getElementById("header").style.background = "linear-gradient(to left, #aa2522 14.3%, white 14.3% 28.6%, #aa2522 28.6% 42.8%, white 42.8% 57.1%, #aa2522 57.1% 71.4%, white 71.4% 85.7%, #aa2522 85.7% 100%)";
    document.getElementById("hat").style.color = "#1d1b53";
    document.getElementById("awat").style.color = "#1d1b53";
    document.getElementById("tat").style.color = "#1d1b53";

    for(i=0; i < idsat.length; i++){
        document.querySelector(idsat[i]).style.color = "#1d1b53";
    }

    for(i=0; i < ids2.length; i++){
        document.querySelector(ids2[i]).style.color = "#1d1b53";
    }
});

$("#club5, #tottenham").on("click", function(){
    if(document.getElementById("inicio").style.display != "none"){
        $("#inicio").fadeOut(1000);
        $("#tottenham-london").delay(1200).slideDown(1000);
    }
    $("#chelsea-london").slideUp(1000);
    $("#bayern-munich").slideUp(1000);
    $("#arsenal-london").slideUp(1000);
    $("#internazionale-milan").slideUp(1000);
    $("#atletico-madrid").slideUp(1000);
    $("#real-madrid").slideUp(1000);
    $("#united-manchester").slideUp(1000);
    $("#liverpool-liverpool").slideUp(1000);
    $("#milan-milan").slideUp(1000);
    $("#leipzig-leipzig").slideUp(1000);
    $("#city-manchester").slideUp(1000);
    $("#tottenham-london").slideDown(1000);

    img.setAttribute('src', '../icons/logo-vermelha.png');


    document.getElementById("body").style.background = "#000";
    document.getElementById("navbar").style.background = "#A6A6A6";

    document.getElementById("header").style.background = "#A66D03";

    document.getElementById("htt").style.color = "#F2A20C";
    document.getElementById("awtt").style.color = "#F2A20C";
    document.getElementById("ttt").style.color = "#F2A20C";

    for(i=0; i < idstt.length; i++){
        document.querySelector(idstt[i]).style.color = "#F2A20C";
    }

    for(i=0; i < ids2.length; i++){
        document.querySelector(ids2[i]).style.color = "#F2A20C";
    }
});

$("#club2, #city").on("click", function(){
    if(document.getElementById("inicio").style.display != "none"){
        $("#inicio").fadeOut(1000);
        $("#city-manchester").delay(1200).slideDown(1000);
    }
    $("#chelsea-london").slideUp(1000);
    $("#bayern-munich").slideUp(1000);
    $("#internazionale-milan").slideUp(1000);
    $("#milan-milan").slideUp(1000);
    $("#real-madrid").slideUp(1000);
    $("#liverpool-liverpool").slideUp(1000);
    $("#united-manchester").slideUp(1000);
    $("#leipzig-leipzig").slideUp(1000);
    $("#atletico-madrid").slideUp(1000);
    $("#tottenham-london").slideUp(1000);
    $("#arsenal-london").slideUp(1000);
    $("#city-manchester").slideDown(1000);

    img.setAttribute('src', '../icons/logo-vermelha.png');


    document.getElementById("body").style.background = "#401317";
    document.getElementById("navbar").style.background = "#000000";

    document.getElementById("header").style.background = "#F23005";

    document.getElementById("hcy").style.color = "#F2A25C";
    document.getElementById("awcy").style.color = "#F2A25C";
    document.getElementById("tcy").style.color = "#F2A25C";

    for(i=0; i < idscy.length; i++){
        document.querySelector(idscy[i]).style.color = "#F2A25C";
    }

    for(i=0; i < ids2.length; i++){
        document.querySelector(ids2[i]).style.color = "#FAD2B3";
    }
});

$("#club6, #arsenal").on("click", function(){
    if(document.getElementById("inicio").style.display != "none"){
        $("#inicio").fadeOut(1000);
        $("#arsenal-london").delay(1200).slideDown(1000);
    }
    $("#chelsea-london").slideUp(1000);
    $("#bayern-munich").slideUp(1000);
    $("#internazionale-milan").slideUp(1000);
    $("#united-manchester").slideUp(1000);
    $("#real-madrid").slideUp(1000);
    $("#atletico-madrid").slideUp(1000);
    $("#tottenham-london").slideUp(1000);
    $("#liverpool-liverpool").slideUp(1000);
    $("#leipzig-leipzig").slideUp(1000);
    $("#milan-milan").slideUp(1000);
    $("#city-manchester").slideUp(1000);
    $("#arsenal-london").slideDown(1000);

    img.setAttribute('src', '../icons/logo-vermelha.png');


    document.getElementById("body").style.background = "#000";
    document.getElementById("navbar").style.background = "#D9AF62";

    document.getElementById("header").style.background = "#BF8C4E";

    document.getElementById("har").style.color = "#F2D680";
    document.getElementById("awar").style.color = "#F2D680";
    document.getElementById("tar").style.color = "#F2D680";

    for(i=0; i < idsar.length; i++){
        document.querySelector(idsar[i]).style.color = "#F2D680";
    }

    for(i=0; i < ids2.length; i++){
        document.querySelector(ids2[i]).style.color = "#fff";
    }
});

$("#club11").on("click", function(){
    if(document.getElementById("inicio").style.display != "none"){
        $("#inicio").fadeOut(1000);
        $("#milan-milan").delay(1200).slideDown(1000);
    }
    $("#chelsea-london").slideUp(1000);
    $("#bayern-munich").slideUp(1000);
    $("#tottenham-london").slideUp(1000);
    $("#arsenal-london").slideUp(1000);
    $("#city-manchester").slideUp(1000);
    $("#liverpool-liverpool").slideUp(1000);
    $("#real-madrid").slideUp(1000);
    $("#united-manchester").slideUp(1000);
    $("#atletico-madrid").slideUp(1000);
    $("#internazionale-milan").slideUp(1000);
    $("#leipzig-leipzig").slideUp(1000);
    $("#milan-milan").slideDown(1000);

    img.setAttribute('src', '../icons/logo-vermelha.png');


    document.getElementById("body").style.background = "linear-gradient(to left,  black 16.7%, #e21c2a 16.7% 33.3%, black 33.3% 50%, #e21c2a 50% 66.6%, black 66.6% 83.3%, #e21c2a 83.3% 100%)";
    document.getElementById("navbar").style.background = "linear-gradient(to left,  black 16.7%, #e21c2a 16.7% 33.3%, black 33.3% 50%, #e21c2a 50% 66.6%, black 66.6% 83.3%, #e21c2a 83.3% 100%)";

    document.getElementById("header").style.background = "linear-gradient(to left,  black 16.7%, #e21c2a 16.7% 33.3%, black 33.3% 50%, #e21c2a 50% 66.6%, black 66.6% 83.3%, #e21c2a 83.3% 100%)";

    document.getElementById("hmil").style.color = "#fff";
    document.getElementById("awmil").style.color = "#fff";
    document.getElementById("tmil").style.color = "#fff";

    for(i=0; i < idsml.length; i++){
        document.querySelector(idsml[i]).style.color = "#fff";
    }

    for(i=0; i < ids2.length; i++){
        document.querySelector(ids2[i]).style.color = "#fff";
    }
});

$("#club9").on("click", function(){
    if(document.getElementById("inicio").style.display != "none"){
        $("#inicio").fadeOut(1000);
        $("#leipzig-leipzig").delay(1200).slideDown(1000);
    }
    $("#chelsea-london").slideUp(1000);
    $("#bayern-munich").slideUp(1000);
    $("#tottenham-london").slideUp(1000);
    $("#liverpool-liverpool").slideUp(1000);
    $("#arsenal-london").slideUp(1000);
    $("#city-manchester").slideUp(1000);
    $("#real-madrid").slideUp(1000);
    $("#atletico-madrid").slideUp(1000);
    $("#internazionale-milan").slideUp(1000);
    $("#milan-milan").slideUp(1000);
    $("#united-manchester").slideUp(1000);
    $("#leipzig-leipzig").slideDown(1000);

    img.setAttribute('src', '../icons/logo-vermelha.png');


    document.getElementById("body").style.background = "linear-gradient(to left, #001f47, #dd0741)";
    document.getElementById("navbar").style.background = "linear-gradient(to left, #001f47, #dd0741)";

    document.getElementById("header").style.background = "linear-gradient(to left, #001f47, #dd0741)";

    document.getElementById("hlp").style.color = "white";
    document.getElementById("awlp").style.color = "white";
    document.getElementById("tlp").style.color = "white";

    for(i=0; i < idslp.length; i++){
        document.querySelector(idslp[i]).style.color = "white";
    }

    for(i=0; i < ids2.length; i++){
        document.querySelector(ids2[i]).style.color = "white";
    }
});

$("#club3, #united").on("click", function(){
    if(document.getElementById("inicio").style.display != "none"){
        $("#inicio").fadeOut(1000);
        $("#united-manchester").delay(1200).slideDown(1000);
    }
    $("#chelsea-london").slideUp(1000);
    $("#bayern-munich").slideUp(1000);
    $("#tottenham-london").slideUp(1000);
    $("#arsenal-london").slideUp(1000);
    $("#city-manchester").slideUp(1000);
    $("#real-madrid").slideUp(1000);
    $("#atletico-madrid").slideUp(1000);
    $("#internazionale-milan").slideUp(1000);
    $("#milan-milan").slideUp(1000);
    $("#leipzig-leipzig").slideUp(1000);
    $("#liverpool-liverpool").slideUp(1000);
    $("#united-manchester").slideDown(1000);

    img.setAttribute('src', '../icons/logo-vermelha.png');


    document.getElementById("body").style.background = "#2D3240";
    document.getElementById("navbar").style.background = "#7A9FBF";

    document.getElementById("header").style.background = "#1F2126";

    document.getElementById("hmu").style.color = "#BACBD9";
    document.getElementById("awmu").style.color = "#BACBD9";
    document.getElementById("tmu").style.color = "#BACBD9";

    for(i=0; i < idsmu.length; i++){
        document.querySelector(idsmu[i]).style.color = "#BACBD9";
    }

    for(i=0; i < ids2.length; i++){
        document.querySelector(ids2[i]).style.color = "#4F5B73";
    }
});


$("#club4, #liverpool").on("click", function(){
    if(document.getElementById("inicio").style.display != "none"){
        $("#inicio").fadeOut(1000);
        $("#liverpool-liverpool").delay(1200).slideDown(1000);
    }
    $("#chelsea-london").slideUp(1000);
    $("#bayern-munich").slideUp(1000);
    $("#tottenham-london").slideUp(1000);
    $("#arsenal-london").slideUp(1000);
    $("#city-manchester").slideUp(1000);
    $("#real-madrid").slideUp(1000);
    $("#atletico-madrid").slideUp(1000);
    $("#internazionale-milan").slideUp(1000);
    $("#milan-milan").slideUp(1000);
    $("#leipzig-leipzig").slideUp(1000);
    $("#united-manchester").slideUp(1000);
    $("#liverpool-liverpool").slideDown(1000);

    img.setAttribute('src', '../icons/logo-vermelha.png');


    document.getElementById("body").style.background = "#1E0B26";
    document.getElementById("navbar").style.background = "#000000";

    document.getElementById("header").style.background = "#4C1B59";

    document.getElementById("hll").style.color = "#DE44F2";
    document.getElementById("awll").style.color = "#DE44F2";
    document.getElementById("tll").style.color = "#DE44F2";

    for(i=0; i < idsll.length; i++){
        document.querySelector(idsll[i]).style.color = "#DE44F2";
    }

    for(i=0; i < ids2.length; i++){
        document.querySelector(ids2[i]).style.color = "#DE44F2";
    }
});