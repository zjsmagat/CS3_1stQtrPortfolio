let rating = 0

const stars = document.querySelectorAll(".star")

stars.forEach(star=>{
    star.addEventListener("click", function(){

        rating = this.dataset.value

        stars.forEach(s=>s.classList.remove("active"))

        for(let i=0; i<rating; i++){
            stars[i].classList.add("active")
        }
    })
})

function addMovie(){

    const title = document.getElementById("title").value
    const year = document.getElementById("year").value
    const genre = document.getElementById("genre").value

    const movie = {
        title:title,
        year:year,
        genre:genre,
        rating:rating
    }

    let movies = JSON.parse(localStorage.getItem("movies")) || []

    movies.push(movie)

    localStorage.setItem("movies", JSON.stringify(movies))

    displayMovies()
}

function displayMovies(){

    const movieList = document.getElementById("movielist")

    movielist.innerHTML = ""

    let movies = JSON.parse(localStorage.getItem("movies")) || []

    movies.forEach(movie=>{

        let stars = "<span class='yellow'>"+"★".repeat(movie.rating)+"</span>"

        movieList.innerHTML += `
        <div class="movieItem">
        ${movie.title} (${movie.year})-${movie.genre}, Rating: ${stars}
        </div>
        `
    })
}

displayMovies()
