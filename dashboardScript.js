google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  // Set Data
  const chartData1 = google.visualization.arrayToDataTable([
    ["Contry", "Mhl"],
    ["Italy", 55],
    ["France", 49],
    ["Spain", 44],
    ["USA", 24],
    ["France", 49],
    ["Argentina", 15],
  ]);

  const chartData2 = google.visualization.arrayToDataTable([
    ["Contry", "Mhl"],
    ["Italy", 55],
    ["France", 49],
    ["Spain", 44],
    ["USA", 24],
    ["France", 49],
    ["Argentina", 15],
  ]);

  // Set Options
  const options = {};

  // Draw
  const chart1 = new google.visualization.BarChart(
    document.getElementById("chart1")
  );
  const chart2 = new google.visualization.BarChart(
    document.getElementById("chart2")
  );

  chart1.draw(chartData1, options);
  chart2.draw(chartData2, options);
}
