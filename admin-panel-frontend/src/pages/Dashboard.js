import React from "react";
import CustomChart from "../components/CustomChart"; // ✅ Import the Chart component
import "../assets/css/styles.css";

const Dashboard = () => {
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [
      {
        label: "User Engagement",
        data: [50, 60, 80, 90, 100, 120, 110, 90],
        borderColor: "#f5b342",
        borderWidth: 3,
        tension: 0.3,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales",
        data: [30, 40, 60, 80, 90, 70],
        backgroundColor: "#00aaff",
        borderRadius: 5,
      },
    ],
  };

  const doughnutData = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#ff6384", "#36a2eb", "#ffce56"],
        hoverBackgroundColor: ["#ff4c64", "#2a89d2", "#e5b800"],
      },
    ],
  };

  const fourthChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [
      {
        label: "Revenue Growth",
        data: [30, 50, 70, 60, 90, 100, 110, 95], // Adjust data values as needed
        borderColor: "#36a2eb", // ✅ Blue theme for Fourth Line Chart
        backgroundColor: "rgba(54, 162, 235, 0.2)", // ✅ Light blue fill
        borderWidth: 3,
        tension: 0.3,
        pointRadius: 4,
        pointHoverRadius: 6,
        fill: true,
      },
    ],
  };

  // 🎯 Common chart options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: "#ffffff", // ✅ White text for visibility
          font: { family: "Poppins", size: 14, weight: "bold" },
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(255, 255, 255, 0.9)", // ✅ White background
        titleColor: "#000000", // ✅ Black title text
        bodyColor: "#000000", // ✅ Black body text
        borderColor: "#36a2eb", // ✅ Blue border
        borderWidth: 1,
        displayColors: false, // ✅ Removes color box next to text
        padding: 10,
        cornerRadius: 6, // ✅ Rounded tooltip corners
        titleFont: { size: 14, weight: "bold" },
        bodyFont: { size: 12 },
      },
    },
    scales: {
      x: {
        grid: { display: false }, // ❌ Hide X-axis grid
        ticks: { color: "#ffffff", font: { family: "Poppins" } },
      },
      y: {
        grid: { display: false }, // ❌ Hide Y-axis grid
        ticks: { color: "#ffffff", font: { family: "Poppins" } },
      },
    },
    interaction: {
      mode: "nearest", // 🔥 Allows full chart area hover
      intersect: false, // 🚀 Enables hover across the whole chart
    },
  };

  return (
    <div className="dashboard">
      {/* 🔹 Fourth Chart - Blended into Navbar */}
      <div className="fourth-chart-container">
        <CustomChart type="line" data={fourthChartData} options={chartOptions} />
      </div>
  
      {/* 🔹 Other Three Charts */}
      <div className="chart-wrapper">
        <div className="chart-container">
          <CustomChart type="line" data={lineData} options={chartOptions} />
        </div>
        <div className="chart-container">
          <CustomChart type="bar" data={barData} options={chartOptions} />
        </div>
        <div className="chart-container">
          <CustomChart type="doughnut" data={doughnutData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
}  

export default Dashboard;
