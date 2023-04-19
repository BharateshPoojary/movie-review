const apikey ="5914067868644595e99f1fce7a4ffa3d";
const movieAccordingTognreId="https://api.themoviedb.org/3/discover/movie?api_key="+apikey+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres="+28;
const gnreIdListApi="https://api.themoviedb.org/3/genre/movie/list?api_key="+apikey+"&language=en-US"
const popularmovies = "https://api.themoviedb.org/3/movie/popular?api_key="+apikey+"&language=en-US&page=1";
const latestmovies = "https://api.themoviedb.org/3/movie/latest?api_key="+apikey+"&language=en-US"
window.addEventListener("load",async ()=>{

    let pm=await (await fetch(popularmovies)).json();
    console.log(pm);

    let gnrePr=await (await fetch(movieAccordingTognreId)).json();
    console.log(gnrePr);
    let lm=await(await fetch(latestmovies)).json();
    console.log(lm);
    let halfImagePath="https://image.tmdb.org/t/p/w500"
    let posterPath=gnrePr.results[1].poster_path;
    let fullImagePath=halfImagePath+posterPath;
    console.log(fullImagePath);
})
let imgTag=document.createElement("img");
imgTag.src="https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg";
imgTag.height="250"
imgTag.width="190"
let posterContainer=document.querySelector(".poster-container");
posterContainer.appendChild(imgTag);