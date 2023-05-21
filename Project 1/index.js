const apikey ="5914067868644595e99f1fce7a4ffa3d";
const halfImagePath="https://image.tmdb.org/t/p/w500"
const gnreIdListApi="https://api.themoviedb.org/3/genre/movie/list?api_key="+apikey+"&language=en-US"
const popularmovies = "https://api.themoviedb.org/3/movie/popular?api_key="+apikey+"&language=en-US&page=1";
const latestmovies = "https://api.themoviedb.org/3/movie/latest?api_key="+apikey+"&language=en-US"
const movieAccordingTognreId="https://api.themoviedb.org/3/discover/movie?api_key="+apikey+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=";
                
window.addEventListener("load",async ()=>{
         for( i = 0;i<=19;i++){
              let posterPath = await(await(await (await fetch(popularmovies)).json())).results[i].poster_path;     
              let fullposterpath=halfImagePath+posterPath;     
              let poster=document.createElement("img");
              poster.src=fullposterpath;
              poster.height="170";
              poster.width="120";
              poster.style.paddingRight="2px";
              let appendposter=document.querySelector(".poster-container");
              appendposter.appendChild(poster);    
        }
        
        genreidlist = await (await (await fetch(gnreIdListApi)).json()).genres;
        genreidlist.forEach(genre=> {
                allgenremovies(genre)
        }) 
        function allgenremovies(genre) {
            genreidforeachmovie=movieAccordingTognreId+genre.id;
            console.log(genreidforeachmovie); 
            sectionnameforeachmovie=movieAccordingTognreId+genre.name;
            console.log(sectionnameforeachmovie);  
        }
        results=await(await(await fetch(genreidforeachmovie)).json()).results;
         genreidforeachmovie.forEach(results=> {
          
            console.log(results);  
        });
    
      
       
       
        });
    
        

