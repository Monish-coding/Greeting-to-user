var name = prompt("what's your name ?");
function greeting() {
  var greetings = ("hello " + name);
  document.getElementById('h1').innerHTML = greetings;
}
greeting();