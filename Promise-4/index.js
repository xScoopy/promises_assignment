const food = new Promise((resolve, reject) => {
    
})


// resolve food here: 



// **Challenge 1** Resolve your promise with the name of your favorite food. 
// Do this by calling the `resolve` with an argument. 
const food2 = new Promise((resolve, reject) => {
    resolve('pizza')
    reject('not my favorite food')
})

// **Challenge 2** Resolve the `food` promise with that `.then()` syntax 
// and print your favorite food to the console. 
food2.then((food) => {
    console.log(food)
})
