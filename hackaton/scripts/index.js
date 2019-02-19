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
      `;
      accountDetails.innerHTML = html;

    })

    // toggle UI elements
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
  } else {
    //hide account info
    accountDetails.innerHTML = '';
    // toggle UI elements
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block');
  }
};

const userColections = (data) => {

  // check if user is logged in
  if (data.length) {
    let html = '';
    let academyArray = [];
    data.forEach(doc => {
      const user = doc.data();
      academyArray.push(user.academy);

    });
    const li = `
    <li>
    <div class="collapsible-header grey lighten-4">Gdzie studiowali nasi pracownicy</div> 
    <div class="collapsible-body white">${academyArray}</div> 
    </li>
    
     `;
    html += li
    guideList.innerHTML = html;
    
  }
}

// setup materialize components
document.addEventListener('DOMContentLoaded', function () {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});