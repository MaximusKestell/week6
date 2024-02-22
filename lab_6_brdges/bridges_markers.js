let mapCenter = [44, -103]
// how much zoom in / out
let zoomLevel = 2

let bridgeMap = L.map('bridge-map').setView(mapCenter, zoomLevel)

// Add the tile layer - roads, streets etc. Without this, nothing to see
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a>',
}).addTo(bridgeMap)  // add the tileLayer to the bridge map

let bridgeData = [
    {
        name: 'Verrazano-Narrows Bridge',
        cityState: 'New York, NY',
        span:'1298.4',
        coordinates: [40.6066, -74.0447]
    },
    {
        name: 'Golden Gate Bridge',
        cityState: 'San Francisco and Marin, CA',
        span:'1280.2',
        coordinates: [37.8199, -122.4783]
    },
    //todo make three more obj for other bridges
]

bridgeData.forEach( function(bridge) {
    let bridgeCoordinates = bridge.coordinates
    let bridgeMarker = L.marker(bridgeCoordinates).addTo(bridgeMap)
    // todo create popup from data in bridge object
})