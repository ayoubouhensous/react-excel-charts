# 📊 Excel Data Visualization with React and Python

This project demonstrates how to generate an Excel file using Python and visualize the data in a Pie Chart using React, Vite, and Chart.js.

---

## 📁 Project Structure

- `excel/generate_excel.py` → Python script to generate the Excel file
- `public/excel/donnees_graphique.xlsx` → Generated Excel file used by the frontend
- `src/ExcelPieChart.jsx` → React component that reads the Excel file and renders a pie chart
- `src/App.jsx` → Main app file that displays the chart component
- `vite.config.js`, `package.json`, `index.html` → Vite project configuration files

---

## 🧰 Technologies Used

- Python (with `pandas`)
- React + Vite
- Chart.js & React-Chartjs-2
- XLSX.js (for reading Excel files in JavaScript)

---

## ▶️ How it works

1. A Python script generates an Excel file with some data.
2. This file is placed in the `public/` folder so it can be loaded by the frontend.
3. React reads the Excel file and uses Chart.js to display the data in a Pie Chart.

---

## ✅ Result

A dynamic and interactive chart generated from Excel data using modern web technologies.

---

## 📜 License

MIT
