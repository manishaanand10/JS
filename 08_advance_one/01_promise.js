const promiseOne = new Promise(function(resolve,reject){
    //do an async call
    //db call, cryptograpghy,network
    setTimeout(function(){
        console.log('hello task is  compelete');
        resolve()
    },1000)
})

promiseOne.then(function(){
console.log("promise consumed");
})


//promisetwo  without const name
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("task 2");
        resolve()
    },1000)

}).then(function(){
    console.log('another promise consumed');
    
})


//promise three get value in then call back function

const promisethree =new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:'chai' ,email:'mansihanamnan.com'})
    },1000)
})

promisethree.then(function(user){
    console.log(user);
    

})


// promisefour reject

const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username :'manisha',pasword :'123'})
        } else{
            reject('ERROR:KUCH GTL HAI')
        }
        
    },1000)
})


promisefour.then(function(user){
    console.log(user);
    return user.username
})
.then(function(username){
    console.log(username);
})
.catch(function(error){
    console.log(error);
    
}).finally(function(){
    console.log("finally kam hoga gya humra");
    
})

// promise five

const promisefive = new Promise(function(resolve,reject){
    setTimeout (function(){
        let error=true
        if(!error){
            resolve({username:"js",password:"123"})
            
        }else{
            reject("ERROR:js went wrong")
        }
        
    },1000)
    
})
promisefive.then()