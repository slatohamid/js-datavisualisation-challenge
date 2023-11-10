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

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

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
        backgroundColor: Array.from({ length: 36 }, () => getRandomColor()),
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
        backgroundColor: Array.from({ length: 36 }, () => getRandomColor()),
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
