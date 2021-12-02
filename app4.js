//1
// const btn = document.getElementById('btn-msg');
// btn.addEventListener('click', (e) => {
//    alert(e.currentTarget.dataset.text);
// });

//2
// const btn = document.getElementById('btn-msg');
// btn.addEventListener('mouseover', (e) => {
//    btn.classList.add('bg-red');
// });
// btn.addEventListener('mouseout', (e) => {
//    btn.classList.remove('bg-red');
// });

//3
const tagTextContainer = document.getElementById('tag');
document.body.addEventListener('click', (e) => {
   tagTextContainer.textContent = `Tag: ${e.target.nodeName}`;
});

//4
const btn = document.getElementById('btn-generate');
const list = document.querySelector('ul');

function generateNewItem(e) {
   let num = list.children.length + 1;
   let text = `Item ${num}`;
   let li = document.createElement('li');
   li.textContent = text;
   list.appendChild(li);
}

btn.addEventListener('click', generateNewItem);