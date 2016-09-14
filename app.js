function titleCase(str) {
  var capArray = [];
  // Turn string (str) into an array - split(' ')
  var arrayStr = str.split(' ');
  console.log(arrayStr);

  // Loop throug each word in the array
  for (var i = 0; i < arrayStr.length; i++){
    console.log(arrayStr[i].substring(0,1).toUpperCase() + arrayStr[i].slice(1).toLowerCase());
    capArray.push(arrayStr[i].substring(0,1).toUpperCase() + arrayStr[i].slice(1).toLowerCase());

  }
  console.log(capArray);
  str = capArray.join(' ');

  return str;
}

console.log(titleCase("I'm a little tea pot"));

//var myArray = ["I'm", "a", "little", "tea", "pot"];

//console.log("little".substring(0,1).toUpperCase());
//console.log("little".substring(1,6).toLowerCase());
//console.log("little".slice(1).toLowerCase());
