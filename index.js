// Add your functions and code here
function destructivelyAppendKitten(name) {
  return kittens.push(name)
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  var newArray = [...kittens, name]
  return newArray
}

function prependKitten(name) {
  var newArray = [name, ...kittens]
  return newArray
}

function removeLastKitten() {
  var newArray = kittens
  return newArray.slice(0, newArray.length - 1)
}

function removeFirstKitten() {
  var newArray = kittens.slice(1, kittens.length)
  return newArray
}