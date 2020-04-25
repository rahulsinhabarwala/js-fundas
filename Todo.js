
//primitive and non primitive data types
//boolian ,number strings are primitive data types because they hold the value inside theem;
// // array and objects are the non primitive bcz they hold the address of the data;

// let x= 10;
// //x is holding the value of 10
// //so basicly we have a memory address called x, and we have stored value 10 in it.
// //we can directly change this value on that memory location with help of name x;

// let obj ={a:10}

// let obj1 ={a:10};
// let obj2 ={a:10};

// console.log(obj1 !== obj2);



//js create an object in heap and the obj variable stores the location of that object in heap;
//so when we pass and object or array as argument we are pasing a memory location, so it will modify the orignal
//be carefull with passing them arround. desutructuring is a good funda  for that;


//pure functions must follow two conditions:
//--they must not modify anything which is not defined inside there scope
//--they must return a value;>



/**
 *                              JS debouncing
 * It perform a action after a certain time when user have stop emiting event
 * Like if user is entering data, it will show auto suggeetion after user 
 * has stoped typing for 400ms
 * clearTimeout will stop previous calling if nxt event happens before 400ms
 * 
 */
// let counter = 0;
// const getData = ()=>{
//   console.log('...fetching data', counter++)
// }

// const doMagic =(fn,delay)=>{
//     let timer;
//     return function(){
//       clearTimeout(timer);
//       let context = this;
//       let args = arguments;
//       console.log(arguments[0])
//       timer= setTimeout(()=>{
//         getData.apply(context);
//       },delay)
//     }
// }

// const betterFunction = doMagic(getData,400)


/***
 * Difference between throatling and debounce
 * 
 * ::--::Throatling ::--::
 * 
 * Throatling prevent user from firing a event for more than once in agiven time.
 * eg: user can click on counter once in a second. If he click again and again nothing happen.
 *  assume he clicks for 2 time in 0.5 sec , output will be 1 after 1 sec.
 * We achive this by putting our core functionality inside a timeout, and if its called again 
 * first it check if timer is active, if it is then 
 * it just returns without doing anything.
 * 
 *        let count = 0;
          let timeId;
          function counter(){
            if(timeId){
              return
            }
            timeId = setTimeout(()=>{
              count++;
              console.log(count);
              timeId = undefined;
            },2000)
            
          }
 * 
 * 
 * ::--::Debouncing::--::
 * 
 * it waits for user to stop firing event for a certain time, then it do that functionality for
 * once.it achive this by putting core functionality in setTimeOut. and after every event firid, it
 * cleared that event. So only in case when timeout is not cleared it will exicute that function.
 * 
 */



 /**
  * Memoray allocation and collections
  */