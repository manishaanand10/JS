// singleton (ek hi object hai)
//Object.create

//object literals
const mySym = Symbol("key1")

const jsUser ={
    name : "manisha",
    [mySym]:"mykey1",
    age : 20,
    phone_number: 2165641654,
    isloggedin : false,
    emila:"manishaanand@gmail.com"
}

// two way to access object
//first_way (dot notation)
console.log(jsUser.name);
//second_way (bracket notation)
console.log(jsUser["name"]) 
console.log(jsUser[mySym]) 

jsUser.name="anand"
Object.freeze(jsUser)

jsUser. name="isha"
console.log(jsUser["name"]);






