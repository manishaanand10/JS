const { use } = require("react")

function addvalue(num){
    return num+5
}

// one.power= 2
// console.log(addvalue(2));


//new keyword 

const createusername = function(username,price){
    this.username=username
    this.price = price
}

createusername.prototype.increment = function(){
    this.price++
}
createusername.prototype.printme =function(){
    console.log(`price is ${this.price}`);
    
}
const coffee = new createusername('coffee',250)
const chai = new createusername('chai',250)

// chai.printme()
// chai.increment()

//this keyword is jiski value puchi ho


// example of prototype
// let myschoole ="tinu      "
// let myname ="manisha      "

// console.log(myschoole.truelength);
//  console.log(myschoole.trim().length);
//  console.log(myname.trim().length);


let myanime=['jjk','onepiece','naruto']// array

let animechar={//object
    jjk : 'gojo',
    onepiece:'zoro',
    naruto:"naruto",

    getAnimeNameChar: function(){
        // console.log(`anime name is ${this.jjk}`);
// 
    }
}

Object.prototype.manisha = function(){
    // console.log(`manisha is present in all object`);   
}


Array.prototype.heymanisha = function(){
    // console.log(`manisha say hey`);
   
}

// animechar.manisha()
// myanime.manisha()
// myanime.heymanisha()
// animechar.heymanisha()

//inheritance

// const user={
//     name:'family',
//     email:'manisha@sbjxhj'
// }

// const grandparent ={
//     makefood:true
// }

// const parent ={
//     isavaiable:false
// }

// const child ={
//     tastythefood:'food is tasty',
//     foodname:'sabji',
//     __proto__:parent
// }

 // grandparent.__proto__ = user
 // child()

 //modern syntax

 // Object.setPrototypeOf(parent,grandparent)

const anothername ="javascrpit"
String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`true lenght is: ${this.trim().length}`);
    
    
}
anothername.truelength()






