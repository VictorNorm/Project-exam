const url = "https://hjulbent.no/project-exam/wp-json/wp/v2/posts?per_page=12";

// ?_embed
// ?per_page=100

const carousel = document.querySelector(".carousel");
const slider = document.querySelector(".slider");

const carouselContainer = document.querySelector(".carouselContainer");

const buttonPrev = document.querySelector(".carousel__button--prev");
const buttonNext = document.querySelector(".carousel__button--next");

const cardContainer1 = document.querySelector(".cardContainer1");
const cardContainer2 = document.querySelector(".cardContainer2");
const cardContainer3 = document.querySelector(".cardContainer3");

const spinner = document.querySelector(".spinner");

var carouselItems = [];

async function getPosts() {
    try {

        const response = await fetch(url);
        const results = await response.json();

        spinner.style.display = "none";

        for (let i = 0; i < results.length; i++) {

            if (i < 4) {
                cardContainer1.innerHTML +=
                    `
                    <a href="specific.html?id=${results[i].id}" class="displayed postLink" style="background-image: url('${results[i].featured_media_src_url}')">
                        <h5 class="carouselCardHeading">${results[i].title.rendered}</h5>
                    </a>  
                    `;
            } else if (i < 8) {
                cardContainer2.innerHTML +=
                    `
                    <a href="specific.html?id=${results[i].id}" class="displayed postLink" style="background-image: url('${results[i].featured_media_src_url}')">
                        <h5 class="carouselCardHeading">${results[i].title.rendered}</h5>
                    </a>  
                    `;
            } else {
                cardContainer3.innerHTML +=
                    `
                    <a href="specific.html?id=${results[i].id}" class="displayed postLink" style="background-image: url('${results[i].featured_media_src_url}')">
                        <h5 class="carouselCardHeading">${results[i].title.rendered}</h5>
                    </a>  
                    `;
            }
        }

    } catch (error) {
        console.log(error);
    }
}


getPosts();

console.log(carouselContainer.scrollWidth);



// Carousel----------------------------------------------/

// var carouselPosition = carousel.style.transform;

buttonNext.addEventListener('click', () => {
    if (slider.style.transform === "") {
        slider.style.transform = "translateX(-33.3%)";
    } else if (slider.style.transform === "translateX(-33.3%)") {
        slider.style.transform = "translateX(-66.6%)";
    }
})



buttonPrev.addEventListener('click', () => {
    if (slider.style.transform === "translateX(-66.6%)") {
        slider.style.transform = "translateX(-33.3%)";
    } else if (slider.style.transform === "translateX(-33.3%)") {
        slider.style.transform = "";
    }
})