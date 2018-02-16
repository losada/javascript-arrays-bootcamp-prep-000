var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var candyString = "foo"

function addElementToBeginningOfArray(chocolateBars, element){
  [candyString, ...chocolateBars]
  return chocolateBars;
}

function destructivelyAddElementToBeginningOfArray(){
chocolateBars.unshift("foo")
 return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, element){
  [chocolateBars, ..."foo"]
  return chocolateBars
}

function destructivelyAddElementToEndOfArray(){
  chocolateBars.push("foo")
  return chocolateBars
}

function accessElementInArray(chocolateBars,index){
  return chocolateBars[index]
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.unshift()
  return chocolateBars
}