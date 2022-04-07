function whatToEat(timeOfDay) {
  // Create a new promise and return it here
  return new Promise((resolve, reject) => {
    if (timeOfDay === 'breakfast') {
      resolve('eggs')
    }
    if (timeOfDay === 'lunch') {
      resolve('grilled cheese')
    }
    if (timeOfDay === 'dinner') {
      resolve('pizza')
    }
    else {
      reject("I'm not hungry right now.")
    }
  })
}


// Call yout function and resolve the promise here! 

whatToEat('breakfast')
.then(message => console.log(message))
.catch(err => console.log(err))
.finally(() => {
  console.log("now what do we do today?")
})
// If the `timeOfDay` is 'breakfast', 'lunch', or 'dinner' 
// resolve the promise with your favorite food for that time. 

// If the `timeOfDay` is anything else reject the promise with 
// the 'message' I'm not hungry right now.  