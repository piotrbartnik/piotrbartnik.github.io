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
      <div>${doc.data().bio}</div>
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
}

// setup guides
const setupGuides = (data) => {
  
  // check if user is logged in
  if (data.length) {
    let html = '';
    let hobbyArray = [];
    let skillsArray = [];
    data.forEach(doc => {
      const guide = doc.data();
      hobbyArray.push(guide.hobby);
      skillsArray.push(guide.skills);
      

      // const li = `
      //   <li>
      //     <div class="collapsible-header grey lighten-4">${guide.name}</div>          
      //     <div class="collapsible-body white">${guide.academy}</div>
      //     <div class="collapsible-body white">${guide.hobby}</div>
      //     <div class="collapsible-body white">${guide.skills}</div>
      //     <div class="collapsible-body white">${guide.crazy_skills}</div>
      //   </li>
      // `;

      // html += li
    });
   
    const li = `
    <li>
    <div class="collapsible-header grey lighten-4">Hobby naszych wspaniałych pracowników</div> 
    <div class="collapsible-body white">${hobbyArray}</div> 
    </li>
    <li>
    <div class="collapsible-header grey lighten-4">Umiejętności naszych wspaniałych pracowników</div> 
    <div class="collapsible-body white">${skillsArray}</div> 
    </li>
     `;
     html += li
    guideList.innerHTML = html;
  } else {
    guideList.innerHTML = '<h5 class="center-align">Log in to see guides</h5>'
  }
}

// setup materialize components
document.addEventListener('DOMContentLoaded', function () {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});