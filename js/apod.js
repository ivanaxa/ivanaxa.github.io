//onload, find the APOD
document.addEventListener("DOMContentLoaded", findAPOD);

function findAPOD(){
    var key= "?api_key=AeUOWhBbthYJsvQCGvN4kXuTWbx0t78nBjjl86Ft";
    var apodurl="https://api.nasa.gov/planetary/apod";
    var year;
    var month;
    var day;
    var date;
    //var date="&date=2010-09-20"
    var requestType= "GET";
    //var fullUrl= url+key+birthday;
    var URL= apodurl+key+date;
    var req = new XMLHttpRequest();
    req.open(requestType, URL, true);
    req.send(null);
    req.addEventListener("load", function(){
        if(req.status >= 200 && req.status < 400){  //response
            var response = JSON.parse(req.responseText);
            console.log(response);
            document.getElementById("apodDemo").src = response.url;
            document.getElementById("explanation").textContent= response.explanation;
        }
        else{  //no good response
            document.getElementById("apodDemo").src = "https://www.nasa.gov/sites/default/files/thumbnails/image/15-234.jpg"
        }
    });
    event.preventDefault();

}
