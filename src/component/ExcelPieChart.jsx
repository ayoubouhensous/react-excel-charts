import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ExcelPieChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Load the Excel file from public/excel/donnees_graphique.xlsx
    fetch('/excel/donnees_graphique.xlsx')
      .then(res => res.arrayBuffer())
      .then(data => {
        // Read the Excel file using XLSX
        const workbook = XLSX.read(data, { type: 'array' });
        const worksheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[worksheetName];

        // Convert the worksheet to JSON
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        // Extract labels and values from JSON data
        const labels = jsonData.map(row => row.Catégorie);
        const values = jsonData.map(row => row.Valeur);

        // Prepare the data for the pie chart
        setChartData({
          labels,
          datasets: [
            {
              data: values,
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#66BB6A', '#FFA500', '#800080'],
              hoverOffset: 30
            }
          ]
        });
      });
  }, []);

  return (
    <div>
    <h2 style={{ textAlign: 'center' }}>Pie Chart from Excel File</h2>
      {chartData ? (
        <div style={{ width: '400px' }}>
            <Pie data={chartData} />
        </div>

      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default ExcelPieChart;
