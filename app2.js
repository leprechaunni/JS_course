//1
console.log(document.head);
console.log(document.body);
console.log(document.body.children);
console.log(document.body.firstElementChild);
console.log(document.body.firstElementChild.children);
let div = document.body.firstElementChild;
let filteredArticles = [...div.children].filter(el => el !== div.firstElementChild && el !== div.lastElementChild);
console.log(filteredArticles);