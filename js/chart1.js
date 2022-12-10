const ctx = document.getElementById('barchart').getContext('2d');
const barchart =  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      datasets: [{
        label: 'Message Send by Client',
        data: [12, 19, 3, 5, 2, 3, 4],
        backgroundColor: [
            'rgba(0, 0, 255, 0.8)',
            'rgba(255, 0, 0, 0.8)',
            'rgba(255, 142, 0, 0.8)',
            'rgba(255, 206, 0, 0.8)',
            'rgba(0, 255, 0, 0.8)',
            'rgba(132, 0, 255, 1)',
            'rgba(55, 54, 37, 1)'
        ],
        borderColor:
        [
            'rgba(0, 0, 255, 0.8)',
            'rgba(255, 0, 0, 0.8)',
            'rgba(255, 142, 0, 0.8)',
            'rgba(255, 206, 0, 0.8)',
            'rgba(0, 255, 0, 0.8)',
            'rgba(132, 0, 255, 1)',
            'rgba(55, 54, 37, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });