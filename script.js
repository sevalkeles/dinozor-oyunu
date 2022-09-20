const trex = document.querySelector("#trex");
const kaktus = document.querySelector("#kaktus");

function zipla() {

    if(kaktus.classList!="kaktus-animate")
    {
        kaktus.classList.add("kaktus-animate");
    }

    if(trex.classList = "trex-animate")
    {
        trex.classList.add("trex-animate");
        setTimeout(function() {
            trex.classList.remove("trex-animate");
        },500);
    }
}

var carpismaKontrol = setInterval(function() {

    var trexBottom = parseInt(window
            .getComputedStyle(trex)
            .getPropertyValue("bottom"));

    var kaktusleft = parseInt(window
        .getComputedStyle(kaktus)
        .getPropertyValue("left"));

        if(kaktusleft > 0 && kaktusleft < 40 && trexBottom < 40 ) {
            alert("oyun bitti");
        }
},10);