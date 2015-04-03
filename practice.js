//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

var isTyler = function(name) {
  if (name === "Tyler") {
    return true;
  } 
  else {
    return false;
  }
}


//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


var getName = function() {
  var name = prompt("What is your name?");
  return name;
}


//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

var welcome = function() {
  var name = getName();
  alert("Welcome, " + name)
}


//Next problem




//What is the difference between arguments and parameters?

Arguments are used when invoking a function, and parameters are used by the function to pass argument values to the function.

example of argument use:
myfunction(first, second);

Example of parameter use:

var myfunction = function(first, second) {
  return first + second;
}

//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


Falsy values in JavaScript are: NaN, null, undefined, '', 0, and false.

An example of how to check if something is falsy is:

var myName = function(name) {
  if (!name) {
    return "Is falsy";
  }
  else {
    return "Is truthy";
  }
}


//Next Problem



//Create a function called myName that returns your name

var myName = function(name) {
  return name;
}

//Now save the function definition of myName into a new variable called newMyName

var newMyName = myName;

//Now alert the result of invoking newMyName

var newMyName = myName;
var myNameDef = function() {
  alert(newMyName);
}


//Create a function called outerFn which returns an anonymous function which returns your name.

var outerFn = function() {
  return function() {
    return "Rick";
  }
}

//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();

//Now invoke innerFn.




