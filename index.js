function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0];

    while (nextNode) {
    node = nextNode;
    nextNode = node.children[0];
  }
   return node;
}

// #messed around for a bit trying to get this one to work and ended up lookin at the answer
function increaseRankBy(n) {
  let rank = document.querySelectorAll('.ranked-list')

   for(let i = 0; i < rank.length; i++){
    let children = rank[i].children

       for(let j = 0; j < children.length; j++){
        children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}
