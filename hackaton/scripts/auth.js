// listen to auth status change
auth.onAuthStateChanged(user => {
  
  if (user) {
   
    // if user is logged in get data and update UI
    db.collection('users').onSnapshot(snapshot => {
      userColections(snapshot.docs);
      
      setupUI(user);
    }, err => {
      console.log(err.message);
    })
    db.collection('users').doc(user.uid).get().then(doc => {
      let data = doc.data();
      console.log('lol', data, user, Object.entries(data));
      if(Object.entries(data).length<4) {
        
        const modal = document.querySelector('#modal-create2');        
        M.Modal.getInstance(modal).open();    
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
  

  db.collection('users').doc(user.uid).update({
    academy: createForm['academy'].value,
    hobby: createForm['hobby'].value,
    skills: createForm['skills'].value,
    crazy_skills: createForm['crazy_skills'].value
  }).then(() => {
    // close modal and reset form
    const modal = document.querySelector('#modal-create2')
    M.Modal.getInstance(modal).close();
    createForm.reset();
    console.log('lol2')
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