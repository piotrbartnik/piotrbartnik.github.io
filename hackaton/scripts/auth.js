// listen to auth status change
auth.onAuthStateChanged(user => {
  console.log(user);
  if (user) {
    console.log('user logged in:', user);
    // if user is logged in get data and update UI
    db.collection('users').onSnapshot(snapshot => {
      userColections(snapshot.docs);
      console.log(user);
      setupUI(user);
    }, err => {
      console.log(err.message);
    })
    db.collection('users').doc(user.uid).get().then(doc => {
      let x = doc.data();
      if(Object.entries(x).length<4) {
        console.log('lol', x, user); 
        const modal = document.querySelector('#modal-create2');
        modal.style.display = "block"     
      }

    })
   
  } else {
    console.log('user logged out.')
    // if user is logged out clear the UI
    setupUI();
  }
})

// create new guide
const createForm = document.querySelector('#create-form');
createForm.addEventListener('submit', (e) => {
  e.preventDefault();
  auth.onAuthStateChanged(user => {
    console.log(user);
  

  db.collection('users').doc(user.uid).set({
    academy: createForm['academy'].value,
    hobby: createForm['hobby'].value,
    skills: createForm['skills'].value,
    crazy_skills: createForm['crazy_skills'].value
  }).then(() => {
    // close modal and reset form
    const modal = document.querySelector('#modal-create2')
    M.Modal.getInstance(modal).close();
    createForm.reset();
  }).catch(err => {
    console.log(err.message);
  });
})
});

// signup
const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // get user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  //sign up the user
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    return db.collection('users').doc(cred.user.uid).set({
      name: signupForm['signup-name'].value
    });
  }).then(() => {
    const modal = document.querySelector('#modal-signup')
    M.Modal.getInstance(modal).close();
    signupForm.reset();
  });
});

// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut();
});

// login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  //get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  auth.signInWithEmailAndPassword(email, password).then(cred => {
    console.log(cred.user);
    const modal = document.querySelector('#modal-login')
    M.Modal.getInstance(modal).close();
    loginForm.reset();
  });
});