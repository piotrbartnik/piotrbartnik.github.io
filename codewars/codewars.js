// const userAction = async () => {
//   const response = await fetch('https://www.codewars.com/api/v1/users/:PeterB8080', {mode: 'no-cors'});
//   const myJson = await response.json(); //extract JSON from the http response
//   console.log(myJson)
// }

// userAction();

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
        var response = xhttp.responseText;
        console.log("ok"+response);
    }
};
xhttp.open("GET", "https://xkcd.com/info.0.json", true);

xhttp.send();

// fetch(request, {mode: 'no-cors'})
// .then(function(response) {
//   console.log(response); 
// }).catch(function(error) {  
//   console.log('Request failed', error)  
// });
// var request = new Request('http://xkcd.com/info.0.json');

// fetch(request, {mode: 'no-cors'})
// .then(function(response) {
//   console.log(response);
// }).catch(function(error) {  
//   console.log('Request failed', error)  
// });

