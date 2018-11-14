// init leaflet
const map = {};
map.mapdata = [];

map.init = () => {
    map.mapinit();
    map.getDataKuliner();
}

map.mapid = L.map('mapid').setView([-6.011747, 106.043625], 13);
map.mapinit = () => {
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoibWFrbnlhayIsImEiOiJjam5ia3JoOXMwNTMwM3FwcmFtMnp2dTA0In0.IyJ_SoqVQ5w1ZLZshMGGeQ' // Mapbox token
    }).addTo(map.mapid);
}

map.getDataKuliner = () => {
    const URL = './assets/data/data.json';
    fetch(URL)
        .then(response => {
            if (response.status !== 200) {
                console.log(`Ada masalah, status code: ${response.status}`);
                throw response.statusText;
            }
    
            return response.json();
        })
        .then(result => {
            let kuliners = result.kuliners;
            map.mapdata = kuliners;
            map.generateMarker();
        })
        .catch(error => {
            console.log(error);
        });
}

map.showDetail = () => {
    console.log(map.data);
}

map.generateMarker = () => {
    console.log(map.mapdata)
    let places = map.mapdata;
    for (let place of places) {
        let marker = L.marker(place.latlng).addTo(map.mapid).bindPopup(place.nama);
        marker.on('click', map.showDetail);
    }
}

map.init();
