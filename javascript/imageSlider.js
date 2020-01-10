 var images = [ 
    "../media/jurkalnes-stavkrasts.jpg", 
    "../media/rundales-pils.jpg",
    "../media/brivibas-piemineklis.jpg"
                ];

var num = 0;
function nextImage() {
    var slider = document.getElementById("slider");
    num++;

    if(num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}

function prevImage() {
    var slider = document.getElementById("slider");
    num--;
    if(num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
}