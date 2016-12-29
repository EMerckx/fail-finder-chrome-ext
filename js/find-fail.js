// Get the haystack
var text = document.getElementsByTagName('html')[0].innerHTML;

// RegExp patterns, which form the needle
var failPattern = /Failures:\s[1-9]/;
var errorPattern = /Errors:\s[1-9]/;

// check the document
var result = failPattern.test(text) || errorPattern.test(text);
if(result)
  console.log("Failures found...");
else {
  console.log("All succeeded!");
}

// return result for the callback
result
