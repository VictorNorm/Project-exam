const url = "https://hjulbent.no/project-exam/wp-json/wp/v2/posts?per_page=12&_embed";

const spinner = document.querySelector(".spinner");

const blogsContainer = document.querySelector(".blogsContainer");



async function getPosts() {
    try {

        const response = await fetch(url);
        const results = await response.json();
        console.log(results)
        
        spinner.style.display = "none";

        for (let i = 0; i < results.length; i++) {
            
            
            let cleanText = stripHtml(results[i].excerpt.rendered)
            
            let length = cleanText.length > 150 ? 150 : cleanText.length
            /*
            let length = 0
            if(cleanText.length > 150){
                length = 150
            }else{
                length = cleanText.length
            }
            */
            let shortText = stringCutter(cleanText, length);
            
            
            if (i < 4) {
                blogsContainer.innerHTML +=
                    `
                    <a href="specific.html?id=${results[i].id}" class="blogCard">
                        <div class="blogImageWrapper">
                            <div style="background-image: url('${results[i].featured_media_src_url}')" class="blogImage"></div>
                        </div>
                        <div class="blogInfo">
                            <h3 class="blogInfoHeading">${results[i].title.rendered}</h3>
                             <p>${shortText}...</p>
                             <div class="authorAndTime">
                                <p class="author">${results[i]._embedded.author[0].name}.</p>
                                <p class="time">${results[i].modified.slice(0, 10)}.</p>
                             </div>
                        </div>
                    </a>  
                    `;
            } else {
                blogsContainer.innerHTML +=
                    `
                    <a href="specific.html?id=${results[i].id}" class="blogCard hidden">
                        <div class="blogImageWrapper">
                            <div style="background-image: url('${results[i].featured_media_src_url}')" class="blogImage"></div>
                        </div>
                        <div class="blogInfo">
                            <h3 class="blogInfoHeading">${results[i].title.rendered}</h3>
                             <p>${shortText}...</p>
                             <div class="authorAndTime">
                                <p class="author">${results[i]._embedded.author[0].name}.</p>
                                <p class="time">${results[i].modified.slice(0, 10)}.</p>
                             </div>
                        </div>
                    </a>  
                    `;
            } 
        }

    } catch (error) {
        console.log(error);
    }
}

getPosts();



// Cutting out text for blog cards ------------------------------------------//

function stringCutter(string, length) {
    var test = string.slice(0, length)
    let counter = 1;
    while(test.charAt(test.length-counter) !== " ") {
        counter++;
        if(counter > length) break;
    } 
    return test.slice(0, test.length-counter);
}


function stripHtml(html){
    // Create a new div element
    var temporalDivElement = document.createElement("div");
    // Set the HTML content with the providen
    temporalDivElement.innerHTML = html;
    // Retrieve the text property of the element (cross-browser support)
    return temporalDivElement.textContent || temporalDivElement.innerText || "";
}


// Show more ----------------------------------------------------------------//


const showMore = document.querySelector(".showMore");

const blogCards = document.getElementsByClassName("blogCard");


let counter = 4;

showMore.addEventListener('click', (event) => {
    
    counter = counter +4;
    console.log(counter);
    for(let i = 0; i < blogCards.length; i++){
        if(blogCards[i].classList[1] === "hidden" && i < counter) {
            blogCards[i].classList.remove("hidden");
        } if (counter > blogCards.length) {
            console.log(counter);
        }
    }
});

console.log(counter);

// showMore.disabled = true;