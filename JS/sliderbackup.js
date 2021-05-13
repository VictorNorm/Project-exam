const buttons = document.querySelectorAll(".button");
console.log(buttons)


buttonNext.addEventListener('click', function() {

    if(carouselContainer.style.justifyContent === "" || carouselContainer.style.justifyContent === "flex-start") {
        carouselContainer.style.justifyContent = "center";
        console.log(carouselContainer.style.justifyContent)
     } else if(carouselContainer.style.justifyContent === "center") {
        carouselContainer.style.justifyContent = "flex-end";
        console.log(carouselContainer.style.justifyContent)
     }

})


buttonPrev.addEventListener('click', function() {
    
    if(carouselContainer.style.justifyContent === "flex-end") {
        carouselContainer.style.justifyContent = "center";
        console.log(carouselContainer.style.justifyContent)
    } else if(carouselContainer.style.justifyContent === "center") {
        carouselContainer.style.justifyContent = "flex-start";
        console.log(carouselContainer.style.justifyContent)
    }
    
})

// Translate -----------------------------------------------------------------------------------------------

var translateLength = carousel.scrollWidth / 3;
console.log(carousel.scrollWidth);
var traslateLengthDoubled = carousel.scrollWidth / 1.5;


buttonNext.addEventListener('click', function() {

    if(carousel.style.transform === "") {
        // translateLength = cardContainer.clientWidth;
        carousel.style.transform = `translateX(-${translateLength}px)`;
        console.log(translateLength);
        console.log(carousel.style.transform)
     } else if(carousel.style.transform !== "") {
        // traslateLengthDoubled = cardContainer.clientWidth * 2;
        carousel.style.transform = `translateX(-${traslateLengthDoubled}px)`;
        console.log(translateLength);
     }
})

buttonPrev.addEventListener('click', function() {
    
    if(carousel.style.transform === "translateX(-32%)") {
        carousel.style.transform = "";
     } else if(carousel.style.transform === "translateX(-64%)") {
        carousel.style.transform = "translateX(-32%)";
     }
})