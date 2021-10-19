const urlEncode = function(text) 
{
  var newText = [];
  text = text.trim();

  for (var i = 0; i < text.length; i++) 
  {
    if (text.charAt(i) === " ") // N.B:- Use 'charAt()', and NOT 'charAt[i]'!
    {
      newText = text.replaceAll(" ", "%20");
    }
  }
  return newText
};


console.log(urlEncode("Lighthouse Labs")); 
console.log(urlEncode(" Lighthouse Labs ")); 
console.log(urlEncode("blue is greener than purple for sure")); 


