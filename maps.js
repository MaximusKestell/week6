let metroAreaCenterCoordinates = [44.96, -93.2] // sets center point to twin cities coordinates
let zoomLevel = 9 // 1= whole world, 20 = city blocks.

let map = L.map('college-map').setView(metroAreaCenterCoordinates, zoomLevel) // creates the actual map

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { // leaflet uses url to make a request to put the images on for you.
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

campuses =  [
    {"name": "Minneapolis College", "website": "https://minneapolis.edu", "coordinates": [44.9724, -93.2844] },
    {"name": "Saint Paul College", "website": "https://saintpaul.edu", "coordinates": [44.94839, -93.1099] },
    {"name": "Normandale Community College", "website": "https://normandale.edu", "coordinates": [44.8297, -93.3312] },
    {"name": "North Hennepin Community College", "website": "https://nhcc.edu", "coordinates": [45.1054232,-93.3767558] },
    {"name": "Century College", "website": "https://www.century.edu/", "coordinates": [45.0438494,-92.9862026] }
]

campuses.forEach(function (collegeCampus) { // a way simpler way to make the multiple pins
    let markerText = `<b>${collegeCampus.name}</b><br><a href="${collegeCampus.website}">Website</a>`
    L.marker(collegeCampus.coordinates).bindPopup(markerText).addTo(map)
})

// let mctcCoordinates = [44.9724, -93.2844]
// let mctcMarker = L.marker(mctcCoordinates)
//     .bindPopup('Minneapolis College<br><a href="https://minneapolis.edu">Website</a>') //popup message
//     .addTo(map) // .bindPopup and .addTo are both "method Calls"
//
// let stPaulCoordinates = [44.9483, -93.1099]
// let stpMarker = L.marker(stPaulCoordinates)
//     .bindPopup('St. Paul College<br><a href="https://saintpaul.edu">Website</a>')
//     .addTo(map)
//
// let normandaleCoordinates = [44.8297, -93.3312]
// let normandaleMarker = L.marker(normandaleCoordinates)
//     .bindPopup('Normandale Community College<br><a href="http://www.normandale.edu/">Website</a>')
//     .addTo(map)

let metroAreaCircle = L.circle(metroAreaCenterCoordinates, {
    color: 'purple',
    radius: 30000,
    fillOpacity: 0.1
})
    .bindPopup('Twin Cities Metro Area')
    .addTo(map)

