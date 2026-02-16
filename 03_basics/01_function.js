// console.log("M");
// console.log("A");
// console.log("N");
// console.log("I");
// console.log("S");
// console.log("H");
// console.log("A");

function sayMyName() {
    console.log("M");
    console.log("A");
    console.log("N");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");

}

//sayMyName()


function AddTwoNumber( a, b){ //parametre
    // console.log(a + b);
}
AddTwoNumber(2,2) //agrument

// function return value
function Add( a, b){ //parametre
   return a+b;
}
let result = Add(10,30);
//console.log(result);


//function declartion
function greet(){
    //console.log("hello everyone" );
    
}
greet();


//parametre
function greet(name){
    // console.log("hello everyone" + name);
    
}
//greet("manisha");//call to execute


// another function call
function LoginUser(username ="manisha"){
    if(!username ){   // true me value ayegi two way to re-present first is ! and seconf is username===undefined 
        console.log("username dal");
        return   
    }
    return `${username} hello its me`
}

//console.log(LoginUser());
 // " "empty string is false ....  undefined is false 
 //! true ko false me or false ko true me
 // username ki value parametre me or argument me des saket hai




 /////////////////function part 2///////////////////

 //shopping cart user add the cart

 function CalculateCartPrice(val1 ,val2, ...num1){ //...(rest operator/ spread operator)

//rest operator collect multiple elements into one variable.
    return num1

 }
 console.log(CalculateCartPrice(300,500,399, 1000))

 
//object to function

const user = {
    name :"manisha",
    age :20
}

function handleObject (anotherObject){
    console.log(`username is ${anotherObject.name} ,and age is ${anotherObject.age}`);
    

}
//handleObject(user)
handleObject({ //direct object bhi pass ho sakta hai
    name:"isha",
    age:21
})


// array in object

const sayMyArray =[1,2,3,4,5]

function returnthirdValue(anotherarray){
    return anotherarray[3]
   

}
// console.log(returnSecondValue(sayMyArray));
console.log(returnthirdValue([1,2,3,5,6,7,8]));





