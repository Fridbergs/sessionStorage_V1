// popup.js

document.addEventListener("DOMContentLoaded", function () {
  displaySavedData();
  document.getElementById("getDataButton").addEventListener("click", getData);
});

function displaySavedData() {
  let savedTable = document.getElementById("savedTable");
  savedTable.innerHTML = "<tr><th>Value</th></tr>";

  // Iterate over sessionStorage keys for the specific site
  let siteKeys = Object.keys(sessionStorage).filter((key) =>
    key.startsWith("savedText")
  );
  for (let i = 0; i < siteKeys.length; i++) {
    let key = siteKeys[i];
    let value = sessionStorage.getItem(key);

    let row = savedTable.insertRow(-1);
    let cell1 = row.insertCell(0);

    cell1.innerHTML = value;
  }
}

function getData() {
  chrome.runtime.sendMessage({ action: "getSavedData" }, function (response) {
    let savedTable = document.getElementById("savedTable");
    savedTable.innerHTML = "<tr><th>Value</th></tr>";

    for (let i = 0; i < response.data.length; i++) {
      let value = response.data[i].value;

      let row = savedTable.insertRow(-1);
      let cell1 = row.insertCell(0);

      cell1.innerHTML = value;
    }
  });
}
