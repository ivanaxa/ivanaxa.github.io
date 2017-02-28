
document.addEventListener("DOMContentLoaded", findAPOD);

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
            if(response.media_type=="video"){
                document.getElementById("apodvid").src= response.url;
            }
            else{
                document.getElementById("apodDemo").src = response.url;
                document.getElementById("apodvid").width= 0;
                document.getElementById("apodvid").height= 0;
            }
        }
    });
    event.preventDefault();

}
