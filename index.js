const searchBtn = document.getElementById('search-button')
const movieContainer = document.getElementById('movie-container')
const searchInput = document.getElementById('search-input')
let imdbID 

async function getMovieData(id){
    const res =  await fetch(`https://www.omdbapi.com/?i=${id}&apikey=dac3b8e3`);
    const data  = await res.json()
    
    const {Title, Year, Runtime, Genre, Director, Actors, Plot, Poster} = data

    const Object = {
        title: Title,
        image: Poster,
        runtime: Runtime,
        plot: Plot,
    }

    movieContainer.innerHTML  +=  `<div class="movie">
            <div class="movie-img" id="">
                <img id="movie-img" src="${Object.image}" alt="Movie poster">
            </div>
            <div class="movie-data" id="movie-data">
                <h4 class="movie-title" id="movie-title">${Object.title}</h4>
                <p class="movie-plot" id="movie-plot">${Object.plot}</p>
            </div>
        </div>
        <hr>`
}

function findMovies(){
    let search =  (searchInput.value)
    return search
    
}


searchBtn.addEventListener('click', async()=>{
    
    let s =  'maze runner'

    const res =  await fetch(`https://www.omdbapi.com/?s=${s}&apikey=dac3b8e3`)    
    const data = await res.json()
    for(let i=0; i < 5; i++){
        imdbID  = data.Search[i].imdbID
        getMovieData(imdbID)   
    }
     
})
  

