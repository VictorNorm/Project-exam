const featuredImageContainer = document.querySelector(".featuredImageContainer");
const textContainer = document.querySelector(".textContainer");
const dateContainer = document.querySelector(".dateContainer")

const queryString = document.location.search;
const parameters = new URLSearchParams(queryString);
const id = parameters.get("id");

console.log(id);



const url = "https://hjulbent.no/project-exam/wp-json/wp/v2/posts/" + id;

async function getSpecificPost() {
    try {
        const response = await fetch(url)
        const details = await response.json();

        featuredImageContainer.style.backgroundImage = `url(${details.featured_media_src_url})`;

        let dateSliced = details.date.slice(0, 10);
        dateContainer.innerHTML = dateSliced + "";

        textContainer.innerHTML += 
        `<h1>${details.title.rendered}</h1>
        ${details.content.rendered}
        `




        console.log(details)
    } catch (error) {
        console.log(error);
    }
}

getSpecificPost();