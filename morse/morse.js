const textInput = document.getElementById("input");
const btn = document.getElementById("btn");
const textOutput = document.getElementById("output");

function type(text, time) {
  for (let i = 0; i < text.length; i++) {
    let j = i;
    setTimeout(
      (function(x) {
        return function() {
          textInput.value += text.charAt(i);
        };
      })(i),
      time * i
    );
  } 
}



type("Type text to translate here", 100);


textInput.addEventListener('keyup', function() {
  textInput.style.height = "5px";
  textInput.style.height = (textInput.scrollHeight)+"px";
  console.log('x')
})

function auto_grow(element) {
  element.style.height = "5px";
  element.style.height = (element.scrollHeight)+"px";
  console.log('x')
}

