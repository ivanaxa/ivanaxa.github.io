document.addEventListener("DOMContentLoaded", findAPOD);

//AeUOWhBbthYJsvQCGvN4kXuTWbx0t78nBjjl86Ft
function findAPOD(){
    var key= "?api_key=AeUOWhBbthYJsvQCGvN4kXuTWbx0t78nBjjl86Ft";
    var url="https://api.nasa.gov/planetary/apod";
    var fullUrl= url+key;
    console.log(fullUrl);
    var req = new XMLHttpRequest();
    req.open("GET", fullUrl, true);
    req.send(null);
    req.addEventListener("load", function(){
        if(req.status >= 200 && req.status < 400){
            var response = JSON.parse(req.responseText);
            console.log(response);

            console.log(response.copyright);
            console.log(response.date);
            console.log(response.explanation);
            console.log(response.hdurl);
            console.log(response.media_type);
            console.log(response.service_version);
            console.log(response.title);
            console.log(response.url);
            document.getElementById("date").textContent = response.date;
          document.getElementById("explanation").textContent = response.explanation;
          document.getElementById("hdurl").textContent = response.hdurl;
          document.getElementById("media_type").textContent = response.media_type;
          document.getElementById("service_version").textContent = response.service_version;
          document.getElementById("title").textContent = response.title;
          document.getElementById("url").textContent = response.url;
        }
    });
    event.preventDefault();

}

/*
response.copyright
response.date
response.explanation
response.hdurl
response.media_type
response.service_version
response.title
response.url
*/
