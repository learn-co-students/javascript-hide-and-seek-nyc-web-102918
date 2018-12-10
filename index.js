
let getFirstSelector = (selector) => {
    return document.querySelector(selector)
}

let nestedTarget = () => {
    return document.getElementById('nested').querySelector('div div div div.target')
}

let increaseRankBy = (n) => {
   let list = document.getElementById('app').querySelectorAll('ul.ranked-list');

   for (let i = 0; i < list.length; i++){
       list[i].innerHTML = (i + n).toString();
   }
}

let deepestChild = () => {
    return document.getElementById('grand-node').querySelector('div div div div div')
}