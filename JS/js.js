const url = "http://hjulbent.no/project-exam/wp-json/wp/v2/posts?_embed";

const carousel = document.querySelector(".carousel");

const buttonPrev = document.querySelector(".carousel__button--prev");
const buttonNext = document.querySelector(".carousel__button--next");

var carouselItems = [];

async function getPosts() {
    try {
        const response = await fetch(url);
        const results = await response.json();

        // console.log(results);

        for (let i = 0; i < results.length; i++) {
            console.log(results[i]);


            if (i < 4) {

                carousel.innerHTML += 
                `<a href="specific.html?id=${results[i].id}" class="displayed">
                    <div class="carouselCard">
                        <h5>${results[i].title.rendered}</h5>
                        <img src="${results[i].featured_media_src_url}" class="featuredImage">
                    </div>
                 </a>  
                `

            } else {
                carousel.innerHTML += 
                `<a href="specific.html?id=${results[i].id}" class="displayedNone">
                    <div class="carouselCard">
                        <h5>${results[i].title.rendered}</h5>
                        <img src="${results[i].featured_media_src_url}" class="featuredImage">
                    </div>
                 </a>  
                `
            }

        }


        buttonNext.addEventListener('click', function() {
            console.log("utz");
        })


        buttonPrev.addEventListener('click', function() {
            console.log("utz");
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

