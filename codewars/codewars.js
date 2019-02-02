var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
        var response = JSON.parse(xhttp.responseText);
        console.log(response);
    }
};
xhttp.open("GET", "https://airapi.airly.eu/v2/installations/nearest?lat=50.062006&lng=19.940984&maxDistanceKM=3&maxResults=1&apikey=DUTx1OkMGO3PZA782KBdX0ky0SJmkUyK", true);

xhttp.send();


