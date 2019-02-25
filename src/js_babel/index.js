"use strict";

var userPrintString = function userPrintString(data, str, arr, finalData) {
  if (data === str) {
    arr.push(finalData);
  }
};

var userPrintArray = function userPrintArray(data, str, arr, finalData) {
  for (var i = 0; i < data.length; i++) {
    if (data[i].trim() === str) {
      arr.push(finalData);
    }
  }
};

var userPrint = function userPrint(data, str) {
  var chosenPerson = [];
  var chosenUsersList = document.getElementById('chosenUsersList');

  if (data.length) {
    data.forEach(function (doc) {
      var user = doc.data();
      userPrintString(user.academy, str, chosenPerson, user.name);
      userPrintArray(user.hobby, str, chosenPerson, user.name);
      userPrintArray(user.skills, str, chosenPerson, user.name);
      userPrintArray(user.crazy_skills, str, chosenPerson, user.name);
    });
  }

  chosenUsersList.innerHTML = '';

  for (var i = 0; i < chosenPerson.length; i++) {
    chosenUsersList.innerHTML += "<div class=\"person\">".concat(chosenPerson[i], "</div>");
  }
};

var userColections = function userColections(data) {
  var academyArray = [];
  var countsAcademy = {};
  var hobbyArray = [];
  var countsHobby = {};
  var skillsArray = [];
  var countsSkills = {};
  var crazySkillsArray = [];
  var countsCrazySkills = {}; // check if user is logged in

  if (data.length) {
    var html = '';
    data.forEach(function (doc) {
      var user = doc.data();

      if (user.academy) {
        academyArray.push(user.academy);
      }

      if (user.hobby) {
        for (var i = 0; i < user.hobby.length; i++) {
          hobbyArray.push(user.hobby[i].trim());
        }
      }

      if (user.skills) {
        for (var _i = 0; _i < user.skills.length; _i++) {
          skillsArray.push(user.skills[_i].trim());
        }
      }

      if (user.crazy_skills) {
        for (var _i2 = 0; _i2 < user.crazy_skills.length; _i2++) {
          crazySkillsArray.push(user.crazy_skills[_i2].trim());
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
    var academyObject = Object.entries(countsAcademy);
    var hobbyObject = Object.entries(countsHobby);
    var skillsObject = Object.entries(countsSkills);
    var crazySkillsObject = Object.entries(countsCrazySkills);
    var collapsibleBody = document.getElementsByClassName('tags-hook');

    for (var i = 0; i < collapsibleBody.length; i++) {
      collapsibleBody[i].innerHTML = '';
    }

    for (var _i3 = 0; _i3 < academyObject.length; _i3++) {
      var h1 = document.createElement('a');
      h1.textContent = academyObject[_i3][0] + ' ' + '(' + academyObject[_i3][1] + ')' + ', ';

      if (academyObject[_i3][1] > 10) {
        h1.setAttribute('class', 'tag_el  big_tag');
      } else if (academyObject[_i3][1] > 5) {
        h1.setAttribute('class', 'tag_el medium_tag');
      } else {
        h1.setAttribute('class', 'tag_el small_tag');
      }

      collapsibleBody[0].appendChild(h1);
    }

    for (var _i4 = 0; _i4 < hobbyObject.length; _i4++) {
      var _h = document.createElement('a');

      _h.textContent = hobbyObject[_i4][0] + ' ' + '(' + hobbyObject[_i4][1] + ')' + ', ';

      if (hobbyObject[_i4][1] > 10) {
        _h.setAttribute('class', 'tag_el big_tag');
      } else if (hobbyObject[_i4][1] > 5) {
        _h.setAttribute('class', 'tag_el medium_tag');
      } else {
        _h.setAttribute('class', 'tag_el small_tag');
      }

      collapsibleBody[1].appendChild(_h);
    }

    for (var _i5 = 0; _i5 < skillsObject.length; _i5++) {
      var _h2 = document.createElement('a');

      _h2.textContent = skillsObject[_i5][0] + ' ' + '(' + skillsObject[_i5][1] + ')' + ', ';

      if (skillsObject[_i5][1] > 10) {
        _h2.setAttribute('class', 'tag_el big_tag');
      } else if (skillsObject[_i5][1] > 5) {
        _h2.setAttribute('class', 'tag_el medium_tag');
      } else {
        _h2.setAttribute('class', 'tag_el small_tag');
      }

      collapsibleBody[2].appendChild(_h2);
    }

    for (var _i6 = 0; _i6 < crazySkillsObject.length; _i6++) {
      var _h3 = document.createElement('a');

      _h3.textContent = crazySkillsObject[_i6][0] + ' ' + '(' + crazySkillsObject[_i6][1] + ')' + ', ';

      if (crazySkillsObject[_i6][1] > 10) {
        _h3.setAttribute('class', 'tag_el big_tag');
      } else if (crazySkillsObject[_i6][1] > 5) {
        _h3.setAttribute('class', 'tag_el medium_tag');
      } else {
        _h3.setAttribute('class', 'tag_el small_tag');
      }

      collapsibleBody[3].appendChild(_h3);
    }
  } // guideList.innerHTML = html;

};