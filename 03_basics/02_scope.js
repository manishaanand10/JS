// scope me bhr me gobal scope
let a = 200

if(true){ // scope me inner me  block scope
    let a =10
    const b = 20
    // console.log("inner value",a);
       
}
//  console.log(a);
//console.log(b);
// console.log(c);


//nested scope //closer

function one(){
    const username ="manisha10"
    
    function two(){
        const password ="mickianand"
        // console.log(username);
    }
   two()
}
one()

if(true){
    const username ="manisha"
    if(username === "manisha"){
        const password ="  micki"
        // console.log(username + password);
    }
    // console.log(password);   
}
// console.log(useranme);


function outer(){
    const outerlayer ="i am outerlayer"

    function inner(){
        const innerlayer =" +i am innerlayer"
        // console.log(outerlayer + innerlayer);
      
    }
    inner()
 
}
outer()

// small example  interesting
 function AddOne(num){
    return  num + 1
 }
 console.log(AddOnene(2));


 //second way
 const AddTwoNumber = function (num){
    return num+2
 }
 console.log(AddTwoNumberd(2));
 


