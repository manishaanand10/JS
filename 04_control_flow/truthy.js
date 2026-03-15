//truethy or falsy value

// falsy value 
// nan,0,-0, bigint 0n,null,undefined,"",false

// truthy values
//"0", 'false' ," ",[],{},function(){}

const username =[]
if(username){
    console.log("email pata hai");
    
}
else{
    console.log("nhi pta");
    
}
// if(username.length === 0 ){
//     console.log("array is empty");
    
// }

const emptyobj ={}
 
if(Object.keys(emptyobj).length === 0){
    console.log("object is empty");
    
}

//NULISH COALSEING OPERATOR (??):NULL UNDERFINFED

let val1
// val1 = 5?? 10
// val1 = null ?? 10
// val1 =undefined?? 10
val1 =null ?? 7 ?? 10
console.log(val1);

//TERNINAR OPERATOR

const parkprice = 200
parkprice <=100?console.log("less then 100") : console.log("more then 100");

