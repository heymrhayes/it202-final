
let maps;

// // storing markers in array for use later
let markersArray = [];

let chicago = {
  lat: 41.8781,
  lng: -87.6298
};

const APIurl = "https://data.cityofchicago.org/resource/kh4r-387c.json?";

function initMap(){
    let maps = new google.maps.Map(document.getElementById('maps'), {
    center: {lat: 41.8781, lng: -87.6298},
    zoom: 10
  });
        

    $.get(APIurl ,function(response){
          let data = response;
          createMarkers(maps,data);
          console.log();
          console.log(long);
          });
    function createMarkers(maps, data) {

    $.each(data, function(i, v) {
      let marker;
          
      let location = {
        lat: parseFloat(v.school_latitude),
        lng: parseFloat(v.school_longitude)
          
      }
        
      if(v.rating == "PG"){
      marker = new google.maps.Marker({
          maps: maps,
          position: location,
          icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
          }
        })
      } else {
        marker = new google.maps.Marker({
          maps: maps,
          position: location,
          icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
          }
        })
      }    
        let infowindow = new google.maps.InfoWindow({
        content: 'Movie Title: ' + v.title + '<br/>' + 'Park: ' + v.park +
          '<br/>Address: ' + v.park_address + '<br/>Date: ' + v.date
        });

      marker.addListener('click', function(results) {
        infowindow.open(maps, marker);
      });
      
      
      
      
      
      
      
         });
  }
};