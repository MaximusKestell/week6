let mapCenter = [44, -103]
// how much zoom in / out
let zoomLevel = 2

let bridgeMap = L.map('bridge-map').setView(mapCenter, zoomLevel)

// Add the tile layer - roads, streets etc. Without this, nothing to see
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a>',
}).addTo(bridgeMap)  // add the tileLayer to the bridge map

// creating custom bridge icon
let bridgeIcon = L.icon({
    iconUrl: 'bridge.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
})

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
    {
        name: 'Mackinac Bridge',
        cityState: 'Mackinaw and St Ignace, MI',
        span:'1158.0',
        coordinates: [45.8174, -84.7278]
    },
    {
        name: 'George Washington Bridge',
        cityState: 'New York, NY and New Jersey, NJ',
        span:'1067.0',
        coordinates: [40.8517, -73.9527]
    },
    {
        name: 'Tacoma Narrows Bridge',
        cityState: 'Tacoma and Kitsap, WA',
        span:'853.44',
        coordinates: [47.2690, -122.5517]
    },
]

// finding longest bridge
// let longestBridge = bridgeData.reduce((prev, current) => (prev.span > current.span) ? prev : current)
bridgeData.forEach( function(bridge) {
    let bridgeCoordinates = bridge.coordinates
    let bridgeMarker = L.marker(bridgeCoordinates, {icon: bridgeIcon}).addTo(bridgeMap)
    let popupContent = `<b>${bridge.name}</b><br>City/State: ${bridge.cityState}<br>Span: ${bridge.span} meters<br><a href="${bridge.website}">Website</a>`
    bridgeMarker.bindPopup(popupContent)
})


// below is how to get link for each page to submit.
/// https://maximuskestell.github.io/week6/lab_6_brdges/bridges.html