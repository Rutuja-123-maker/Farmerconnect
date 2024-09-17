// Pie Chart Visualization using Chart.js
window.onload = function () {
  const ctx = document.getElementById('priceChart').getContext('2d');
  const chart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Apples', 'Carrots', 'Milk', 'Rice'],
      datasets: [{
        label: 'Product Prices',
        data: [2.5, 1.8, 1.2, 0.9], // Prices in $/kg or $/L
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50'],
        hoverOffset: 4
      }]
    }
  });
};
