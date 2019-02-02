// const userAction = async () => {
//   const response = await fetch('https://www.codewars.com/api/v1/users/:PeterB8080', {mode: 'no-cors'});
//   const myJson = await response.json(); //extract JSON from the http response
//   console.log(myJson)
// }

// userAction();

// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//        // Typical action to be performed when the document is ready:
//         var response = xhttp.responseText;
//         console.log("ok"+response);
//     }
// };
// xhttp.open("GET", "https://www.codewars.com/api/v1/users/:PeterB8080", true);

// xhttp.send();

// fetch(request, {mode: 'no-cors'})
// .then(function(response) {
//   console.log(response); 
// }).catch(function(error) {  
//   console.log('Request failed', error)  
// });

const Http = new XMLHttpRequest();
const url='https://www.codewars.com/api/v1/users/:PeterB8080?access_key=-2wAe5CTiBU7QMziUpJb';
Http.open("GET", url);
Http.send();
Http.onreadystatechange=(e)=>{
console.log(Http.responseText)
}