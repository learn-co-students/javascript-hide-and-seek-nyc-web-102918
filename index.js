
function getFirstSelector(selector){
  return document.querySelector(selector)
}


function nestedTarget(){
  return document.getElementById('nested').querySelector('div div div div.target')
}

// Define a function nestedTarget() that pulls a .target out of #nested (# is used for IDs in
// selectors — but you knew that because you read the docs, right? :) ). (Note that in index.html
// #nested and .target just happen to be divs. This method should work with arbitrary elements.)


function increaseRankBy(n){
  let rank = document.querySelectorAll('.ranked-list')

    for(let i = 0; i < rank.length; i++){
      let children = rank[i].children

        for(let j = 0; j < children.length; j++){
          children[j].innerHTML = parseInt(children[j].innerHTML) + n
      }
    }
}

// Define a function  that increases the ranks in all of the .ranked-lists by n.
// (You might need to make use of parseInt()
//



function deepestChild(){
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0];

   while (nextNode) {
    node = nextNode;
    nextNode = node.children[0];
   }
   return node;
}
// Define a function deepestChild() that pulls out the most deeply nested child element
// from div#grand-node. (Remember, you can iterate over elements and call querySelector()
//  and querySelectorAll() on them. This is challenging to implement correctly, but not beyond your ability!)
