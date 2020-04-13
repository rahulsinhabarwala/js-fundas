const BOOKDETAIL = {
    isbn: 1234,
    name: 'confessions of a thug',
    author: 'jack daniel'
}
const defaultValue ="-"

let undefinedHandler = (callback,defaultValue)=>{
    console.log('i was called')
    try{
        console.log("i was here")
        let result = callback();
        console.log(result)
        return result? result : defaultValue;
    }catch(err){
        return defaultValue;
    }
}

function getBookDetails(BOOKDETAIL){
    let bookDetails = {...BOOKDETAIL};
    let name = bookDetails.price;
    console.log(bookDetails)
    return name;
}

let name = undefinedHandler(()=>getBookDetails(BOOKDETAIL),defaultValue);
document.write(name);

