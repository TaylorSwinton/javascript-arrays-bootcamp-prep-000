var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  var myArray = [1]
  myArray.unshift(element);
  
  return myArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var myArray = [1]
  
  var myNewArray = myArray.unshift(element);
  
  return myNewArray
}