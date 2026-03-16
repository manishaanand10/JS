//for loop

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 9){
        //console.log("9 is the end of loop"); 
    }
    //console.log(i);
    
    
}


//nested loop
// table
for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop value ${i}`);
    
    for (let j = 0; j <=10; j++) {
        // 
        // console.log(i +`*`+ j + `=`+ i*j );
           
        
    }  
}

//array in loop
let myarray =["jjk" ,"aot" ,"naruto"]
for (let i = 0; i <myarray.length; i++) {
    const element = myarray[i];
    // console.log(element);   
}

// keyword continue

for (let i = 1; i <=20; i++) {
    if(i == 5){
        // console.log("stop");
       break
    }
   
    // console.log(`value of i is ${i}`);

}
// keyword continue

for (let i = 1; i <=20; i++) {
    if(i == 5){
        // console.log("ignore 5 ");
       continue
    }
   
    // console.log(`value of i is ${i}`);

}
