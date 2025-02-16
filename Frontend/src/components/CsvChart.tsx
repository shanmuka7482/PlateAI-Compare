import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import Papa from "papaparse";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const CsvChart = ({ file1, file2 }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const fetchAndProcessCSV = async (file) => {
      const response = await fetch(file);
      const csvText = await response.text();

      return new Promise((resolve) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            console.log(`Fetched ${file}: ${results.data.length} rows`);
            const sampledData = results.data.filter((_, index) => index % 10 === 0); // Downsample

            resolve({
              labels: sampledData.map((row) => row.Step), // X-axis
              values: sampledData.map((row) => parseFloat(row.Value)), // Y-axis
            });
          },
        });
      });
    };

    const fetchData = async () => {
      const data1 = await fetchAndProcessCSV(file1);
      const data2 = await fetchAndProcessCSV(file2);

      setChartData({
        labels: data1.labels, // Use first dataset's labels (assuming both have same steps)
        datasets: [
          {
            label: "EasyOcr",
            data: data1.values,
            borderColor: "rgba(75,192,192,1)",
            backgroundColor: "rgba(75,192,192,0.2)",
            pointRadius: 0,
            tension: 0.4,
          },
          {
            label: "PaddleOcr",
            data: data2.values,
            borderColor: "rgba(255,99,132,1)",
            backgroundColor: "rgba(255,99,132,0.2)",
            pointRadius: 0,
            tension: 0.4,
          },
        ],
      });
    };

    fetchData();
  }, [file1, file2]);

  return <Line data={chartData} />;
};

export default CsvChart;
