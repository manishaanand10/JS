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


