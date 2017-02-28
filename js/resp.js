
var today = new Date();
var movingDate = new Date();
var YYYY;
var MM;
var DD;
var dateString;

document.addEventListener("DOMContentLoaded", findAPOD);
document.getElementById("previous").addEventListener("click", goPrev, true);
document.getElementById("next").addEventListener("click", goNext, true);
document.getElementById("gotodate").addEventListener("click",goDate, true);

function goDate(){
    dateString = document.getElementById("inputDate").value;
    var res = dateString.split("-");

    var key = "?api_key=AeUOWhBbthYJsvQCGvN4kXuTWbx0t78nBjjl86Ft";
    var url = "https://api.nasa.gov/planetary/apod";
    var da = "&date="+ dateString;
    var fullUrl= url+key+da;

    var req = new XMLHttpRequest();
    req.open("GET", fullUrl, true);
    req.send(null);
    req.addEventListener("load", function(){
        if(req.status >= 200 && req.status < 400){
            var response = JSON.parse(req.responseText);
          document.getElementById("copyright").textContent = response.copyright;
          document.getElementById("date").textContent = response.date;
          document.getElementById("explanation").textContent = response.explanation;
          document.getElementById("media_type").textContent = response.media_type;
          document.getElementById("title").textContent = response.title;

          if(response.media_type=="video"){
            document.getElementById("url").src = "";
            document.getElementById("apodvid").width="720";
            document.getElementById("apodvid").height="405";
            document.getElementById("apodvid").src= response.url;
          }
          else{
            document.getElementById("apodvid").src= "";
            document.getElementById("url").src = response.url;
            document.getElementById("apodvid").width="0";
            document.getElementById("apodvid").height="0";
          }

          var y = res[0];
          var m = res[1];
          var d = res[2];
          console.log(y+m+d);
         movingDate = new Date(y, (m-1), d);
        }
        else {      //else if a bad request
            //console.log("Incorrect date input");
            document.getElementById("inputDate").value="ERROR: INVALID DATE, format YYYY-MM-DD";
        }
    });
    event.preventDefault();
}
//end of goDate()

function check(){
    generateAlert("Invalide date. Please format YYYY-MM-DD");
}
function goPrev(){
    var daysToAdd = -1;
    movingDate.setDate(movingDate.getDate() + daysToAdd);
    /*Set Date*/
    var day = movingDate.getDate();
    var year = movingDate.getFullYear() ;
    var month = (movingDate.getMonth()+1) ;  //so if movingDate month was 9(october), it becomes 10
    //change global variables
    YYYY = year;
    MM = month;
    DD= day;

    dateString = YYYY+"-"+MM+"-"+DD;

    //Set date inside the input box id=inputDate
    document.getElementById("inputDate").value= dateString;

    var key = "?api_key=AeUOWhBbthYJsvQCGvN4kXuTWbx0t78nBjjl86Ft";
    var url = "https://api.nasa.gov/planetary/apod";
    var da = "&date="+ dateString;

    var fullUrl= url+key+da;

    var req = new XMLHttpRequest();
    req.open("GET", fullUrl, true);
    req.send(null);
    req.addEventListener("load", function(){
        if(req.status >= 200 && req.status < 400){
            var response = JSON.parse(req.responseText);
          document.getElementById("copyright").textContent = response.copyright;
          document.getElementById("date").textContent = response.date;
          document.getElementById("explanation").textContent = response.explanation;
          document.getElementById("media_type").textContent = response.media_type;
          document.getElementById("title").textContent = response.title;

          if(response.media_type=="video"){
            document.getElementById("url").src = "";
            document.getElementById("apodvid").width="720";
            document.getElementById("apodvid").height="405";
            document.getElementById("apodvid").src= response.url;
          }
          else{
            document.getElementById("apodvid").src= "";
            document.getElementById("url").src = response.url;
            document.getElementById("apodvid").width="0";
            document.getElementById("apodvid").height="0";
          }
        }
    });
    event.preventDefault();
}
//end of goPrev()

function goNext(){
    var daysToAdd = 1;
    movingDate.setDate(movingDate.getDate() + daysToAdd);
    /*Set Date*/

    var day = movingDate.getDate();
    var year = movingDate.getFullYear() ;
    var month = (movingDate.getMonth()+1) ;  //so if movingDate month was 9(october), it becomes 10
    //change global variables
    YYYY = year;
    MM = month;
    DD= day;
    dateString = YYYY+"-"+MM+"-"+DD;
    document.getElementById("inputDate").value= dateString;

    var key = "?api_key=AeUOWhBbthYJsvQCGvN4kXuTWbx0t78nBjjl86Ft";
    var url = "https://api.nasa.gov/planetary/apod";
    var da = "&date="+ dateString;
    var fullUrl= url+key+da;
    var req = new XMLHttpRequest();
    req.open("GET", fullUrl, true);
    req.send(null);
    req.addEventListener("load", function(){
        if(req.status >= 200 && req.status < 400){
            var response = JSON.parse(req.responseText);
          document.getElementById("copyright").textContent = response.copyright;
          document.getElementById("date").textContent = response.date;
          document.getElementById("explanation").textContent = response.explanation;
          document.getElementById("media_type").textContent = response.media_type;
          document.getElementById("title").textContent = response.title;

          if(response.media_type=="video"){
              document.getElementById("url").src = "";
              document.getElementById("apodvid").width="720";
              document.getElementById("apodvid").height="405";
              document.getElementById("apodvid").src= response.url;
          }
          if(response.media_type=="image"){
            document.getElementById("apodvid").src= "";
            document.getElementById("url").src = response.url;
            document.getElementById("apodvid").width="0";
            document.getElementById("apodvid").height="0";
          }
        }
    });
    event.preventDefault();
}
//end of goNext()

function findAPOD(){
    /*Set Date*/
    //var d = new Date();
    var day = today.getDate() ;
    var year = today.getFullYear() ;
    var month = today.getMonth() ;
    if(day.toString().length<=1){
      day = "0"+day;
    }
    if(month.toString().length<=1){
      month = "0"+(month+1);
    }
    //change global variables
    YYYY = year;
    MM = month;
    DD = day;
    dateString = YYYY+"-"+MM+"-"+DD;

    //Set date inside the input box id=inputDate
    document.getElementById("inputDate").value= dateString;

    var key= "?api_key=AeUOWhBbthYJsvQCGvN4kXuTWbx0t78nBjjl86Ft";
    var url="https://api.nasa.gov/planetary/apod";
    //var datestring="&date="
    //document.getElementById("input").value=year+"-"+month+"-"+day;
    var fullUrl= url+key;
    var req = new XMLHttpRequest();
    req.open("GET", fullUrl, true);
    req.send(null);
    req.addEventListener("load", function(){
        if(req.status >= 200 && req.status < 400){
            var response = JSON.parse(req.responseText);
          document.getElementById("copyright").textContent = response.copyright;
          document.getElementById("date").textContent = response.date;
          document.getElementById("explanation").textContent = response.explanation;
          document.getElementById("media_type").textContent = response.media_type;
          document.getElementById("title").textContent = response.title;

          if(response.media_type=="video"){
              document.getElementById("url").src = "";
              document.getElementById("apodvid").width="720";
              document.getElementById("apodvid").height="405";
              document.getElementById("apodvid").src= response.url;
          }
          if(response.media_type=="image"){
            document.getElementById("apodvid").src= "";
            document.getElementById("url").src = response.url;
            document.getElementById("apodvid").width="0";
            document.getElementById("apodvid").height="0";
          }
        }
    });
    event.preventDefault();
}
//end of findAPOD()
