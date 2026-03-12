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

    let movies = JSON.parse(localStorage.getItem("movies")) || []

    let existingMovie = movies.find(m =>
        m.title.toLowerCase() === title.toLowerCase()
    )
    
    if(existingMovie){

        existingMovie.rating = Math.round(
            (parseInt(existingMovie.rating) + parseInt(rating)) / 2
        )

        existingMovie.year = year
        existingMovie.genre = genre

    }else{

        const movie = {
            title:title,
            year:year,
            genre:genre,
            rating:rating
        }

        movies.push(movie)
    }

    localStorage.setItem("movies", JSON.stringify(movies))

    displayMovies()
}

function deleteMovie(title){

    if(confirm("Are you sure you want to delete this movie?")){

        let movies = JSON.parse(localStorage.getItem("movies")) || []

        movies = movies.filter(movie => movie.title !== title)

        localStorage.setItem("movies", JSON.stringify(movies))

        displayMovies()
    }
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
