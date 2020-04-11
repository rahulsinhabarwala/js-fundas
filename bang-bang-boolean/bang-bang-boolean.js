let dummyObject = {
    name: 'Chuck',
    surname: 'Noris'
}

let boolean = !!dummyObject;

let section = document.querySelectorAll('section')[0];

let para = document.createElement('p');
let textNode = document.createTextNode(boolean);
para.appendChild(textNode);
section.appendChild(para);