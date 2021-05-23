const featuredImageContainer = document.querySelector(".featuredImageContainer");
const textContainer = document.querySelector(".textContainer");
const dateContainer = document.querySelector(".dateContainer");

const dateAndAuthorContainer = document.querySelector(".dateAndAuthorContainer");

const title = document.querySelector("#title");
console.log(title)

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
        `

        console.log(details)
    } catch (error) {
        console.log(error);
    }
}



getSpecificPost();


