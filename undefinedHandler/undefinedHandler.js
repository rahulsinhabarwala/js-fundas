const BOOKDETAIL = {
    isbn: 1234,
    name: 'confessions of a thug',
    author: 'jack daniel'
}
const defaultValue ="-"

let undefinedHandler = (callback,defaultValue)=>{
    try{
        let result = callback();
        return result? result : defaultValue;
    }catch(err){
        return defaultValue;
    }
}

function getBookDetails(BOOKDETAIL){
    let bookDetails = {...BOOKDETAIL};
    let name = bookDetails.price;
    return name;
}

let name = undefinedHandler(()=>getBookDetails(BOOKDETAIL),defaultValue);
document.write(name);

