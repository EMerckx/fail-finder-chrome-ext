var text = document.getElementsByTagName('html')[0].innerHTML;

var failPattern = /Failures:\s[1-9]/;
var errorPattern = /Errors:\s[1-9]/;

if(failPattern.test(text) || errorPattern.test(text))
  window.alert("Failures found...");
else {
  window.alert("All succeeded!");
}
