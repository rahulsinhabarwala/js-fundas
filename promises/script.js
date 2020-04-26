//with callcack hell

//

// with promise
let cleanTheRoom =function(){
   return new Promise(function(resolve,reject){
        resolve('cleaned the room');
    })
    
} 

let removeGarbage = function(message){
    return new Promise(function(resolve,reject){
        resolve(message + 'removed garbage')
    })
} 

let getIcecream = function(message){
    return new Promise(function(resolve,reject){
        resolve(message + 'I got the icecream');
    })
} 

cleanTheRoom().then((result)=>{
    return removeGarbage(result);
})
.then((result)=>{
    return getIcecream(result);
})
.then((result)=>{
    console.log(result)
})

