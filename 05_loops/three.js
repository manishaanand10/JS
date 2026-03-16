// for of loop

const arr =[1,2,3,4,5,6,7,8,9,10]
for (const num of arr) {
    // console.log(num);
    
    
}

const greeting ="hello-world!"
for (const greet of greeting) {
    // console.log(`each char is ${greet}`);  
}

// MAPS(unique value)

const map = new Map()
map.set('a','1' )
map.set('b','2' )
map.set('c','3' )
map.set('d','4' )

console.log(map);
for (const char of map) {
    console.log(char);
       
}