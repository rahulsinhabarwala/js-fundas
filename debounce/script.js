const data = [
    { id: 123,
     name: 'The last jedi'},
     { id: 124,
         name: 'The name is rocky'},
         { id: 123,
             name: '8 miles'},
             { id: 123,
                 name: 'The last Samurai'},
                 { id: 123,
                     name: 'The rise of the empire'},
 
    ]
const BUTTON = document.querySelector('button');
const INPUT = document.querySelector('input');

const handleFormSubmition = ()=>{
    let inputValue = INPUT.value;
    fetchData(inputValue);
}

const fetchData = (inputValue)=>{
    console.log(inputValue)
    for(let item of data){
        if(item.name.includes(inputValue))
             console.log(item)
    }
}

function doIt(a,b){
    return a+b;
}

let result = doIt(10,10);

INPUT.addEventListener('keyup',handleFormSubmition);
