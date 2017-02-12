window.onload = function () {
    
    var trigram = "&#9776;";
    var cross = "&#10005;";
    
    var topLinks = document.getElementsByClassName('top-links')[0];
    var nav = document.getElementsByTagName('nav')[0];
    var responsiveIco = document.getElementsByClassName('responsive-expand')[0];
    
    document.getElementsByClassName('responsive-expand')[0].addEventListener('click', function () {
        
        if (topLinks.style.display === "none") {
            topLinks.style.display = "block";
            responsiveIco.innerHTML = cross;
            nav.style.height = "100%";
        } else {
            topLinks.style.display = "none";
            responsiveIco.innerHTML = trigram;
            nav.style.height = "80px";
        }
    });
};
