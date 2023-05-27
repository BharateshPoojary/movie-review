const apikey ="5914067868644595e99f1fce7a4ffa3d";
const halfImagePath="https://image.tmdb.org/t/p/w500"
const gnreIdListApi="https://api.themoviedb.org/3/genre/movie/list?api_key="+apikey+"&language=en-US"
const popularmovies = "https://api.themoviedb.org/3/movie/popular?api_key="+apikey+"&language=en-US&page=1";

const movieAccordingTognreId="https://api.themoviedb.org/3/discover/movie?api_key="+apikey+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=";
                
window.addEventListener("load",async ()=>{
//    let popularmovielink = await(await (await fetch(popularmovies)).json()).results; 
  
   
//    popularmovielink.forEach(results => {
//     let posterPath=results.poster_path;
//     let fullposterpath=halfImagePath+posterPath;     
//    let poster=document.createElement("img");
//     poster.src=fullposterpath;
//     poster.height="180";
//     poster.width="140";
//     poster.style.marginLeft="4px";
//     poster.style.borderRadius="21px";
//     let appendposter=document.querySelector(".movies-container");
//     appendposter.appendChild(poster); 
           
   
//  });  
let genreidforeachmovie="";
let genreforeachmovie=[]; 
let fullposterpath="";
let results=[];
let posterPath=[];
genreidlist = await (await (await fetch(gnreIdListApi)).json()).genres;

genreidlist.forEach(genre=> {
allgenremovies(genre)
posterforgenremovies(results)

});
async function allgenremovies(genre) {
  genreidforeachmovie=movieAccordingTognreId+genre.id;
  console.log(genreidforeachmovie); 
  genreforeachmovie=await(await(await fetch(genreidforeachmovie)).json()).results;
  console.log(genreforeachmovie); 
  posterPath=results.poster_path;
  console.log(posterPath);
  fullposterpath=halfImagePath+posterPath; 
  console.log(fullposterpath); 

  
}
// genreforeachmovie.forEach(results => {

// });
 function posterforgenremovies(results) {
  

let poster=document.createElement("img");
poster.src=fullposterpath;
poster.height="180";
poster.width="140";
poster.style.marginLeft="4px";
poster.style.borderRadius="21px";
let appendposter=document.querySelector("#movies-container");
appendposter.appendChild(poster); 
} 



        
          
      });
