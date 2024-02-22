let canvas = document.querySelector('#soda-chart')
let context = canvas.getContext('2d')

let chart = new Chart(context, {
    type: 'bar',
    data: {
        labels: ['Coke', 'Pepsi', 'sprite', 'Either', 'Neither'],
        datasets: [ {
            label: 'Number of Votes',
            data: [18, 14, 8, 7, 10],
            backgroundColor: ['lightblue', 'purple', 'yellowgreen', 'pink', 'yellow']
        } ]
    },
    options: {
        scales: {
            yAxes: [ {
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})