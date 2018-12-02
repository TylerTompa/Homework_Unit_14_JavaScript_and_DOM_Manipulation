// from data.js
var tableData = data;

// YOUR CODE HERE!
data.forEach(function(aliens) {
  console.log(aliens)
});

var tbody = d3.select("tbody");

data.forEach(function(alien_reporter) {
  var row = tbody.append("tr");
  Object.entries(alien_reporter).forEach(function([key, value])
  {
      var cell = row.append("td");
      cell.text(value)
  }
  )
});