//promise is a eventual completion object
//you can't consume is like this promiseOne();


const promiseOne = new Promise(function(resolve,reject){
    //Do one async task
    //DB calls, cryptography, network
    setTimeout(function(){

        console.log("async time is complete");
        resolve();
    },1000);    
})

//resolve and .then should be connected 
//means resolve() ko call kroge tbhi .then kuchh capture krega
// resolve() bahut tgda method h, ye kuchh arguments,parameters leta h 
//aur set bhi krta h(google kro)

promiseOne.then(function(){
    console.log("promise is consumed");

})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async 2 time is complete");
        resolve();
    },1000);
    
}).then(function(){
    console.log("promise 2 is consumed");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"amit",email:"workwithamit@gmail.com"});
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({username:"amit",password:"123"});            
        }
        else{
            reject('ERROR: Something went wrong');
        }
    },1000)
})

//.then chaining

promiseFour.then(function(user){
    console.log(user);
    // console.log(user.username);
    return user.username
}).then(function(username){
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log('Promise is either resolved or rejected');
})

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:'javascript',email:"chaiaurcode.com"});
        }
        else{
            reject('ERROR: Something went wrong in JS');
        }
    },1000)
})


async function consumePromiseFive(){
   try{ 
    const response = await promiseFive;
    console.log(response);
} catch (error) {
    console.log(error);
}
        
    
}

consumePromiseFive();

async function getAllUsers(){
    try {
        const response = await fetch('https://api.github.com/users/hiteshchoudhary');
        // console.log(response);
        const data = await  response.json();
        console.log(data);
        
    } catch (error) {
        console.log(error)
    }
}

getAllUsers();


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})

