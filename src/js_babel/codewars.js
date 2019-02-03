"use strict";

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    // Typical action to be performed when the document is ready:
    var response = JSON.parse(xhttp.responseText);
    console.log(response);
  }
};

xhttp.open("GET", "https://cors-anywhere.herokuapp.com/www.codewars.com/api/v1/users/PeterB8080/code-challenges/completed?page=0", true);
xhttp.send();