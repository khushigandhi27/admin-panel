import React, { useRef, useEffect } from "react";
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, Tooltip, CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip);

const DashboardChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = chartRef.current;

    if (chart) {
      const ctx = chart.ctx;
      const gradient = ctx.createLinearGradient(0, 0, 0, 400);
      gradient.addColorStop(0, "rgba(0,123,255,0.6)");
      gradient.addColorStop(1, "rgba(0,123,255,0)");

      chart.data.datasets[0].backgroundColor = gradient;
      chart.update();
    }
  }, []);

  const data = {
    labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
    datasets: [
      {
        label: "Data",
        data: [50, 100, 150, 190, 120, 140, 160, 200, 220, 180, 150, 90],
        borderColor: "#007bff",
        borderWidth: 3,
        pointBackgroundColor: "#ffffff",
        pointBorderColor: "#007bff",
        pointRadius: 5,
        fill: true, // Enables the gradient fill
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      x: { grid: { display: false }, ticks: { color: "white" } },
      y: { grid: { color: "rgba(255,255,255,0.2)" }, ticks: { color: "white" } },
    },
  };

  return (
    <div style={{ width: "100%", height: "300px" }}>
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default DashboardChart;
