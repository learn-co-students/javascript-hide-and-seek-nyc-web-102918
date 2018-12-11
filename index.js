
function getFirstSelector(selector){
    return document.querySelector(selector)
}

function nestedTarget() {
    return document.querySelector("#nested .target")
}

function deepestChild(){
    let node = document.getElementById("grand-node")
    let nodeOther = node.children[0] 

    while (nodeOther) {
        node = nodeOther
        nodeOther = node.children[0] 
    }
    return node
}

function increaseRankBy(n) {
    const rankedLists = document.querySelectorAll('.ranked-list')
    const rankedLists = document.querySelectorAll('.ranked-list');
     for (let i = 0, l = rankedLists.length; i < l; i++) {
      let children = rankedLists[i].children
      let children = rankedLists[i].children;
       for (let j = 0, k = children.length; j < k; j++) {
        children[j].innerHTML = parseInt(children[j].innerHTML) + n
      }
    }
  }