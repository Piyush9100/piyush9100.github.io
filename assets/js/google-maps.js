function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 23.0225, lng: 72.5714};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Piyush Patel, Ahmedabad' // Title Location
    });
}