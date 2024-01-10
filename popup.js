// popup.js

document.addEventListener("DOMContentLoaded", function () {
  displaySavedData();
  document.getElementById("copyButton").addEventListener("click", copyData);
});

function displaySavedData() {
  let savedTable = document.getElementById("savedTable");
  savedTable.innerHTML = "<tr><th>Key</th><th>Value</th></tr>";

  // Iterate over sessionStorage keys for the specific site
  let siteKeys = Object.keys(sessionStorage).filter((key) =>
    key.startsWith("savedText")
  );
  for (let i = 0; i < siteKeys.length; i++) {
    let key = siteKeys[i];
    let value = sessionStorage.getItem(key);

    let row = savedTable.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);

    cell1.innerHTML = key;
    cell2.innerHTML = value;
  }
}

function copyData() {
  let savedData = "";

  // Iterate over sessionStorage keys for the specific site
  let siteKeys = Object.keys(sessionStorage).filter((key) =>
    key.startsWith("savedText")
  );
  for (let i = 0; i < siteKeys.length; i++) {
    let key = siteKeys[i];
    let value = sessionStorage.getItem(key);
    savedData += `${key}: ${value}\n`;
  }

  navigator.clipboard.writeText(savedData).then(function () {
    alert("Data copied to clipboard!");
  });
}
