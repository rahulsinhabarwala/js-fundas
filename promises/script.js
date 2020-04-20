let cleanTheRoom =function(){
   return new Promise((resolve,reject)=>{
        resolve('cleaned the room');
        reject("didn't clean the room")
    })
    
} 

let removeGarbage = function(message){
    new Promise((resolve,reject)=>{
        resolve(message + 'removed garbage')
    })
} 

let getIcecream = function(message){
    new Promise((resolve,reject)=>{
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

