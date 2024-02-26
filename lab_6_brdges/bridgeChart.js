document.addEventListener('DOMContentLoaded', function () {
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


// names and spans for chart.js
let bridgeNames = bridgeData.map(bridge => bridge.name);
let bridgeSpans = bridgeData.map(bridge => bridge.span);

let ctx = document.getElementById('barChart').getContext('2d')

// creating bar chart
let barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: bridgeNames,
        datasets: [
            {
                label: 'Bridge Spans',
                data: bridgeSpans,
                backgroundColor: 'green',
                borderColor: 'yellow'
            }
        ],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }  // fill in later
})
})