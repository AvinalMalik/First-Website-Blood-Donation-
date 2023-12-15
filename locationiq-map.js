// Your LocationIQ access token goes here
var accessToken = 'pk.c51f523a96fdcb0b2bbff8165cebb69d';

// Set up the map with a default view
var map = L.map('map').setView([51.505, -0.09], 13);

// Set up the tile layer using LocationIQ tiles
L.tileLayer(`https://{s}-tiles.locationiq.com/v2/streets/r/{z}/{x}/{y}.png?key=${accessToken}`, {
    maxZoom: 18,
    attribution: '© LocationIQ.com'
}).addTo(map);

// Function to add markers for donation centers to the map
function addDonationCenters(donationCentersArray) {
    donationCentersArray.forEach(function(center) {
        L.marker([center.latitude, center.longitude]).addTo(map)
            .bindPopup(center.name)
            .openPopup();
    });
}
var donationCenters = [
    {"latitude": 18.971691, "longitude": 72.809799, "name": "Jaslok Hospital And Research Centre Blood Bank"},
    {"latitude": 19.046529, "longitude": 72.827062, "name": "Lilavati Hospital And Research Centre Blood Bank"},
    {"latitude": 19.033583, "longitude": 72.838171, "name": "P. D. Hinduja National Hospital And Medical Research Centre Blood Bank"},
    {"latitude": 18.999428, "longitude": 72.839703, "name": "Global Hospital Blood Bank"},
    {"latitude": 19.251421, "longitude": 72.85471, "name": "Borivali Blood Bank - Blood bank near me | Blood donation centre | Blood donation camp | Plasma, packed cells, platelets"},
    {"latitude": 19.134397, "longitude": 72.825674, "name": "Kokilaben Dhirubhai Ambani Blood Bank"},
    {"latitude": 19.104497, "longitude": 72.839501, "name": "Dr. R. N. Cooper General Hospital Blood Bank"},
    {"latitude": 19.001203, "longitude": 72.840544, "name": "Tata Memorial Hospital Blood Bank"},
    {"latitude": 19.118415, "longitude": 72.878285, "name": "Seven Hills Health Care Private Limited Hospital Blood Centre"},
    {"latitude": 19.092754, "longitude": 72.914721, "name": "समर्पण ब्लड सेंटर"},
    {"latitude": 19.135219, "longitude": 72.848023, "name": "Manas Blood Bank"},
    {"latitude": 28.567312, "longitude": 77.210141, "name": "Blood Bank in AIIMS"},
    {"latitude": 28.699156, "longitude": 77.123379, "name": "Pitampura Blood Bank ( NABH - Blood Centre) Regional Blood Transfusion Centre"},
    {"latitude": 28.641189, "longitude": 77.30946, "name": "Lions Blood Bank - East Delhi"},
    {"latitude": 28.712056, "longitude": 77.290219, "name": "BHARAT SEWA CHARITABLE BLOOD CENTRE,Loni"},
    {"latitude": 28.70406, "longitude": 77.162387, "name": "Lions Blood Bank (NABH Accredited) Shalimar bagh, Delhi"},
    {"latitude": 28.631355, "longitude": 77.082869, "name": "Gurunanak Dev charitable blood centre"},
    {"latitude": 28.642754, "longitude": 77.18162, "name": "Blood Bank"},
    {"latitude": 28.5132, "longitude": 77.242771, "name": "Rotary Blood Bank"},
    {"latitude": 28.621743, "longitude": 77.088269, "name": "Mata Chanan Devi Hospital Blood Bank"},
    {"latitude": 28.618575, "longitude": 77.210905, "name": "Indian Red Cross Society National Headquarter"},
    {"latitude": 28.593454, "longitude": 77.081131, "name": "Bhagat Chandra Hospital Blood Bank"},
    {"latitude": 28.633286, "longitude": 77.308932, "name": "Blood Donation"},
    {"latitude": 28.643618, "longitude": 77.178778, "name": "Dr. B. L. Kapoor Memorial Hospital Blood Bank"},
    {"latitude": 28.530781, "longitude": 77.293998, "name": "Apollo Hospital Blood Bank"},
    {"latitude": 28.682581, "longitude": 77.052353, "name": "Mission Jan Jagriti Blood Bank"}
];


// Function to get the user's location
function getUserLocation() {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var userLatitude = position.coords.latitude;
            var userLongitude = position.coords.longitude;
            
            // Update map center to user's location
            map.setView(new L.LatLng(userLatitude, userLongitude), 13);

            // Optionally add a marker at the user's location
            L.marker([userLatitude, userLongitude]).addTo(map)
                .bindPopup('Your Location').openPopup();

            // Add donation centers to the map
            addDonationCenters(donationCenters);

        }, function(error) {
            // Handle error
            console.error("Error occurred: ", error.message);
            // Add donation centers even if there's an error
            addDonationCenters();
        });
    } else {
        alert("Geolocation is not supported by this browser.");
        // Add donation centers even if geolocation is not supported
        addDonationCenters();
    }
}

// If you want to automatically ask for location on page load uncomment this:
document.addEventListener('DOMContentLoaded', getUserLocation);
