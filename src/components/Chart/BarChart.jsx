import "./BarChart.css";
import { useEffect, useRef } from "react";

const BarChart = ({ chartData }) => {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    drawChart();
  }, [chartData]); // Redraw chart whenever chartData changes

  const drawChart = () => {
    const chartContainer = chartContainerRef.current;
    if (chartContainer) {
      const maxValue = 120;
      chartContainer.innerHTML = ""; // Clear the container before drawing

      chartData.forEach((value, index) => {
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${(value / maxValue) * 100}px`; // Set height based on value
        bar.textContent = value;
        chartContainer.appendChild(bar);
      });
    }
  };

  return <div ref={chartContainerRef} className="chart-container"></div>;
};

export default BarChart;
