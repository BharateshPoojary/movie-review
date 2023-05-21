const apikey ="5914067868644595e99f1fce7a4ffa3d";
const halfImagePath="https://image.tmdb.org/t/p/w500"
const gnreIdListApi="https://api.themoviedb.org/3/genre/movie/list?api_key="+apikey+"&language=en-US"
const popularmovies = "https://api.themoviedb.org/3/movie/popular?api_key="+apikey+"&language=en-US&page=1";
// const latestmovies = "https://api.themoviedb.org/3/movie/latest?api_key="+apikey+"&language=en-US"
const movieAccordingTognreId="https://api.themoviedb.org/3/discover/movie?api_key="+apikey+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=";
                
window.addEventListener("load",async ()=>{
              let popularmovielink = await(await (await fetch(popularmovies)).json()).results; 
    
             
              popularmovielink.forEach(results => {

                let posterPath=results.poster_path;
                let fullposterpath=halfImagePath+posterPath;     
                let poster=document.createElement("img");
                poster.src=fullposterpath;
                poster.className="poster";
                poster.height="200";
                poster.width="280";
                poster.style.display="flex";
                poster.style.flexDirection="row";
                poster.style.justifyContent="center";
                poster.style.alignItems="center"
                poster.style.paddingLeft="10px"
                poster.style.marginLeft="1px";
                poster.style.paddingRight="8px"
                poster.style.borderRadius="21px";
                poster.style.border="2px solid black";

                let appendposter=document.querySelector(".poster-container");
                appendposter.appendChild(poster); 

                let title= results.title;
                let titlename=document.createElement("p");
                titlename.innerHTML=title;
                titlename.style.display="flex";
                titlename.style.flexDirection="row";
                titlename.style.justifyContent="center";
                titlename.style.alignItems="center";  
                // titlename.style.whiteSpace="nowrap";
                titlename.style.paddingRight="47px";
          
                titlename.style.paddingLeft="40px";
                titlename.style.marginLeft="1px";
                

                titlename.style.border="2px solid black";
                
 
                let appendtitle= document.querySelector(".title-container");
                appendtitle.appendChild(titlename);
              });   
            
        // let genreidforeachmovie="";
        // let sectionnameforeachmovie="";
        
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
          let genreidresults=[];
          genreidresults=await(await(await fetch(genreidforeachmovie)).json()).results;
          console.log(genreidresults);
        
          genreidresults.forEach(genreresults=> {
            
            console.log(genreresults);  
           
             
            console.log(genreidresults);
        });
        
          
           
   
       
      //results=await(await(await fetch(sectionnameforeachmovie)).json()).results;
      // results.forEach(results=> {
      
      //       console.log(results);  
      //   });
    
      
       
       
        });
    
        

