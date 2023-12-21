const bannerNos = document.getElementById('bannerNos')

var num = 1

setInterval(() => {
    if(num === 3){
        num = 1
    }
    bannerNos.style.backgroundImage = `url(./assets/banner_nos_${num}.jpg)`
    num ++
}, 5000);