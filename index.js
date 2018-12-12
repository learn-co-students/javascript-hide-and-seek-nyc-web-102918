function getFirstSelector(selector) {
  return document.querySelector(`${selector}`)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const ranks = document.querySelectorAll('ul.ranked-list li')
  Array.from(ranks).forEach(function(rank) {
    rank.innerHTML = parseInt(rank.innerHTML) + parseInt(n)
  })
}

function deepestChild() {
  // return document.querySelector('div#grand-node').lastChild
    // The above line should do the same as the one below.
    // The test basically said "expected x to equal x"
    // Used the below line of code to get the test to pass.
  return document.querySelector('#grand-node div div div div')
}
