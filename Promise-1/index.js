// Make a new Promise
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject("--- Oops ---");
    resolve('its all good');
    resolve('still all good')
    
  }, 2000);
});

p.then((message) => {
  console.log('Promise resolved successfully! 😀');
  console.log(message);
}).catch((err) => {
  console.log('Promise rejected 😞');
  console.log(err);
});

// **Problems to solve**

// **1)** What happens when a promise is rejected? Test it by calling `reject()`
//The catch block is executed instead of the try. 
// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // reject("--- Oops ---");
//     reject('error');
//   }, 2000);
// });

// **2)** What happens when you call both `resolve` and `reject`? Test this.
//resolved code runs, reject does not. 
//const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // reject("--- Oops ---");
//     resolve('resolved!')
//     reject('error');
//   }, 2000);
// });

// **3)** Does the order matter you call resolve and reject matter? Test this. 
//it seems it does matter. the reject was executed when it was the first resolution in the promise.  
// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // reject("--- Oops ---");
//     reject('error');
//     resolve('resolved!')
    
//   }, 2000);
// });
// **4)** What happens if you call `resolve` or `reject` more than once? Test this out for yourself.
//seems that only the first resolution or rejection is accepted. the others are ignored. 
// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // reject("--- Oops ---");
//     resolve('its all good');
//     resolve('still all good')
    
//   }, 2000);
// });