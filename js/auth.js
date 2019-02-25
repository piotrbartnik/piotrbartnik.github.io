const loginPanel = document.querySelector('#loginPanel');
const appBody = document.querySelector('#app');
const userRegisterData = document.querySelector('#registerDataContainer');
const editDataContainer = document.querySelector('#editDataContainer');
const userWrapper = document.getElementsByClassName('user-data__wrapper')[0];
let searchUser = document.querySelector('.search-user');
const dashboard = document.querySelector('#dashboard');
const editProfile = document.querySelector('#userEditProfile');
const yourProfile = document.querySelector('#userProfile');
const registerError = document.querySelector('#register-error');
const loginError = document.querySelector('#login-error');

let tags;
auth.signOut();
auth.onAuthStateChanged(user => {
  if (user) {
    db.collection('users').onSnapshot(snapshot => {
      userColections(snapshot.docs);
      tags = document.querySelectorAll('.tag_el');
      for (var i = 0; i < tags.length; i++) {
        tags[i].addEventListener('click', ((j) => {
          return function () {
            let searchedTag = tags[j].innerHTML.replace(/\s\(\d+\)\,/, '');
            let searchTagZero = searchedTag.trim();
            db.collection('users').onSnapshot(snapshot => {
              userPrint(snapshot.docs, searchTagZero)
            })

          }
        })(i))
      }
    }, err => {
      console.log(err.message);
    })
    db.collection('users').doc(user.uid).get().then(doc => {
      let data = doc.data();
      if (Object.entries(data).length < 4 || data.academy === "") {
        console.log('nie ma danych w bazie danych')
        userRegisterData.style.display = "flex";
        userWrapper.style.display = "none";
        searchUser.style.display = "none";
        dashboard.style.display = "none";
        editProfile.style.display = "none";
        yourProfile.style.display = "none";
      }
    })
  } else {
    console.log('user logged out.')
  }
})


// create user data
const createForm = document.querySelector('#userRegisterData');
createForm.addEventListener('submit', (e) => {
  e.preventDefault();
  auth.onAuthStateChanged(user => {

    db.collection('users').doc(user.uid).update({
      academy: createForm['userRegisterSchool'].value,
      hobby: createForm['userRegisterHobby'].value.split(','),
      skills: createForm['userRegisterSkills'].value.split(','),
      crazy_skills: createForm['userRegisterCrazySkills'].value.split(',')
    }).then(() => {
      userRegisterData.style.display = "none";
      userWrapper.style.display = "flex";
      searchUser.style.display = "flex";
      dashboard.style.display = "";
      editProfile.style.display = "";
      yourProfile.style.display = "";
    }).catch(err => {
      console.log(err.message);
    });
  })
});

// profile data
const accountDetails = document.querySelector('#userProfile');
const accountDetailsBody = document.querySelector('#registerUserData');
accountDetails.addEventListener('click', () => {
  // account info
  auth.onAuthStateChanged(user => {
    db.collection('users').doc(user.uid).get().then(doc => {
      const html = `
      <div class="col-md-6 mt-2 user-info">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Zalogowany jako: ${doc.data().name}</li>
          <li class="list-group-item">Uczelnia: ${doc.data().academy}</li>
          <li class="list-group-item">Hobby: ${doc.data().hobby}</li>
          <li class="list-group-item">Umiejętności : ${doc.data().skills}</li>
          <li class="list-group-item">Szalone umiejętności: ${doc.data().crazy_skills}</li>
        </ul>
      </div>
    `;
      registerUserData.innerHTML = html;
      registerUserData.style.display = "flex"
      editDataContainer.style.display = "none";
      userWrapper.style.display = "none";
      searchUser.style.display = "none";
    });
  });
});
const userEditProfile = document.querySelector('#userEditProfile');
userEditProfile.addEventListener('click', () => {
  editDataContainer.style.display = "flex";
  registerUserData.style.display = "none";
  userWrapper.style.display = "none";
  searchUser.style.display = "none  ";
  auth.onAuthStateChanged(user => {
    db.collection('users').doc(user.uid).get().then(doc => {
      editForm['userEditSchool'].value = doc.data().academy;
      editForm['userEditHobby'].value = doc.data().hobby;
      editForm['userEditSkills'].value = doc.data().skills;
      editForm['userEditCrazySkills'].value = doc.data().crazy_skills;
    });
  });
});


const editForm = document.querySelector('#userEditData');
editForm.addEventListener('submit', (e) => {

  e.preventDefault();
  auth.onAuthStateChanged(user => {

    db.collection('users').doc(user.uid).update({
      academy: editForm['userEditSchool'].value,
      hobby: editForm['userEditHobby'].value.split(','),
      skills: editForm['userEditSkills'].value.split(','),
      crazy_skills: editForm['userEditCrazySkills'].value.split(',')
    }).then(() => {
      editDataContainer.style.display = "none";
      userWrapper.style.display = "flex";
      searchUser.style.display = "flex";
    }).catch(err => {
      console.log(err.message);
    });
  });
});

dashboard.addEventListener('click', function () {
  registerUserData.style.display = "none";
  editDataContainer.style.display = "none";
  userWrapper.style.display = "flex";
  searchUser.style.display = "flex";
});

// signup
const signupForm = document.querySelector('#userRegister');

signupForm.addEventListener('submit', (e) => {
  console.log('test rejestracji przeszedł pomyślnie')
  e.preventDefault();
  String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  }
  const email = signupForm['registerUserEmail'].value;
  const password = signupForm['registerUserPassword'].value;
  const bhrEmail = /([a-z]+\.){2}benhauer(\+[a-z0-9]+)?\@gmail\.com/;
  const emailToName = email.split(".");
  const name = signupForm['registerUserName'];
  

  if (!bhrEmail.test(email)) {
    registerError.style.display = "block";
    setTimeout(() => {
      registerError.style.display = "none";
    }, 5000);
  } else {
    name.value = emailToName[0].capitalize() + ' ' + emailToName[1].capitalize();
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
      return db.collection('users').doc(cred.user.uid).set({
        name: name.value
      });
    }).then(() => {
      console.log('test rejestracji przeszedł pomyślnie')
      loginPanel.remove();
      appBody.style.display = "block";
    });
  }
});

// login
const loginForm = document.querySelector('#userLogin');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  //get user info
  const email = loginForm['loginUserEmail'].value;
  const password = loginForm['loginUserPassword'].value;
  const bhrEmail = /([a-z]+\.){2}benhauer(\+[a-z0-9]+)?\@gmail\.com/;
  console.log(email)
  if (!bhrEmail.test(email) || !email) {
    loginError.style.display = "block";
    setTimeout(() => {
      loginError.style.display = "none";
    }, 5000);
  }


  auth.signInWithEmailAndPassword(email, password).then(cred => {
    console.log('test loginu przeszedł pomyślnie')
    loginPanel.remove();
    appBody.style.display = "block";
  });
});





// logout
const logout = document.querySelector('#userLogOut');

logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut();
  location.reload();
});