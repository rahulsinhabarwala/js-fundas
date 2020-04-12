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

/**
 * How bang bang works
 * ==> In JS every value have an associated boolean value , it can be truthy or falsy;
 * ==> We mostly use this boolean in if or any other conditinal statement.
 * ==> So lets takse an example
 * ====> let str = 'name'
 *        if(str){ 'run this' }
 *        this code will run , bcz str is associated with truthy value.
 * 
 * ==> So how bang bang will work??
 * ==> let res1 = !str??   what will we get.
 * ====> we will get false. why , u know why;
 * ====> so now take this !res will give us true, and we can say that !res = !!str;
 * ====> so we receaved the boolean nature of str by double !!.
 * 
 * 
 * ==> where can we use it?
 * ====> TODO
 * 
 */