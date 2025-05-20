const ctx = document.getElementById("fourthChart").getContext("2d");

const fourthChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      label: "Monthly Growth",
      data: [50, 120, 180, 130, 110, 90, 150, 170, 140, 180, 190, 100],
      borderColor: "#ffffff", // White line
      borderWidth: 2,
      pointBackgroundColor: "#ffffff",
      pointBorderColor: "#ffffff",
      pointRadius: 4,
      fill: false,
    }],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        titleColor: "#000",
        bodyColor: "#000",
        borderColor: "#ffffff",
        borderWidth: 1,
        displayColors: false,
        padding: 10,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#ffffff" }, // White text
      },
      y: {
        grid: { display: false },
        ticks: { color: "#ffffff" }, // White text
      },
    },
  },
});
