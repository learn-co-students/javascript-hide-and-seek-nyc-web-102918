
function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div ');

}

function increaseRankBy(n) {
  const rankedItems = document.querySelectorAll('.ranked-list li')
  for (let i = 0; i < rankedItems.length; i += 1) {
    let initValue =  parseInt(rankedItems[i].textContent)
    console.log(initValue, "initValue")
    rankedItems[i].textContent = initValue + n
  }
}
