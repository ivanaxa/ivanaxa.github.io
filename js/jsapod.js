//onload, find the APOD
document.addEventListener("DOMContentLoaded", findAPOD);

function findAPOD(){
    var key= "?api_key=AeUOWhBbthYJsvQCGvN4kXuTWbx0t78nBjjl86Ft";
    var url="https://api.nasa.gov/planetary/apod";
    //var date="&date=2010-11-11"
    //var fullUrl= url+key+date;
    var fullUrl= url+key;
    console.log(fullUrl);
    var req = new XMLHttpRequest();
    req.open("GET", fullUrl, true);
    req.send(null);
    req.addEventListener("load", function(){
        if(req.status >= 200 && req.status < 400){
            var response = JSON.parse(req.responseText);
            //console.log(response);
            if(response.media_type=="video"){
                document.getElementById("apodvid").src= response.url;
                document.getElementById("explanation").textContent= response.explanation;
            }
            else{
                document.getElementById("apodDemo").src = response.url;
                document.getElementById("explanation").textContent= response.explanation;
                document.getElementById("apodvid").width= 0;
                document.getElementById("apodvid").height= 0;
            }
        }
    });
    event.preventDefault();

}
