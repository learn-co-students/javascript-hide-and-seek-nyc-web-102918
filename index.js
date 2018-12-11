
function getFirstSelector(s) {
  return document.querySelector(s);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy (n) {
  let rank = document.querySelectorAll('.ranked-list')
  for(let i = 0; i < rank.length; i++){
    let children = rank[i].children
    for(let j = 0; j < children.length; j++){
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}

function deepestChild(){
  let node = document.getElementById('grand-node')
  let nodeChild = node.children[0]

  while (nodeChild){
    node = nodeChild
    nodeChild = node.children[0]
  }
  return node
}
