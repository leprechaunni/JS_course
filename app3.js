//1
// function isParent(parent, child) {
//    // Проверяем что переданные элементы являются HTML элементами
//    if (!(parent instanceof HTMLElement) || !(child instanceof HTMLElement))
//       return;
//    let isParent = false;
//    let currentParent = child.parentElement;

//    while (currentParent) {
//       isParent = currentParent === parent;
//       if (isParent) {
//          break;
//       }

//       currentParent = currentParent.parentElement;
//    }

//    return isParent;
// }

//2
// getFilteredLinks = [...document.links].filter((el) => !el.closest('ul'));
// console.log(getFilteredLinks);

//3
// let ul = document.querySelector('ul');
// let prev = ul.previousElementSibling;
// let next = ul.nextElementSibling;
// console.log( ul,
//    prev,
//    next);

//1
// let p = document.querySelector('p');
// console.log(p.textContent);

//2
// function getNodeInfo(node) {
//    if (!(node instanceof Element)) return;

//    return {
//       nodeType: node.nodeType,
//       tagName: node.tagName,
//       nodeName: node.nodeName,
//       childNodes: node.childNodes.length,
//    };
// }
// const info = getNodeInfo(p);
// console.log(info);

//3
// let list = document.querySelector('ul');

// function getTextFromUl(el) {
//    let [...links] = el.querySelectorAll('a') || [];
//    return links.map((a) => a.textContent);
// }
// console.log(getTextFromUl(list));

// 4
// let [...pChildNodes] = document.querySelector('p').childNodes;
// pChildNodes.forEach((child) => {
//    if (child.nodeType === 3) {
//       child.textContent = '-text-';
//    }
// });

//1
// let ul = document.querySelector('ul');
// ul.classList.add('list');

//2
// const link = document.querySelector('ul ~ a');
// link.id = 'link';
// console.log(link);

//3
// const [...allLi] = document.querySelectorAll('li');
// allLi.forEach((li, index) => {
//    if (!(index % 2)) {
//       li.classList.add('item');
//    }
// });

//4
// const [...allLink] = document.querySelectorAll('a');
// allLink.forEach((a) => a.classList.add('custom-link'));
// // const [...links] = document.links;
// // links.forEach(link => link.classList.add('custom-link'));

