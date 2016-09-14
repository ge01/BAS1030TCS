function titleCase(str) {
  return str;
}

titleCase("I'm a little tea pot");

var myArray = ["I'm", "a", "little", "tea", "pot"];
//console.log(myArray[2].toUpperCase() + myArray[2].substring(1));

//console.log(myArray[2].substring(1).toUpperCase());
//ITTLE

//console.log(myArray[2].substring(1,6));
//console.log(myArray[2].substring(1));
//ittle

//console.log(myArray[2].substring(0,1));
//l

//console.log(myArray[2].substring(0,1).toUpperCase());
//L

//console.log("little".substring(0,1).toUpperCase());
//L

//console.log("little".toUpperCase().slice(1));
//ITTLE

//console.log("little".substring(0,1).toUpperCase().toLowerCase().slice(1));
// This didn't work

console.log("little".substring(0,1).toUpperCase());
console.log("little".substring(1,6).toLowerCase());
console.log("little".slice(1).toLowerCase());
