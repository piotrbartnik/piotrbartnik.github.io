const guideList = document.querySelector('.guides');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');

const setupUI = (user) => {
  if (user) {
    // account info
    db.collection('users').doc(user.uid).get().then(doc => {
      const html = `
      <div>Logged in as ${user.email}</div>
      <div>Uczelnia: ${doc.data().academy}</div>
      <div>hobby: ${doc.data().hobby}</div>
      <div>Skilsy: ${doc.data().skills}</div>
      <div>Skilsy: ${doc.data().crazy_skills}</div>
      `;
      accountDetails.innerHTML = html;

    })

    // toggle UI elements
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
  } else {
    //hide account info
    accountDetails.innerHTML = '';
    guideList.innerHTML = "";
    // toggle UI elements
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block');
  }
};

const userColections = (data) => {
  const academyArray = [];
  const countsAcademy = {};
  // check if user is logged in
  if (data.length) {
    let html = '';

    data.forEach(doc => {
      const user = doc.data();
      if (user.academy) {
        academyArray.push(user.academy);
      }



    });
    academyArray.forEach(function (x) {
      countsAcademy[x] = (countsAcademy[x] || 0) + 1;
    });
    console.log(Object.entries(countsAcademy))
    let academyObject = Object.entries(countsAcademy);

    const li = `
    <li>
    <div class="collapsible-header grey lighten-4">Gdzie studiowali nasi pracownicy</div> 
    <div class="collapsible-body white"></div> 
    </li>
    
     `;
     
    // html += li
    const collapsibleBody = document.getElementsByClassName('collapsible-body')[0];
    console.log()
    for (let i = 0; i < academyObject.length; i++) {
      const h1 = document.createElement('a');
      console.log(academyObject[i][0] + ' ' + academyObject[i][1] + ',')
      h1.textContent = academyObject[i][0] + ' ' + '(' + academyObject[i][1] + ')' + ', ';
      h1.setAttribute('class', 'big_tag');
      collapsibleBody.appendChild(h1);
    }
    // guideList.innerHTML = html;
  }
  
}

// setup materialize components
document.addEventListener('DOMContentLoaded', function () {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});

// function autocomplete(inp, arr) {
//   /*the autocomplete function takes two arguments,
//   the text field element and an array of possible autocompleted values:*/
//   var currentFocus;
//   /*execute a function when someone writes in the text field:*/
//   inp.addEventListener("input", function (e) {
//     var a, b, i, val = this.value;
//     /*close any already open lists of autocompleted values*/
//     closeAllLists();
//     if (!val) {
//       return false;
//     }
//     currentFocus = -1;
//     /*create a DIV element that will contain the items (values):*/
//     a = document.createElement("DIV");
//     a.setAttribute("id", this.id + "autocomplete-list");
//     a.setAttribute("class", "autocomplete-items");
//     /*append the DIV element as a child of the autocomplete container:*/
//     this.parentNode.appendChild(a);
//     /*for each item in the array...*/
//     for (i = 0; i < arr.length; i++) {
//       /*check if the item starts with the same letters as the text field value:*/
//       if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
//         /*create a DIV element for each matching element:*/
//         b = document.createElement("DIV");
//         /*make the matching letters bold:*/
//         b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
//         b.innerHTML += arr[i].substr(val.length);
//         /*insert a input field that will hold the current array item's value:*/
//         b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
//         /*execute a function when someone clicks on the item value (DIV element):*/
//         b.addEventListener("click", function (e) {
//           /*insert the value for the autocomplete text field:*/
//           inp.value = this.getElementsByTagName("input")[0].value;
//           /*close the list of autocompleted values,
//           (or any other open lists of autocompleted values:*/
//           closeAllLists();
//         });
//         a.appendChild(b);
//       }
//     }
//   });
//   /*execute a function presses a key on the keyboard:*/
//   inp.addEventListener("keydown", function (e) {
//     var x = document.getElementById(this.id + "autocomplete-list");
//     if (x) x = x.getElementsByTagName("div");
//     if (e.keyCode == 40) {
//       /*If the arrow DOWN key is pressed,
//       increase the currentFocus variable:*/
//       currentFocus++;
//       /*and and make the current item more visible:*/
//       addActive(x);
//     } else if (e.keyCode == 38) { //up
//       /*If the arrow UP key is pressed,
//       decrease the currentFocus variable:*/
//       currentFocus--;
//       /*and and make the current item more visible:*/
//       addActive(x);
//     } else if (e.keyCode == 13) {
//       /*If the ENTER key is pressed, prevent the form from being submitted,*/
//       e.preventDefault();
//       if (currentFocus > -1) {
//         /*and simulate a click on the "active" item:*/
//         if (x) x[currentFocus].click();
//       }
//     }
//   });

//   function addActive(x) {
//     /*a function to classify an item as "active":*/
//     if (!x) return false;
//     /*start by removing the "active" class on all items:*/
//     removeActive(x);
//     if (currentFocus >= x.length) currentFocus = 0;
//     if (currentFocus < 0) currentFocus = (x.length - 1);
//     /*add class "autocomplete-active":*/
//     x[currentFocus].classList.add("autocomplete-active");
//   }

//   function removeActive(x) {
//     /*a function to remove the "active" class from all autocomplete items:*/
//     for (var i = 0; i < x.length; i++) {
//       x[i].classList.remove("autocomplete-active");
//     }
//   }

//   function closeAllLists(elmnt) {
//     /*close all autocomplete lists in the document,
//     except the one passed as an argument:*/
//     var x = document.getElementsByClassName("autocomplete-items");
//     for (var i = 0; i < x.length; i++) {
//       if (elmnt != x[i] && elmnt != inp) {
//         x[i].parentNode.removeChild(x[i]);
//       }
//     }
//   }
//   /*execute a function when someone clicks in the document:*/
//   document.addEventListener("click", function (e) {
//     closeAllLists(e.target);
//   });
// }


// autocomplete(document.getElementById("academy"), academyArray);