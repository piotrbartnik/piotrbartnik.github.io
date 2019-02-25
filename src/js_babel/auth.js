"use strict";

var loginPanel = document.querySelector('#loginPanel');
var appBody = document.querySelector('#app');
var userRegisterData = document.querySelector('#registerDataContainer');
var editDataContainer = document.querySelector('#editDataContainer');
var userWrapper = document.getElementsByClassName('user-data__wrapper')[0];
var searchUser = document.querySelector('.search-user');
var dashboard = document.querySelector('#dashboard');
var editProfile = document.querySelector('#userEditProfile');
var yourProfile = document.querySelector('#userProfile');
var registerError = document.querySelector('#register-error');
var loginError = document.querySelector('#login-error');
var tags;
auth.signOut();
auth.onAuthStateChanged(function (user) {
  if (user) {
    db.collection('users').onSnapshot(function (snapshot) {
      userColections(snapshot.docs);
      tags = document.querySelectorAll('.tag_el');

      for (var i = 0; i < tags.length; i++) {
        tags[i].addEventListener('click', function (j) {
          return function () {
            var searchedTag = tags[j].innerHTML.replace(/\s\(\d+\)\,/, '');
            var searchTagZero = searchedTag.trim();
            db.collection('users').onSnapshot(function (snapshot) {
              userPrint(snapshot.docs, searchTagZero);
            });
          };
        }(i));
      }
    }, function (err) {
      console.log(err.message);
    });
    db.collection('users').doc(user.uid).get().then(function (doc) {
      var data = doc.data();

      if (Object.entries(data).length < 4 || data.academy === "") {
        console.log('nie ma danych w bazie danych');
        userRegisterData.style.display = "flex";
        userWrapper.style.display = "none";
        searchUser.style.display = "none";
        dashboard.style.display = "none";
        editProfile.style.display = "none";
        yourProfile.style.display = "none";
      }
    });
  } else {
    console.log('user logged out.');
  }
}); // create user data

var createForm = document.querySelector('#userRegisterData');
createForm.addEventListener('submit', function (e) {
  e.preventDefault();
  auth.onAuthStateChanged(function (user) {
    db.collection('users').doc(user.uid).update({
      academy: createForm['userRegisterSchool'].value,
      hobby: createForm['userRegisterHobby'].value.split(','),
      skills: createForm['userRegisterSkills'].value.split(','),
      crazy_skills: createForm['userRegisterCrazySkills'].value.split(',')
    }).then(function () {
      userRegisterData.style.display = "none";
      userWrapper.style.display = "flex";
      searchUser.style.display = "flex";
      dashboard.style.display = "";
      editProfile.style.display = "";
      yourProfile.style.display = "";
    }).catch(function (err) {
      console.log(err.message);
    });
  });
}); // profile data

var accountDetails = document.querySelector('#userProfile');
var accountDetailsBody = document.querySelector('#registerUserData');
accountDetails.addEventListener('click', function () {
  // account info
  auth.onAuthStateChanged(function (user) {
    db.collection('users').doc(user.uid).get().then(function (doc) {
      var html = "\n      <div class=\"col-md-6 mt-2 user-info\">\n        <ul class=\"list-group list-group-flush\">\n          <li class=\"list-group-item\">Zalogowany jako: ".concat(doc.data().name, "</li>\n          <li class=\"list-group-item\">Uczelnia: ").concat(doc.data().academy, "</li>\n          <li class=\"list-group-item\">Hobby: ").concat(doc.data().hobby, "</li>\n          <li class=\"list-group-item\">Umiej\u0119tno\u015Bci : ").concat(doc.data().skills, "</li>\n          <li class=\"list-group-item\">Szalone umiej\u0119tno\u015Bci: ").concat(doc.data().crazy_skills, "</li>\n        </ul>\n      </div>\n    ");
      registerUserData.innerHTML = html;
      registerUserData.style.display = "flex";
      editDataContainer.style.display = "none";
      userWrapper.style.display = "none";
      searchUser.style.display = "none";
    });
  });
});
var userEditProfile = document.querySelector('#userEditProfile');
userEditProfile.addEventListener('click', function () {
  editDataContainer.style.display = "flex";
  registerUserData.style.display = "none";
  userWrapper.style.display = "none";
  searchUser.style.display = "none  ";
  auth.onAuthStateChanged(function (user) {
    db.collection('users').doc(user.uid).get().then(function (doc) {
      editForm['userEditSchool'].value = doc.data().academy;
      editForm['userEditHobby'].value = doc.data().hobby;
      editForm['userEditSkills'].value = doc.data().skills;
      editForm['userEditCrazySkills'].value = doc.data().crazy_skills;
    });
  });
});
var editForm = document.querySelector('#userEditData');
editForm.addEventListener('submit', function (e) {
  e.preventDefault();
  auth.onAuthStateChanged(function (user) {
    db.collection('users').doc(user.uid).update({
      academy: editForm['userEditSchool'].value,
      hobby: editForm['userEditHobby'].value.split(','),
      skills: editForm['userEditSkills'].value.split(','),
      crazy_skills: editForm['userEditCrazySkills'].value.split(',')
    }).then(function () {
      editDataContainer.style.display = "none";
      userWrapper.style.display = "flex";
      searchUser.style.display = "flex";
    }).catch(function (err) {
      console.log(err.message);
    });
  });
});
dashboard.addEventListener('click', function () {
  registerUserData.style.display = "none";
  editDataContainer.style.display = "none";
  userWrapper.style.display = "flex";
  searchUser.style.display = "flex";
}); // signup

var signupForm = document.querySelector('#userRegister');
signupForm.addEventListener('submit', function (e) {
  console.log('test rejestracji przeszedł pomyślnie');
  e.preventDefault();

  String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  };

  var email = signupForm['registerUserEmail'].value;
  var password = signupForm['registerUserPassword'].value;
  var bhrEmail = /([a-z]+\.){2}benhauer(\+[a-z0-9]+)?\@gmail\.com/;
  var emailToName = email.split(".");
  var name = signupForm['registerUserName'];

  if (!bhrEmail.test(email)) {
    registerError.style.display = "block";
    setTimeout(function () {
      registerError.style.display = "none";
    }, 5000);
  } else {
    name.value = emailToName[0].capitalize() + ' ' + emailToName[1].capitalize();
    auth.createUserWithEmailAndPassword(email, password).then(function (cred) {
      return db.collection('users').doc(cred.user.uid).set({
        name: name.value
      });
    }).then(function () {
      console.log('test rejestracji przeszedł pomyślnie');
      loginPanel.remove();
      appBody.style.display = "block";
    });
  }
}); // login

var loginForm = document.querySelector('#userLogin');
loginForm.addEventListener('submit', function (e) {
  e.preventDefault(); //get user info

  var email = loginForm['loginUserEmail'].value;
  var password = loginForm['loginUserPassword'].value;
  var bhrEmail = /([a-z]+\.){2}benhauer(\+[a-z0-9]+)?\@gmail\.com/;
  console.log(email);

  if (!bhrEmail.test(email) || !email) {
    loginError.style.display = "block";
    setTimeout(function () {
      loginError.style.display = "none";
    }, 5000);
  }

  auth.signInWithEmailAndPassword(email, password).then(function (cred) {
    console.log('test loginu przeszedł pomyślnie');
    loginPanel.remove();
    appBody.style.display = "block";
  });
}); // logout

var logout = document.querySelector('#userLogOut');
logout.addEventListener('click', function (e) {
  e.preventDefault();
  auth.signOut();
  location.reload();
});