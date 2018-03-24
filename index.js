const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(`${name}`)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(`${name}`)
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function appendKitten(name) {
  var newKitten = [...kittens, `${name}`]
  return newKitten
}

function prependKitten(name) {
  var newKitten = [`${name}`, ...kittens]
  return newKitten
}

function removeLastKitten() {
  kittens.splice(1)
}