// Create XMLHttpRequest Object.
var xhr = new XMLHttpRequest();

xhr.onload = function()
{
  responseObject = JSON.parse(xhr.responseText);

  // Build up string with new content
  var newContent = "";
  // Loop through Object
  for (var i = 0; i < responseObject.events.length; i++)
  {
    newContent += "<div class='event'>";
    newContent += "<img src='" + responseObject.events[i].map + "' ";
    newContent += "<alt>'" + responseObject.events[i].location + "' />"
    newContent += "<p><b>" + responseObject.events[i].location + "</b><br>";
    newContent += responseObject.events[i].date + "</p>";
    newContent += "</div>";
  }
  //Update the page with the new content.
  document.getElementById("content").innerHTML = newContent;

};
// Prepare the request.
xhr.open("GET", "data/data.json", true);

// Send the request.
xhr.send(null);
