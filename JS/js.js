const url = "https://hjulbent.no/project-exam/wp-json/wp/v2/posts?per_page=12";

// ?_embed
// ?per_page=100

const carousel = document.querySelector(".carousel");

const carouselContainer = document.querySelector(".carouselContainer");

const buttonPrev = document.querySelector(".carousel__button--prev");
const buttonNext = document.querySelector(".carousel__button--next");

const cardContainer1 = document.querySelector(".cardContainer1");
const cardContainer2 = document.querySelector(".cardContainer2");
const cardContainer3 = document.querySelector(".cardContainer3");

var carouselItems = [];

async function getPosts() {
    try {
        const response = await fetch(url);
        const results = await response.json();


        for (let i = 0; i < results.length; i++) {
            
            if(i < 4) {
                cardContainer1.innerHTML += 
                `
                <a href="specific.html?id=${results[i].id}" class="displayed postLink">
                    <div class="carouselCard">
                        <h5>${results[i].title.rendered}</h5>
                        <img src="${results[i].featured_media_src_url}" class="featuredImage">
                    </div>
                 </a>  
                `
            } else if (i < 8) {
                cardContainer2.innerHTML += 
                `
                <a href="specific.html?id=${results[i].id}" class="displayed postLink">
                    <div class="carouselCard">
                        <h5>${results[i].title.rendered}</h5>
                        <img src="${results[i].featured_media_src_url}" class="featuredImage">
                    </div>
                 </a>  
                `
            } else {
                cardContainer3.innerHTML += 
                `
                <a href="specific.html?id=${results[i].id}" class="displayed postLink">
                    <div class="carouselCard">
                        <h5>${results[i].title.rendered}</h5>
                        <img src="${results[i].featured_media_src_url}" class="featuredImage">
                    </div>
                 </a>  
                `
            }
        }


        const buttons = document.querySelectorAll(".button");
        console.log(buttons)


        buttonNext.addEventListener('click', function() {

            if(carouselContainer.style.justifyContent === "flex-start") {
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


    } catch (error) {
        console.log(error);
    }
    
}



getPosts();







// function a(num1, num2, num3) {
//    num3 = num1 + num2;

//    return num3;
// }

// var total = a(1, 2);

