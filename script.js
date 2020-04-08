// used .split to create an array of strings so I did not have to individually make each word a string by itself.
var poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice. End.".split(" ")
var pTag = document.querySelector("p")
var h1Tag = document.querySelector("h1")
var h2Tag = document.querySelector("h2")
var viewPort = document.querySelector(".viewport")


// created poemText because I need a way to access the paragraph later
var poemText = document.querySelector("p")

// created count to iterate over the array
var count = 0
var countDown = 3

h1Tag.setAttribute("style", "font-size: 50px;")
h2Tag.setAttribute("style", "font-size: 50px;")
pTag.setAttribute("style", "font-size: 50px; color: #c25ba6;")
viewPort.setAttribute("style", "background-color: #ede8ec; text-align: center;")


// created this if/else statement so a 3 second countdown timer will run in the <p>. Once it hits 0, it will call the speedread function. 
function prepareRead() {
  poemText.innerHTML = "..." + countDown
  if (countDown === 0) {
    speedRead()
  }
  else {
    // this will count down by 1 and rerun this function until it equals 0 
    countDown--
    setTimeout(prepareRead, 1000)
  }
}

prepareRead()

// changed innerHTML of poemText to a bunch of words one at a time (count is the iterator) count++ increases it by one.
function speedRead() {
  poemText.innerHTML = poem[count]
  count++

  // added if statement and poem.length to make the poem end on the last word instead of "undefined"
  if (count < poem.length) {
    setTimeout(speedRead, 500)
  }


}

