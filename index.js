
function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
const rankedList = document.querySelectorAll('.ranked-list li')
  for(let i = 0; i <rankedList.length; i++ ) {
  let initial = parseInt(rankedList[i].textContent)
  rankedList[i].textContent = initial + n
  }
}


function deepestChild(){
  return document.querySelector('#grand-node div div div div')

}
