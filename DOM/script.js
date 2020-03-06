const p3 = document.querySelector('.p3');
// p3.addEventListener('click', function () {
//     p3.style.backgroundColor = 'lightgreen';

// });

// p3.onclick = function () {
//     p3.style.backgroundColor = 'lightgreen';
// };

const p4 = document.querySelector('section#b p');
p3.addEventListener('mouseenter', function () {
    p3.style.backgroundColor = 'lightblue';
});
p3.addEventListener('mouseleave', function () {
    p3.style.backgroundColor = 'lightgreen';
});

const sectionA = document.querySelector('section#a');
const link = sectionA.querySelector('a');
sectionA.removeChild(link);

const sectionB = document.querySelector('section#b');

p4.addEventListener('click', function () {
    const ul = sectionB.querySelector('ul');
    const li = document.createElement('li')
    const newLi = document.createTextNode('new item');

    li.appendChild(newLi);
    ul.appendChild(li);
});