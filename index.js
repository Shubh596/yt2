
 const search_results_div = document.getElementById("search_results")
 const searchVideos = async ()=> {
 
     try {
         let input = document.getElementById('search').value;
         let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${input}&key=AIzaSyAPP_xcGCBFy20IjyxO-0Rja8GSHX1dvLU&maxResults=20`);
         let data = await res.json();
         let videos = data.items;
         console.log(videos)
         appendVideos(videos)
 
     }catch (error){
         console.log(error)
     }
 }
 
 
 const appendVideos =(data) =>{
     search_results_div.innerHTML = null;
     data.forEach((elem)=>{
         let div = document.createElement("div");
 
         let title = document.createElement('p');
         title.innerText = elem.snippet.title;
 
         let img = document.createElement('img');
         img.src = elem.snippet.thumbnails.high.url;
         img.addEventListener("click", ()=>{
             playvideo(elem)
         });
         div.append(img, title);
         search_results_div.append(div);
     });
 };
 let video =  []
 playvideo = (elem) => {
     video.push(elem);
     localStorage.setItem("videolocal", JSON.stringify(video))
     window.location.href = "playVideo.html"
 }
 
 
 async function letData(){
     try {
         let input = document.getElementById('search').value;
         let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${input}&key=AIzaSyAPP_xcGCBFy20IjyxO-0Rja8GSHX1dvLU&maxResults=50&chart=mostPopular`);
         let data = await res.json();
         let videos = data.items;
         console.log(videos)
         appendVideos(videos)
 
     }catch (error){
         console.log(error)
     }
 }
 
 letData();