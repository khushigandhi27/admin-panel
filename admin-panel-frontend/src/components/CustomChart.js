import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const CustomChart = ({ type, data, options }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy(); // ✅ Destroy old chart before creating new one
    }

    const ctx = chartRef.current.getContext("2d");

    // 🎨 ✅ Define exact colors per chart
    const colorMap = {
      line: {
        borderColor: "#f5b342", // ✅ Gold theme
        backgroundColor: "rgba(245, 179, 66, 0.2)",
      },
      bar: {
        backgroundColor: "#00aaff", // ✅ Blue theme
      },
      doughnut: {
        backgroundColor: ["#ff6384", "#36a2eb", "#ffce56"],
        hoverBackgroundColor: ["#ff4c64", "#2a89d2", "#e5b800"],
      },
      fourthLine: {
        borderColor: "#36a2eb", // ✅ Blue theme for Fourth Line Chart
        backgroundColor: "rgba(54, 162, 235, 0.2)", // ✅ Light blue fill
      },
    };

    // ✅ Apply colors based on chart type
    const modifiedData = { ...data };
    modifiedData.datasets = modifiedData.datasets.map((dataset) => ({
      ...dataset,
      borderColor: type === "fourthLine" ? colorMap.fourthLine.borderColor : colorMap[type]?.borderColor || dataset.borderColor,
      backgroundColor: type === "fourthLine" ? colorMap.fourthLine.backgroundColor : colorMap[type]?.backgroundColor || dataset.backgroundColor,
      hoverBackgroundColor: colorMap[type]?.hoverBackgroundColor || dataset.hoverBackgroundColor,
      fill: type === "line" || type === "fourthLine", // ✅ Fill area for line charts
    }));

    // ✅ Improve hover effects to work on the whole chart
    const enhancedOptions = {
      ...options,
      plugins: {
        tooltip: {
          enabled: true, // ✅ Show tooltips on hover
          mode: "nearest",
          intersect: false, // ✅ Works on the whole chart, not just points
        },
      },
      hover: {
        mode: "nearest",
        intersect: false,
      },
      scales: {
        x: {
          grid: { display: false }, // ✅ Remove grid lines
          ticks: { color: "#ffffff", font: { family: "Poppins" } },
        },
        y: {
          grid: { display: false },
          ticks: { color: "#ffffff", font: { family: "Poppins" } },
        },
      },
    };

    chartInstance.current = new Chart(ctx, {
      type: type === "fourthLine" ? "line" : type,
      data: modifiedData,
      options: enhancedOptions,
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // ✅ Cleanup when unmounting
      }
    };
  }, [type, data, options]);

  return <canvas ref={chartRef} />;
};

export default CustomChart;
