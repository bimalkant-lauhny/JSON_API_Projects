var trigram = "/icons/trigram.png";
var cross = "/icons/cross.png";

var topLinks = document.getElementsByClassName('top-links')[0];
var nav = document.getElementsByTagName('nav')[0];
var responsiveIco = document.getElementsByClassName('responsive-expand')[0];
var me = document.getElementsByClassName('creator')[0];
var respImg = document.getElementById('resp-img');
var menuLi = document.querySelectorAll('.top-links li');

window.onload = function () {
    
    responsiveIco.addEventListener('click', function () {
        
        if (topLinks.style.display === "none") {
            topLinks.style.display = "inline-block";
            respImg.src = cross; 
            nav.style.height = "auto"
            me.style.display = "none"
        } else {
            topLinks.style.display = "none";
            respImg.src = trigram;
            nav.style.height = "80px";
            me.style.display = "block"
        }
    });
    
    
};

/*
window.matchMedia("screen and (min-width: 790px)").addListener(function() {
    console.log("It's working!");
    respImg.src = trigram;
    me.style.display = "block";
    topLinks.style.display = "block";
    for (li of menuLi) {
        li.style.display = "inline";
    }
});
*/
