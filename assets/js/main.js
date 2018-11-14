let mapKuliner = L.map('mapKuliner').setView([-6.011747, 106.043625], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibWFrbnlhayIsImEiOiJjam5ia3JoOXMwNTMwM3FwcmFtMnp2dTA0In0.IyJ_SoqVQ5w1ZLZshMGGeQ'
}).addTo(mapKuliner);