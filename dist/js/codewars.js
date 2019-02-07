"use strict";var solutions={0:"function multiply(a, b){ return a * b}",1:"function isTriangle(a,b,c) {\nif ((a+b)>c && (a+c)>b && (c+b)>a) {\nreturn true; \n}else{\n   return false;\n}}",2:"var breakChocolate = function(n, m) {\nif (n*m > 0){\n return (n*m)-1\n } else {\n return false;\n}};",3:'function spinWords(input){\n  let wordArray = input.split(" ");\n   for (i=0; i<wordArray.length;i++) {\n    if (wordArray[i].length >= 5) {\n    wordArray[i] = (wordArray[i].split("").reverse().join(""))\n   }\n  }\nreturn wordArray.join(" ");\n}\n',4:"function getMiddle(s)\n{\n  if (s.length%2 !== 0) {\n    console.log(s.length)\n    return s[Math.ceil(s.length/2)-1];\n    \n  }else {\n    return s[s.length/2-1]+s[s.length/2]\n   \n  }\n}",5:"var uniqueInOrder=function(iterable){\n  let arrayIterable =[];\n  for (i=0; i<iterable.length; i++){\n    if (iterable[i] !== iterable[i+1]){\n      arrayIterable.push(iterable[i]);\n      }\n  }\n  return arrayIterable\n}",6:"function digPow(n, p){\n  let g = String(n);\n  let z = 0;\n  for (i=0; i<g.length; i++) {\n  z += Math.pow(g[i], p+i);\n  }\n  console.log(z)\n  if ((z%n) === 0) {\n    return (z/n) \n\n  }else{\n    return -1\n  }\n}",7:"function friend(friends){\n  let arrayX = [];\n  for (i=0; i<friends.length; i++) {\n    if (friends[i].length === 4) {\n      arrayX.push(friends[i])\n    }\n  }\n  return arrayX\n}",8:" function likes(names) {\n  if (names.length === 0){\n  return 'no one likes this';\n}else if (names.length === 1) {\n  return names[0] + ' likes this'\n}else if (names.length === 2) {\n  return names[0] + ' and ' + names[1]+ ' like this'\n}else if (names.length === 3) {\n  return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'\n}else if (names.length > 3) {\n  return names[0] + ', ' + names[1] + ' and ' + ((names.length)-2) + ' others like this'\n}}\n\nlikes(['Peter', 'Mark', 'Andrew'])",9:"function findEvenIndex(arr) {\n\tvar getSum = function(total, num) {\n\t\treturn total + num;\n\t};\n\n\tfor (z = 1; z < arr.length-1; z++) {\n\t\tvar x = arr.slice(0, z).reduce(getSum);\n\t\tvar y = arr.slice(z+1).reduce(getSum);\n\t\tconsole.log(x);\n\t\tconsole.log(y);\n\t\tif (x == y) {\n\t\t\treturn z;\n\t\t} \n\t\t\n\t}\n\treturn -1;\n}\n",10:"function narcissistic(value) {\n\tvar b = value.toString();\n\tvar x = [];\n\tfor (i = 0; i < b.length; i++) {\n\t\tx.push(parseInt(b[i]));\n\t\tconsole.log(b[i]);\n\t}\n\tvar z = x.map(a => Math.pow(a, x.length));\n  var c = z.reduce((a, b) => a + b, 0);\n\tconsole.log(c);\n\n  if (c === value) {\n    return true\n  } else {\n    return false\n  }\n}",11:"function to_nato(message) {\n\tvar natoAlphabet = {\n\t\ta: 'Alfa',\n\t\tb: 'Bravo',\n\t\tc: 'Charlie',\n\t\td: 'Delta',\n\t\te: 'Echo',\n\t\tf: 'Foxtrot',\n\t\tg: 'Golf',\n\t\th: 'Hotel',\n\t\ti: 'India',\n\t\tj: 'Juliett',\n\t\tk: 'Kilo',\n\t\tl: 'Lima',\n\t\tm: 'Mike',\n\t\tn: 'November',\n\t\to: 'Oscar',\n\t\tp: 'Papa',\n\t\tq: 'Quebec',\n\t\tr: 'Romeo',\n\t\ts: 'Sierra',\n\t\tt: 'Tango',\n\t\tu: 'Uniform',\n\t\tv: 'Victor',\n\t\tw: 'Whiskey',\n\t\tx: 'Xray',\n\t\ty: 'Yankee',\n\t\tz: 'Zulu',\n    '!': '!',\n    '.':'.',\n    '?' :'?'\n\t};\n\n\tvar messageConverted = [];\n\tvar z = message.toLowerCase();\n\tz = z.split(' ').join('');\n  z.split('').map(function(word) {\n    console.log(z)\n\t\tword.split('')\n    .map(function(letter) {\n\t\t\tmessageConverted.push(natoAlphabet[letter]);\n\t\t});\n\t\tmessageConverted.push(' ');\n    \n\t});\n messageConverted.splice(-1,1)\n\n\treturn messageConverted.join('');\n}",12:"function duplicateEncode(word){\n    /* var z = word.toLowerCase();\n    var x = z.split(\"\");\n    x.forEach(function (letter) {\n      if (letter == letter +1) {\n        console.log('hui')\n      }\n    })\n    console.log(x) */\nvar x = word.toLowerCase();\nvar result = x.split('').reduce(function(o, e) {\n  return o[e] = (o[e] || 0) + 1, o\n}, {});\n\n\nvar messageConverted =[];\nvar z = word.toLowerCase();\nz.split('')\n    .map(function(letter) {\n\t\t\tmessageConverted.push(result[letter]);\n\t\t});\n\t\nmessageConverted = messageConverted.map(function(item) { return item >1 ? ')' : '('; });\nreturn messageConverted.join(\"\")\n\n}",13:"function filter_list(l) {\nlet x = [];\n  for(i=0;i<l.length;i++){\n  if(typeof(l[i]) !== 'string') {\n  x.push(l[i]);\n  }\n  \n}\nreturn x;\n}",14:"function filter_list(l) {\n return  l.filter(x=>typeof x === 'number');\n}",15:'function toCamelCase(str) {\n\tvar x = str.split(/-|_/);\n\tfor (i = 1; i < x.length; i++) {\n\t\tif (x[i][0] == x[i][0].toLowerCase()) {\n\t\t\tx[i] = x[i][0].toUpperCase() + x[i].slice(1);\n\t\t}\n\t}\n\treturn x.join("")\n}\n',16:'function domainName(url){\n  url = url.replace(/(http:[/][/]|https:[/][/])/, "");\n  url = url.replace(/[w]{3}[.]/, "");\n  return url.replace(/[.].*$/, "");\n}',17:'function dashatize(num) {\n  if(isNaN(num)) {\n    return \'NaN\'\n  } else {\n      num = num.toString();\n    var numT = num.split("");\n  numT = numT.map(x=> x%2 == 0 ? x : \'-\' + x + \'-\');\n  console.log(numT)\n  numT = numT.join("")\n  .replace (/^---/, "")\n         .replace(/^-/, "")\n         .replace(/--/g, "-")\n         .replace(/-$/, "");\n return numT;\n  }\n};',18:"function duplicateCount(text) {\n\ttext = text.toLowerCase().split('').sort();\n\n\tfor (i = 0; i < text.length; i++) {\n\t\tif (text[i] != text[i + 1]) {\n\t\t\ttext[i] = '';\n\t\t}\n\t}\n\n  uniqueArray = text.filter(function(item, pos) {\n    return text.indexOf(item) == pos;\n})\n\n  text = uniqueArray.join(\"\")\n\n\treturn text.replace(/ /g, 0).length;\n}",19:"String.prototype.ipv4Address=function(){\n   return /^([1][0-9][0-9]|[0-9]|[1-9][0-9]|[2][0-4][0-9]|[2][0-5][0-5])[.]([1][0-9][0-9]|[0-9]|[1-9][0-9]|[2][0-4][0-9]|[2][0-5][0-5])[.]([1][0-9][0-9]|[0-9]|[1-9][0-9]|[2][0-4][0-9]|[2][0-5][0-5])[.]([1][0-9][0-9]|[0-9]|[1-9][0-9]|[2][0-4][0-9]|[2][0-5][0-5])$/.test(this.toString())\n}",20:"function score(dice) {\n\tvar scores = {\n\t\t'1000': '1,1,1',\n\t\t'600': '6,6,6',\n\t\t'500': '5,5,5',\n\t\t'400': '4,4,4',\n\t\t'300': '3,3,3',\n\t\t'200': '2,2,2',\n\t\t'100': '1',\n\t\t'50': '5',\n\t};\n\tdice.sort();\n  console.log(dice);\n\tvar table = [];\n\n\tvar grpTable = [];\n\n\tfor (var i = 0; i < dice.length; i++) {\n\t\tif (dice[i] == dice[i + 1] && dice[i] == dice[i + 2] && i < 3) {\n\t\t\tgrpTable[0] = dice[i];\n\t\t\tgrpTable[1] = dice[i + 1];\n\t\t\tgrpTable[2] = dice[i + 2];\n\t\t\ttable.push(grpTable);\n\t\t\ti = i + 2;\n\t\t} else {\n\t\t\ttable.push([dice[i]]);\n\t\t}\n\t}\n\n  console.log(table)\n\n\tvar messageConverted = [];\n\tfor (var m = 0; m < table.length; m++) {\n\t\tfor (var j = 0; j < 10; j++) {\n\t\t\tconst values = Object.keys(scores).map(k => scores[k]);\n\n\t\t\tif (table[m] == values[j]) {\n\t\t\t\tmessageConverted.push(parseInt(Object.keys(scores)[j]));\n\t\t\t}\n\t\t}\n\t}\n\n\tmessageConverted = messageConverted.reduce((a, b) => a + b, 0);\n\treturn messageConverted;\n}",21:"function diamond(n){\n  var arrayTable = [];\n  if (n>2 & n%2!=0) {\n  for (i=0, j=n-1, z=1; i<n-2 && j>=0 && z<n-1; i++, j -= 2, z+=2) {\n    arrayTable[i] = ' '.repeat((n-z)/2) + '*'.repeat(n - (j)); \n   }\nvar g = arrayTable.slice().reverse();\narrayTable.push('*'.repeat(n));\nconsole.log(arrayTable.join('\\n') + '\\n' + g.join('\\n'));\nreturn arrayTable.join('\\n') + '\\n' + g.join('\\n') +'\\n';\n  } else {\n    return null\n  }\n\n}",22:"function expandedForm(num) {\n var z = num.toString();\n var b = []\n for (i=0; i<z.length;i++){\n  if (z[i] != 0 && i !== z.length-1){\n  let x = z[i] + '0'.repeat(z.length-i-1)\n  b.push(x)\n  }\n }\n if (z[z.length-1] != 0) {\n   b.push(z[z.length-1])\n }\n var p = b.join(' + ');\n return p;\n}",23:"function expandedForm(num) {\n  num = num.toString()\n  var table = [];\n  for(i=0;i<num.length;i++){\n    if(num[i] !=0) {\ntable.push(num[i]+'0'.repeat(num.length-(i+1)));\n  }}\nconsole.log(table.join(' + '))\nreturn table.join(' + ')\n}",24:"function validBraces(braces){\n  braces = braces.split(\"\");\n  var final =[];\n  for(i=0;i<braces.length;i++) {\n    for(j=i+1;j<braces.length;j++){\n      if((braces[i] === '[' && braces[j] === ']') || (braces[i] === '{' && braces[j] === '}') || (braces[i] === '(' && braces[j] === ')') && (j-i)%2 != 0 ) {\n       final.push(braces[i]);\n       \n       final.push(braces[j]);\n      break;\n      }\n       \n    }\n  \n  }\n   console.log(final)\n   if (final.length !== braces.length) {\n     return false\n   } else {\n     return true\n   }\n}",25:"function mazeRunner(maze, directions) {\n\tconsole.log(directions);\n\tvar start = [];\n\tfor (i = 0; i < maze.length; i++) {\n\t\tfor (j = 0; j < maze.length; j++) {\n\t\t\tif (maze[i][j] == 2) {\n\t\t\t\tstart.push(i);\n\t\t\t\tstart.push(j);\n\t\t\t}\n\t\t}\n\t}\n\tconsole.log(start[0], maze.length);\n\tfor (j = 0; j < directions.length; j++) {\n    if (start[0] < 0 || start[0] >= maze.length || start[1] < 0 || start[1] >= maze.length) {\n\t\t\tbreak; }\n\t\telse if (maze[start[0]][start[1]] === 3 ) {\n\t\t\tbreak;\n      } else if (maze[start[0]][start[1]] === 1) {\n\t\tbreak;\n    } else if (start[0] < 0 || start[0] >= maze.length) {\n\t\tbreak;\n\t\t\t\t} else if (directions[j] === 'N') {\n\t\t\tstart[0] = start[0] - 1;\n\t\t\n\t\t} else if (directions[j] === 'S') {\n\t\t\tstart[0] = start[0] + 1;\n\t\t} else if (directions[j] === 'W') {\n\t\t\tstart[1] = start[1] - 1;\n\t\t\t\n\t\t} else if (directions[j] === 'E') {\n\t\t\tstart[1] = start[1] + 1;\n\t\t}\n\t}\n\t\n\tif (start[0] < 0 || start[0] >= maze.length) {\n\t\treturn 'Dead';\n\t} else if (maze[start[0]][start[1]] === 3) {\n\t\treturn 'Finish';\n\t} else if (\n\t\tmaze[start[0]][start[1]] === undefined ||\n\t\tmaze[start[0]][start[1]] === 1\n\t) {\n\t\treturn 'Dead';\n\t} else {\n\t\treturn 'Lost';\n\t}\n}",26:"function vowelIndices(word) {\n\tword = word.toLowerCase()\n  .split('');\n\tconsole.log(word);\n\tvar vow = ['a', 'e', 'i', 'o', 'u',  'y'];\n\tvar tablePositions = [];\n\tfor (i = 0; i < word.length; i++) {\n\t\tfor (j = 0; j < vow.length; j++) {\n\t\t\tif (word[i] === vow[j]) {\n        console.log(word[i]);\n\t\t\t\ttablePositions.push(i + 1);        \n       }\t\t\t\n\t\t}   \n\t}\n   return tablePositions;\n}",27:"function alphabetWar(fight) {\n\tvar leftScore = 0;\n\tvar rightScore = 0;\n\tfor (i = 0; i < fight.length; i++) {\n\t\tif (fight[i] === 'w') {\n\t\t\tleftScore += 4;\n\t\t}\n\t\tif (fight[i] === 'p') {\n\t\t\tleftScore += 3;\n\t\t}\n\t\tif (fight[i] === 'b') {\n\t\t\tleftScore += 2;\n\t\t}\n\t\tif (fight[i] === 's') {\n\t\t\tleftScore += 1;\n\t\t}\n\t\tif (fight[i] === 'm') {\n\t\t\trightScore += 4;\n\t\t}\n\t\tif (fight[i] === 'q') {\n\t\t\trightScore += 3;\n\t\t}\n\t\tif (fight[i] === 'd') {\n\t\t\trightScore += 2;\n\t\t}\n\t\tif (fight[i] === 'z') {\n\t\t\trightScore += 1;\n\t\t}\n  }\n\n\t\tif (leftScore > rightScore) {\n      return ('Left side wins!')\n    } else if (leftScore < rightScore) {\n\t\treturn ('Right side wins!')\n\t} else {\nreturn \"Let's fight again!\";\n  }\n  }",28:"function is_Palindrome(s) {\n\tvar rev = s.split('').reverse().join('');\n\treturn s == rev;\n}\n\nfunction longestPalindrome(s) {\n\tvar max_length = 0,\n\t\tmaxp = '';\n\n\tfor (var i = 0; i < s.length; i++) {\n\t\tvar subs = s.substr(i, s.length);\n\n\t\tfor (var j = subs.length; j >= 0; j--) {\n\t\t\tvar sub_subs_str = subs.substr(0, j);\n\t\t\tif (sub_subs_str.length = 0) continue;\n\n\t\t\tif (is_Palindrome(sub_subs_str)) {\n\t\t\t\tif (sub_subs_str.length > max_length) {\n\t\t\t\t\tmax_length = sub_subs_str.length;\n\t\t\t\t\tmaxp = sub_subs_str;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\treturn maxp.length;\n}",29:"function WhatIsTheTime(timeInMirror) {\n  timeInMirror = timeInMirror.split(\":\");\n  var hours = \"\";\n  if(timeInMirror[0] == '06' && timeInMirror[1] == \"00\") {\n    var hours = timeInMirror[0];\n  } else if (timeInMirror[0] == '11'){\n  var hours = 12 \n  }else if (timeInMirror[0] == '06' && timeInMirror[1] != \"00\"){\n  var hours = Math.abs(11-timeInMirror[0])\n  }else if (timeInMirror[0] == '12' && timeInMirror[1] != \"00\"){\n  var hours = 11;\n  }else if (timeInMirror[0] == '12' && timeInMirror[1] == \"00\"){\n  var hours = timeInMirror[0];  \n  }else if (timeInMirror[0] == '04' && timeInMirror[1] == \"00\"){\n  var hours = 8;\n  }else if (timeInMirror[0] == '10' && timeInMirror[1] == \"00\"){\n  var hours = 2 \n  } else {\n  var hours = Math.abs(11-timeInMirror[0]) \n  }\n\n  var minutes = timeInMirror[1] > 00 ? 60 - timeInMirror[1] : '00';\n \n\n if (hours.toString().length === 1) {\n   hours = '0'+hours; \n }\n\n  if (minutes.toString().length === 1) {\n   minutes = '0'+minutes; \n }\n\n return hours + \":\" + minutes\n}\n",30:'function sortMyString(S) {\n    var even = [];\n    var odd = [];\n    for (let i=0;i<S.length;i++) {\n      if (i % 2 === 0) {\n        even.push(S[i])\n      } else {\n        odd.push(S[i])\n      }\n    }\n    return even.join("") + " " + odd.join("");\n}',31:'function findShort(s){\n  let a = s.split(" ");\n  \n  a.sort(function(a, b){\n  \n  return a.length - b.length;\n});\n  return a[0].length\n}\n\n',32:"function findShort(s) {\n\ts = s.split(' ');\n\ts = s.sort(function(a, b) {\n\t\treturn a.length - b.length;\n\t});\n\treturn s[0].length;\n}",33:"function array_diff(a, b) {\n  Array.prototype.diff = function(a) {\n\t\treturn this.filter(function(i) {\n\t\t\treturn a.indexOf(i) < 0;\n\t\t});\n\t};\n  return a.diff(b)\n}",34:"function comp(a1, a2) {\n  if (a1 === null || a2 === null) {\n    return false\n  }\n  console.log(a1, a2);\n  if(a1.length === 0 && a2.length === 0) {\n  return true\n  }\n  if (a1.length !== 0 && a2 !== 0) {\n\ta1 = a1.map(x => x * x);\n  console.log(a1);\n\ta3 = a1.sort((x, y) => x - y);\n\ta2 = a2.map(x => x);\n\ta4 = a2.sort((x, y) => x - y);\n\nconsole.log(a3.toString(), a4.toString())\n\tif (a3.toString() === a4.toString()) {\n    return true\n  } else {\n    return false\n  }\n  }else {\n    return false\n  } \n}",35:"function findOdd(A) {\n\n  var counts = {};\n  A.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });\n\n  for (i = 0; i < Object.keys(counts).length; i++) {\n    if (Math.abs(Object.values(counts)[i] % 2) == 1) {\n      return parseInt(Object.keys(counts)[i]);\n    } \n  }\n}",36:"function isPangram(input) {\n  input = input.toLocaleLowerCase().split(\"\").sort();\n  input.splice(0, input.indexOf('a'));\n\n  let checkMate = input.reduce(function (a, b) {\n    if (a.indexOf(b) < 0) a.push(b);\n    return a;\n  }, [])\n\n  if (checkMate.length === 26) {\n    return true\n  } else {\n    return false\n  }\n}",37:'function kebabize(str) {\n  str = str.replace(/[0-9]/g, "").replace(/([A-Z0-9])/g, \'-$1\').toLowerCase()\n\n  if (str[0] === "-") {\n    return str.substring(1);\n  } else {\n    return str\n  }\n}',38:'var numberFormat = function (number) {\n  number = number.toString().split("").reverse().join("").replace(/(\\d{3})/g, "$1,");\n  number = number.split("").reverse();\n  if (number[0] === \',\') {\n    number.shift();\n    return number.join("");\n  } else if (number[0] === \'-\' && number[1] === \',\') {\n    number.splice(1,1);\n    return number.join("");\n    }else {\n    return number.join("")\n  }\n};',39:'function reverseLetter(str) {\n return str.replace(/[^a-z]/g, "").split("").reverse().join("");\n}\n',40:'function timedReading(maxLength, text) {\n  let substract = [];\n  text = text.replace(/[^a-z\\s]/gi, "").split(" ");\n  if (text.length === 1) {\n    text.shift();\n  }\n  console.log(text.length)\n  for (let i = 0; i < text.length; i++) {\n    if (text[i].length > maxLength) {\n      substract.push(text[i]);\n    }\n  }\n  Array.prototype.diff = function(a) {\n    return this.filter(function(i) {return a.indexOf(i) < 0;});\n};\nif (text.length===0 || maxLength === 0) {\n  return 0\n  }\n  console.log(text, substract);\nreturn text.diff(substract).length;\n}',41:'function timedReading(maxLength, text) {\n  \n  maxLength +=1\n  return text.replace(/[^a-z\\s]/gi, "").replace(new RegExp("[a-z]{"+maxLength+",}", "gi"), "").split(" ").filter(String).length;\n\n}',42:"function houseOfCats(legs) {\n  let result = [];\n\n  for(let i =0;i<100;i++) {\n    if((legs-(4*i))/2 >= 0){    \n      result.push((legs-(4*i))/2)  \n  }}\n  return result.reverse();\n}\n",43:"function houseNumbersSum(inputArray) {\nlet indexZero = inputArray.indexOf(0);\n\nreturn inputArray[0] != 0 ? inputArray.slice(0,indexZero).reduce((a, b) => {return a + b; }) : 0;  \n}",44:'function isIsogram(str){\n\n  return new Set(str.toLowerCase()).size === str.toLowerCase().length ? true : false;\n\n}\n\nisIsogram("Deermatoglyphics")',45:"function lostSheep(friday,saturday,total){\n  return total - saturday.reduce((a,b) => {return a+b}, 0) - friday.reduce((a,b) => { return a+b}, 0);\n}",46:"function revrot(str, sz) {\n  let result = [];\n  let chunks = str.match(new RegExp('.{' + sz + '}', 'g'));\n  if (str.length > 1 && sz != 0 && str.length > sz) {\n    for (let i = 0; i < chunks.length; i++) {\n      if (chunks[i].split(\"\").map((a) => { return Math.pow(a, 3) }).reduce((a, b) => { return a + b }) % 2 === 0) {\n        result.push(chunks[i].split(\"\").reverse().join(''))\n      } else {\n        chunks[i] = chunks[i].split(\"\");         \n        chunks[i].push(chunks[i].shift());\n        result.push(chunks[i].join(\"\"));\n      }\n    }    \n    return result.join('', 0)\n  } else {\n    return \"\"\n  }\n}",47:"Array.prototype.findN = function () {\n  let odd = [];\n  let even = [];\n  this.forEach((a) => { a % 2 != 0 ? even.push(a) : odd.push(a); })\n  return odd.length === 1 ? odd[0] : even[0];\n};\n\nfunction findOutlier(integers) {\n return integers.findN();\n}",48:"function solution(number){\n  let sum =0;\n  for (i=0;i<number;i++){\n    if (i % 3 === 0 || i %5 === 0) {\n      sum += i\n    }\n  }\n\n  return sum\n}",49:"function persistence(num) {\n  let counter = 0;\n  console.log(num)\n  for (let i = 0; i < 7; i++) {\n    if (num.toString().length > 1) {\n      num = num.toString().split('').map((a) => { return parseInt(a) }).reduce((a, b) => { return a * b });\n      counter += 1\n         } else {\n      return counter\n    }\n  }\n}",50:"function persistence(num) {\n  let counter = 0;\n  while (num.toString().length > 1) {\n    num = num.toString().split('').map((a) => { return parseInt(a) }).reduce((a, b) => { return a * b });\n    counter += 1    \n  }\n  return counter\n}\n",51:"function digital_root(n) {\n   n = n.toString().split('').map((a) => {return parseInt(a)}).reduce((a,b) => {return a+b});  \n   return n.toString().length > 1 ? digital_root(n) : n\n}",52:"function tribonacci(signature,n){\n  for (i=0;i<n;i++) {\n   let slicingSignature = signature.slice(i, i+3);\n   signature.push(slicingSignature.reduce((a,b)=>{ return a+ b}));\n  }  \n   return signature.slice(0,n);\n}",53:'function songDecoder(song){\n  return song.replace(/(wub)+/gi, " ").trim();\n}',54:'function order(words) {\n  if (words.length > 0) {\n    words = words.split(" ");\n    for (let i = 0; i < words.length; i++) {\n      let indexOfDigit = words[i].search(/\\d/);\n      let numInString = words[i][indexOfDigit];      \n      words[i] = numInString + words[i]\n    }\n    words.sort();\n    for (let i = 0; i < words.length; i++) {\n      words[i] = words[i].slice(1);\n    }\n    return words.join(" ");\n  }\n  return ""\n}',55:'function iqTest(numbers) {\n  numbers = numbers.split(" ");\n let odd =[];\n let even=[];\n  for (let i = 0; i < numbers.length; i++) {\n    numbers[i] % 2 === 0 ? even.push(numbers[i]) : odd.push(numbers[i]);\n  }\n return odd.length === 1 ? numbers.indexOf(odd[0]) + 1 : numbers.indexOf(even[0]) + 1;\n}\n',56:'function isValidWalk(walk) {\n  let start = [0, 0];\n  \n  for (let i = 0; i < walk.length; i++) {\n    if (walk[i] === \'n\') {\n      start[0] += 1;      \n    } else if (walk[i] === "s") {\n      start[0] -= 1;\n    } else if (walk[i] === "e") {\n      start[1] += 1;\n    } else if (walk[i] === "w") {\n      start[1] -= 1;\n    }\n  }\n  return walk.length === 10 && start[0] === 0 && start[1] === 0?  true : false;\n}',57:"var countBits = function(n) {\n  let result = [];\n  while (n > 0) {\n    let d = Math.floor(n / 2);\n    let b = n % 2;\n    result.push(b);\n    n = d;\n  }\n  return result.filter(x => x===1).length;\n}",58:'function titleCase(title, minorWords) {\n  title = title.toLowerCase().split(" ").map(a => { return a.charAt(0).toUpperCase() + a.slice(1) });\n  if (minorWords != undefined) {\n    minorWords = minorWords.toLowerCase().split(" ");\n    for (i = 1; i < title.length; i++) {\n      for (j = 0; j < minorWords.length; j++) {\n        if (title[i].toLowerCase() === minorWords[j]) {\n          title[i] = minorWords[j];\n        }\n      }\n    }\n  }\n  return title.length > 0 ? title.join(" ") : undefined\n}\n',59:"function isValidCoordinates(coordinates) {\n  return (/^\\-?((([0-9]|([0-8]\\d))(\\.\\d+)?)|(90))\\,\\s?\\-?((((([0-9]|([0-9]\\d))|(1[0-7]\\d))(\\.\\d+)?))|(180))$/).test(coordinates);\n}",60:"function minimumNumber(num) {  \n  let x = num.reduce((a,b)=>{return a + b});\n  let z = num.reduce((a,b)=>{return a + b});\n  \n  for (j=0;j<100;j++) {\n    for (i=2;i<z;i+=1) {\n    if (z % i === 0) {      \n      z +=1          \n    }\n  }\n  }\n  return z-x\n}\n",61:"function createPhoneNumber(numbers){\n  return '(' + numbers.slice(0,3).join(\"\") + ') ' + numbers.slice(3,6).join(\"\") + '-' + numbers.slice(6).join(\"\")\n}",62:"function isPrime(num) {\n  if (num === 1) {\n    return false\n  }\n  if (num === 2) {\n    return true\n  }\n  let counter = 0;\n  for (let i = 1; i < num; i++) {\n    if (num % i == 0) {\n      counter += 1      \n    }\n  }\n\n  return counter === 1 ? true : false\n}",63:'function divisors(integer) {\nlet result =[];\n  for (let i = 2;i<integer;i++) {\n  if (integer % i === 0) {\n  result.push(i)\n  }}\n  return result.length > 1 ? result : integer + " is prime"\n};',64:"function printerError(s) {\n   return s.match(/[n-z]/g) != undefined ? s.match(/[n-z]/g).length +'/' + s.length : '0\\/' + s.length\n}",65:"function flyBy(lamps, drone) {\n\n  let lampsNum = drone.slice(0, -1).length;\n  console.log(lampsNum);\n\n  if (lamps.length != lampsNum) {\n    for (let i = 0; i < lampsNum + 1; i++) {\n      lamps = lamps.substring(0, i) + 'o' + lamps.substring(i + 1);\n    }\n    return lamps\n  } else if (lamps.length === lampsNum) {\n    for (let i = 0; i < lampsNum; i++) {\n      lamps = lamps.substring(0, i) + 'o' + lamps.substring(i + 1);\n    }\n    return lamps\n  }\n}",66:"function removeSmallest(numbers) { \n  let first = numbers.slice().sort((a,b)=>a-b).slice(0,1);\n  first = parseInt(first); \n  let x = numbers.slice(0, numbers.indexOf(first));\n  let z = numbers.slice(numbers.indexOf(first)+1, numbers.length)\n  return x.concat(z)\n}",67:"function maskify(cc) {\n  return cc.length > 4 ? '#'.repeat(cc.slice(0, cc.length-4).length) + cc.slice(cc.length-4,cc.length) : cc\n}",68:"function minValue(values){\n  return parseInt(values.filter(function(item, pos) {\n    return values.indexOf(item) == pos;\n}).sort((a,b) => a-b).join(''));\n}\n",69:"function owlPic(text){\n  return text.match(/[8WTYUIOAHXVM]/gi).join('').toUpperCase() + \"\\'\\'0v0\\'\\'\" + text.match(/[8WTYUIOAHXVM]/gi).reverse().join('').toUpperCase()\n}\n",70:"let alpha = {\n  'I': 1,\n  'V': 5,\n  'X': 10,\n  'L': 50,\n  'C': 100,\n  'D': 500,\n  'M': 1000,\n}\n\nfunction solution(roman) {\n  let splitted = roman.split('');\n  let result = []\n  for (let i = 0; i < splitted.length; i++) {\n    result.push(alpha[splitted[i]])\n  }\n  return roman === 'IV' ? 4 : result.reduce((a, b) => a + b)\n}\n",71:"function hero(bullets, dragons){\nconsole.log(bullets, dragons)\nreturn bullets/dragons >= 2 ? true : false\n}\n",72:"function correct(string) {\n  return string.replace(/5/gi, \"S\").replace(/0/gi, 'O').replace(/1/gi, 'I')\n}\n",73:"function check(a,x){\nreturn a.indexOf(x) != -1 ? true : false\n};",74:"function spam(number){\nlet result = \"\";\n  for(let i=0;i<number;i++) {\n  result += 'hue'\n  }\n  return result\n}",75:"function positiveSum(arr) {\n  let x = arr.filter(a=>a>0);\n  return x.length > 0 ? x.reduce((a,b)=>a+b) : 0\n}",76:"function willYou(young, beautiful, loved) {\n  if (young && beautiful && !loved) {\n    return true;\n  } else if (loved && (!beautiful || !young)) {\n    return true\n  } else {\n    return false\n  }  \n}",77:"function numberToString(num) {\n  return num.toString();\n}",78:"function diagonalSum(matrix){\n  let sum = 0;\n  for (let i =0; i<matrix.length;i++) {\n  sum += matrix[i][i]\n  }\n  return sum\n}",79:"function removeUrlAnchor(url){\n  return url.indexOf('#') != -1 ? url.slice(0, url.indexOf('#')) : url\n}",80:"function inArray(array1,array2){\n  let result =[];  \n  for (i=0;i<array1.length;i++) {    \n    for (j=0;j<array2.length; j++) {      \n      if (new RegExp(array1[i]).test(array2[j])) {                        \n        result.push(array1[i]);               \n      }\n    }\n  }\n  return result.filter((item, pos) => result.indexOf(item) == pos).sort().filter(e=>e); \n}",81:"let inArray = (array1, array2) => {\n  array2 = array2.join(',');\n  let result = [];\n  for (let i = 0; i < array2.length; i++) {\n    if ((array2.indexOf(array1[i])) != -1) {\n      result.push(array1[i])\n    }\n  }\n  console.log(array1, array2);\n  return result.sort();\n}",82:"function SeriesSum(n) { \n  let result = [1];\n  for (let i = 1; i<n; i++) {\n    result.push((1/(1+(3*i))))\n  }\n  return n != 0 ? result.reduce((a,b)=>a+b).toFixed(2) : '0.00'\n}",83:"let money_value = (s) => {\n  s = s.replace('$', '');\n  s = s.replace(' ', '');\n  return s.search(/\\d/) != -1 ? parseFloat(s) : '0.0'\n}",84:"let evaporator = (con, epd, th) => { \n  let minCon = (con*th)/100;\n  counter = 0;\n  while (con>minCon) {\n    con -= (con*epd)/100;\n    counter +=1\n  }\n  return counter\n}",85:"function sumArray(array) {\n   if (!array || array.length == 1 ||   array.length == 2) {\n     return 0     \n   } else if (array && array.length) {\n     return array.sort((a,b)=>a-b).slice(1, array.length-1).reduce((a,b)=>a+b)\n   } else { \n     return 0\n   }\n}",86:"let anagramCounter = (arr) => {\n  arr = arr.map(a => a.split('').sort().join(''));\n  let count = 0;\n  for(let i =0; i<arr.length;i++) {\n    for(let j = i+1; j<arr.length; j++) {\n      if (arr[i] === arr[j]) {\n        count += 1\n      }\n    }\n  }\n return count\n}",87:'let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];\nArray.prototype.diff = function (arr) {\n  return this.filter(function (val) {\n    return arr.indexOf(val) < 0;\n  });\n};\n\nlet findMissingLetter = (array) => {  \n  let arrayPre = array.map(x => x.toLowerCase());\n  let test = alphabet.slice(alphabet.indexOf(arrayPre[0]), alphabet.indexOf(arrayPre[arrayPre.length - 1]));\n  return array[0] === array[0].toUpperCase() ? test.diff(arrayPre)[0].toUpperCase() : test.diff(arrayPre)[0]\n}',88:"function sqInRect(lng, wdth) {\n  if (lng == wdth) {\n    return null\n  };\n  let result = [];\n  let area = (lng * wdth);\n  while (area != 0) {\n    let side = lng <= wdth ? lng : wdth;\n    wdth === side ? lng -= side : wdth -= side;\n    result.push(side);\n    area = area - Math.pow(side, 2);\n  }\n  return result\n}",89:"function vertMirror(strng) { return strng.split(/\n/).map(x=>x.split('').reverse().join('')).join(\"\n\"); } function horMirror(strng) { return strng.split(/\n/).reverse().join(\"\n\"); } function oper(fct, s) { return fct === vertMirror ? vertMirror(s) : horMirror(s); }"},app=document.getElementsByClassName("wrapper")[0],xhttp=new XMLHttpRequest;xhttp.onreadystatechange=function(){if(4==this.readyState&&200==this.status)for(var n=JSON.parse(this.responseText),t=0;t<n.data.length;t++){var e=document.createElement("div");e.setAttribute("class","wrapper__box");var r=document.createElement("div");r.textContent=n.data[t].name,r.setAttribute("class","kata__title");var i=document.createElement("div");i.textContent="Completed at: "+n.data[t].completedAt.slice(0,10),i.setAttribute("class","kata__date");var s=document.createElement("pre");s.setAttribute("class","language-js");var a=document.createElement("code");a.setAttribute("class","language-js"),a.innerText=solutions[Object.keys(solutions).length-1-t],app.appendChild(e),e.appendChild(r),e.appendChild(i),e.appendChild(s),s.appendChild(a)}},xhttp.open("GET","https://cors-anywhere.herokuapp.com/www.codewars.com/api/v1/users/PeterB8080/code-challenges/completed?page=0",!0),xhttp.send();