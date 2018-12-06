// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

data.forEach(function(alien_reporter) {
  var row = tbody.append("tr");
  Object.entries(alien_reporter).forEach(function([key, value])
  {
      var cell = row.append("td");
      cell.text(value);
  }
  );
});

// Select the filter table button
var filter_table_button = d3.select("#filter-btn");

filter_table_button.on("click", function() {

  // We use the preventDefault method,
  // to prevent the page from refreshing when the button is clicked.
  d3.event.preventDefault();

  // This selects the input element and gets the raw HTML node.
  var filter_table_date_input = d3.select("#datetime");

  // This gets the actual value from the input element.
  var filter_table_date_value = filter_table_date_input.property("value");

  console.log(filter_table_date_value)

  var filtered_dates = tableData.filter(tableData => tableData.datetime === filter_table_date_value);

  // console.log(filtered_dates);

  // We select the <tbody> element and replace it's entire contents with blank html,
  // so that our filtered results only include the user-specified date.
  d3.select("tbody").html("");
  
  filtered_dates.forEach(function(alien_reporter) {
    var row = tbody.append("tr");
    Object.entries(alien_reporter).forEach(function([key, value])
    {
          console.log(value)
       var cell = row.append("td");
        cell.text(value)
    }
    )
  });

});