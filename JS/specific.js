const featuredImageContainer = document.querySelector(".featuredImageContainer");
const textContainer = document.querySelector(".textContainer");
const dateContainer = document.querySelector(".dateContainer");
const imageContainer = document.querySelector(".imageContainer");

const modal = document.querySelector(".modal");
const dateAndAuthorContainer = document.querySelector(".dateAndAuthorContainer");

const body = document.querySelector("body");

const title = document.querySelector("#title");


const queryString = document.location.search;
const parameters = new URLSearchParams(queryString);
const id = parameters.get("id");

console.log(id);

const url = "https://hjulbent.no/project-exam/wp-json/wp/v2/posts/" + id + "/?_embed"

async function getSpecificPost() {
    try {
        const response = await fetch(url)
        const details = await response.json();

        featuredImageContainer.style.backgroundImage = `url(${details.featured_media_src_url})`;

        let dateSliced = details.date.slice(0, 10);
        dateAndAuthorContainer.innerHTML =
            `<p class="date">${dateSliced}</p>
        <p class="authorName">${details._embedded.author[0].name}.</p>`;

        title.innerHTML = details.title.rendered;
        textContainer.innerHTML +=
            `<h1>${details.title.rendered}</h1>
        ${details.content.rendered}
        `;

        const figureHolder = document.querySelectorAll("figure");
        let clickableImage = figureHolder[0];
        console.log(figureHolder[0].firstChild.src)

        modal.innerHTML = `<img src="${figureHolder[0].firstChild.src}">`;
        imageContainer.innerHTML = `<img src="${figureHolder[0].firstChild.src}" class="modalImage">`;

        // clickableImage.addEventListener('click', (e) => {
        //     modal.classList.add("show");
        //     body.style.opacity = "0.6";
        //     document.querySelector(".modalImage").style.opacity = "1";

        // })

        document.addEventListener('click', (event) => {
            if (event.target.closest(".imageContainer")) {
                modal.classList.remove("hidden");
            } else {
                modal.classList.add("hidden");
            }

        })


        console.log(details)
    } catch (error) {
        console.log(error);
    }
}

function bonk() {
    console.log("bonk");
}


getSpecificPost();