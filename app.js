function titleCase(str) {
  // Array for holding capitalized strings
  var capArray = [];

  // Turn string (str) into an array - split(' ')
  var arrayStr = str.split(' ');

  // Loop throug each word in the arrayStr
  for (var i = 0; i < arrayStr.length; i++){
    // 1) .substring(0,1).toUpperCase() - The substring() method extracts the
    //    characters from a string, between two specified indices, and returns
    //    the new sub string. The toUpperCase() method converts a string to
    //    uppercase letters
    // 2) .slice(1).toLowerCase() - The slice() method returns the selected
    //    elements in an array, as a new array object. The toLowerCase() method
    //    converts a string to lowercase letters.
    // 3) capArray.push - append data to the end of an array
    capArray.push(arrayStr[i].substring(0,1).toUpperCase() + arrayStr[i].slice(1).toLowerCase());
  }

  // Convert array back to string with join() method
  str = capArray.join(' ');

  return str;
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));

//Research Links
//Trying to capitalize
//http://stackoverflow.com/questions/7743582/trying-to-capitalize-the-first-character-in-array-of-strings-why-this-is-not-wo

//first letter of a string uppercase in JavaScript
//http://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript


//Implementation Links
//JavaScript String substring() Method
//http://www.w3schools.com/jsref/jsref_substring.asp

//JavaScript String toUpperCase() Method
//http://www.w3schools.com/jsref/jsref_touppercase.asp

//JavaScript Array slice() Method
//http://www.w3schools.com/jsref/jsref_slice_array.asp

//JavaScript String toLowerCase() Method
//http://www.w3schools.com/jsref/jsref_tolowercase.asp

//Manipulate Arrays With push
//https://www.freecodecamp.com/challenges/manipulate-arrays-with-push
