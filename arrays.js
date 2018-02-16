var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var candyString = "foo"

function addElementToBeginningOfArray(chocolateBars, candyString){
  return [candyString, ...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, candyString){
  return chocolateBars.unshift(candyString)
}

function addElementToEndOfArray(chocolateBars, candyString){
  return [...chocolateBars, candyString]
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