window.onload = function () {
    
    var trigram = "☰";
    var cross = "&#10005;";
    
    var topLinks = document.getElementsByClassName('top-links')[0];
    var nav = document.getElementsByTagName('nav')[0];
    var responsiveIco = document.getElementsByClassName('responsive-expand')[0];
    var me = document.getElementsByClassName('creator')[0];
    
    document.getElementsByClassName('responsive-expand')[0].addEventListener('click', function () {
        
        if (topLinks.style.display === "none") {
            topLinks.style.display = "inline-block";
            responsiveIco.innerHTML = cross;
            nav.style.height = "auto"
            me.style.display = "none"
        } else {
            topLinks.style.display = "none";
            responsiveIco.innerHTML = trigram;
            nav.style.height = "80px";
            me.style.display = "block"
        }
    });
    
    if (window.matchMedia("screen and (min-width: 790px)").matches) {
       me.style.display = "block";
    }
};
