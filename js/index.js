let userPrintString = (data, str, arr, finalData) => {
  if (data === str) {
    arr.push(finalData);
  }
}

let userPrintArray = (data, str, arr, finalData) => {
  for (var i = 0; i < data.length; i++) {
    if (data[i].trim() === str) {
      arr.push(finalData);
    }
  }
}


const userPrint = (data, str) => {
  let chosenPerson = [];
  let chosenUsersList = document.getElementById('chosenUsersList');
  if (data.length) {
    data.forEach(doc => {
      const user = doc.data();
      userPrintString(user.academy, str, chosenPerson, user.name);
      userPrintArray(user.hobby, str, chosenPerson, user.name);
      userPrintArray(user.skills, str, chosenPerson, user.name);
      userPrintArray(user.crazy_skills, str, chosenPerson, user.name);
    })
  }

  chosenUsersList.innerHTML = '';
  for (let i = 0; i < chosenPerson.length; i++) {
    chosenUsersList.innerHTML += `<div class="person">${chosenPerson[i]}</div>`
  }
}


const userColections = (data) => {
  const academyArray = [];
  const countsAcademy = {};
  const hobbyArray = [];
  const countsHobby = {};
  const skillsArray = [];
  const countsSkills = {};
  const crazySkillsArray = [];
  const countsCrazySkills = {};
  // check if user is logged in
  if (data.length) {
    let html = '';

    data.forEach(doc => {
      const user = doc.data();
      if (user.academy) {
        academyArray.push(user.academy);
      }
      if (user.hobby) {
        for (let i = 0; i < user.hobby.length; i++) {
          hobbyArray.push(user.hobby[i].trim());

        }
      }
      if (user.skills) {
        for (let i = 0; i < user.skills.length; i++) {
          skillsArray.push(user.skills[i].trim());
        }
      }
      if (user.crazy_skills) {
        for (let i = 0; i < user.crazy_skills.length; i++) {
          crazySkillsArray.push(user.crazy_skills[i].trim());
        }
      }
    });
    academyArray.forEach(function (x) {
      countsAcademy[x] = (countsAcademy[x] || 0) + 1;
    });
    hobbyArray.forEach(function (x) {
      countsHobby[x] = (countsHobby[x] || 0) + 1;
    });
    skillsArray.forEach(function (x) {
      countsSkills[x] = (countsSkills[x] || 0) + 1;
    });
    crazySkillsArray.forEach(function (x) {
      countsCrazySkills[x] = (countsCrazySkills[x] || 0) + 1;
    });

    let academyObject = Object.entries(countsAcademy);
    let hobbyObject = Object.entries(countsHobby);
    let skillsObject = Object.entries(countsSkills);
    let crazySkillsObject = Object.entries(countsCrazySkills);

    const collapsibleBody = document.getElementsByClassName('tags-hook');
    for (let i = 0; i < collapsibleBody.length; i++) {
      collapsibleBody[i].innerHTML = '';
    }

    for (let i = 0; i < academyObject.length; i++) {
      const h1 = document.createElement('a');

      h1.textContent = academyObject[i][0] + ' ' + '(' + academyObject[i][1] + ')' + ', ';
    
      if (academyObject[i][1] > 10) {

        h1.setAttribute('class', 'tag_el  big_tag');
      } else if (academyObject[i][1] > 5) {

        h1.setAttribute('class', 'tag_el medium_tag');
      } else {

        h1.setAttribute('class', 'tag_el small_tag');
      }

      collapsibleBody[0].appendChild(h1);
    }
    for (let i = 0; i < hobbyObject.length; i++) {
      const h1 = document.createElement('a');

      h1.textContent = hobbyObject[i][0] + ' ' + '(' + hobbyObject[i][1] + ')' + ', ';
      if (hobbyObject[i][1] > 10) {
        h1.setAttribute('class', 'tag_el big_tag');
      } else if (hobbyObject[i][1] > 5) {
        h1.setAttribute('class', 'tag_el medium_tag');
      } else {
        h1.setAttribute('class', 'tag_el small_tag');
      }

      collapsibleBody[1].appendChild(h1);
    }
    for (let i = 0; i < skillsObject.length; i++) {
      const h1 = document.createElement('a');

      h1.textContent = skillsObject[i][0] + ' ' + '(' + skillsObject[i][1] + ')' + ', ';
      if (skillsObject[i][1] > 10) {
        h1.setAttribute('class', 'tag_el big_tag');
      } else if (skillsObject[i][1] > 5) {
        h1.setAttribute('class', 'tag_el medium_tag');
      } else {
        h1.setAttribute('class', 'tag_el small_tag');
      }

      collapsibleBody[2].appendChild(h1);
    }
    for (let i = 0; i < crazySkillsObject.length; i++) {
      const h1 = document.createElement('a');

      h1.textContent = crazySkillsObject[i][0] + ' ' + '(' + crazySkillsObject[i][1] + ')' + ', ';
      if (crazySkillsObject[i][1] > 10) {
        h1.setAttribute('class', 'tag_el big_tag');
      } else if (crazySkillsObject[i][1] > 5) {
        h1.setAttribute('class', 'tag_el medium_tag');
      } else {
        h1.setAttribute('class', 'tag_el small_tag');
      }

      collapsibleBody[3].appendChild(h1);
    }
  }
  // guideList.innerHTML = html;
}