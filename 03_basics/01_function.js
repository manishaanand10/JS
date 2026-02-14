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
function LoginUser(username){
    if(!username ){ // true me value ayegi
        console.log("username dal");
        return   
    }
    return `${username} hello its me`
}

console.log(LoginUser());
 // " "empty string is false ....  undefined is false 
 //! true ko false me or false ko true me






