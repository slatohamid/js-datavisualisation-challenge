const canvasTable1 = document.createElement("canvas");
const canvasTable2 = document.createElement("canvas");
const canvasLive = document.createElement("canvas");
const table1 = document.getElementById("table1");
const table2 = document.getElementById("table2");
const parentTables = document.getElementById("mw-content-text");
const firstHeading = document.getElementById("firstHeading");

canvasTable1.setAttribute("id", "chart1");
canvasTable2.setAttribute("id", "chart2");
canvasLive.setAttribute("id", "chartLive");

parentTables.insertBefore(canvasTable1, table1);
parentTables.insertBefore(canvasTable2, table2);
firstHeading.after(canvasLive);

// table 1

function chartForTable1() {
  let years = [];
  let countries = [];
  let celles = [];

  const headerRow = table1.rows[1];
  for (let i = 2; i < headerRow.cells.length; i++) {
    years.push(headerRow.cells[i].textContent);
  }

  for (let x = 2; x < table1.rows.length; x++) {
    const row = table1.rows[x];
    countries.push(row.cells[1].textContent);

    const rowData = [];
    for (let y = 2; y < row.cells.length; y++) {
      rowData.push(parseFloat(row.cells[y].textContent.replace(",", ".")));
    }
    celles.push(rowData);
  }

  const ctx = document.getElementById("chart1");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: countries,
      datasets: years.map((year, index) => ({
        label: year,
        data: celles.map((row) => row[index]),
        borderColor: "blue",
        borderWidth: 1,
        backgroundColor: [
          "#FF0000",
          "#00FF00",
          "#0000FF",
          "#FFFF00",
          "#FF00FF",
          "#00FFFF",
          "#FFA500",
          "#800080",
          "#008000",
          "#000080",
          "#FFC0CB",
          "#A52A2A",
          "#008080",
          "#FFD700",
          "#800000",
          "#808000",
          "#8B008B",
          "#808080",
          "#C0C0C0",
          "#FFFFFF",
          "#000000",
          "#4B0082",
          "#7FFF00",
          "#FF4500",
          "#40E0D0",
          "#D2691E",
          "#696969",
          "#8A2BE2",
          "#556B2F",
          "#483D8B",
          "#2F4F4F",
          "#20B2AA",
          "#9370DB",
          "#7B68EE",
          "#32CD32",
          "#00CED1",
        ],
      })),
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

// Table 2

function chartForTable2() {
  let years = [];
  let countries = [];
  let celles = [];

  const headerRow = table2.rows[0];
  for (let i = 2; i < headerRow.cells.length; i++) {
    years.push(headerRow.cells[i].textContent);
  }

  for (let x = 2; x < table2.rows.length; x++) {
    const row = table2.rows[x];
    countries.push(row.cells[1].textContent);

    const rowData = [];
    for (let y = 2; y < row.cells.length; y++) {
      rowData.push(parseFloat(row.cells[y].textContent.replace(",", ".")));
    }
    celles.push(rowData);
  }

  const ctx = document.getElementById("chart2");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: countries,
      datasets: years.map((year, index) => ({
        label: year,
        data: celles.map((row) => row[index]),
        borderColor: "blue",
        borderWidth: 1,
        backgroundColor: ["#FF0000", "#00FF00", "#0000FF", "#FFFF00"],
      })),
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}



chartForTable1();

chartForTable2();
