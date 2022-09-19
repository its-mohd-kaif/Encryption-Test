var arr = [];
function encrypt(params) {
  var value = document.getElementById("input").value;
  arr.push(value);
  var str = value.toString();

  var ans;
  for (let i = 0; i < str.length; i++) {
    console.log(charToInt(i));
  }
}

function charToInt(char) {
  const code = "a".charCodeAt(0);
  console.log(code);
  return char.charCodeAt(0) - code;
}
