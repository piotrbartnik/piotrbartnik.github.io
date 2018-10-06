const textInput = document.getElementById("input");

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
