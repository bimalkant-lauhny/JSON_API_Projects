window.onload = function () {
    
    var trigram = "/icons/menu.svg";
    var cross = "/icons/cross-symbol.svg";
    
    var topLinks = document.getElementsByClassName('top-links')[0];
    var nav = document.getElementsByTagName('nav')[0];
    var responsiveIco = document.getElementsByClassName('responsive-expand')[0];
    var me = document.getElementsByClassName('creator')[0];
    var respImg = document.getElementById('resp-img');
    
    responsiveIco.addEventListener('click', function () {
        
        if (topLinks.style.display === "none") {
            topLinks.style.display = "inline-block";
            respImg.style.url = cross; 
            nav.style.height = "auto"
            me.style.display = "none"
        } else {
            topLinks.style.display = "none";
            respImg.style.url = trigram;
            nav.style.height = "80px";
            me.style.display = "block"
        }
    });
    
    if (window.matchMedia("screen and (min-width: 790px)").matches) {
       me.style.display = "block";
    }
};
