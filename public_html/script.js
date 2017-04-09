var lat,long;
var geo="http://ip-api.com/json";
$(document).ready((function(){
$.getJSON(geo,function(data){ //Request data from geo coordinates API
    lat=data.lat;
    long=data.lon;
    //alert("Longitude is"+long);
    var api="http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=ea3fb1dae8da9a0d6864556741ffa2aa";   
    $.getJSON(api,function(data){ //Request data from open weather API
        //alert(data.coord.lon);
        //console.log(data.name);
        var t=data.main.temp;
        t=t-270.15; //Convert from Kelvin to C
        $("#id1").html("Hi there..!! You are from "+data.name+"..!!");
        $("#id2").html("Its is "+t+" &#x2103;");
       if(t<30) //Check the temperature
       $("#id3").html("Ok..!! Could manage the temperature..!! ");
       else
       $("#id3").html("Too hot to survive..!! ");
       var utcSeconds = data.sys.sunrise;
       var d = new Date(0);
       d.setUTCSeconds(utcSeconds); //convert date from UTC timings to IST
       $("#id4").html("Today's Sunrise timing "+d.getHours()+":"+d.getUTCMinutes()+" AM");
       var utcSeconds = data.sys.sunset;
       var d = new Date(0);
       d.setUTCSeconds(utcSeconds); //convert date from UTC timings to IST
        $("#id5").html("Today's Sunset timing "+d.getHours()+":"+d.getUTCMinutes()+" PM");
  }
);});
 }));
