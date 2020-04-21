//with callcack hell
    function doThis(callBack1,callBack2){
        let val1 =  'do this';
        callBack1(val1,callBack2);
    }
    function thenDothis(result , callcack2){
        result = result + ' then Do this';
        callcack2(result);
    }
    function andAlsoThis(result){
        result = result + ' and also this';
        console.log(result)
    }

    doThis(thenDothis,andAlsoThis)


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

