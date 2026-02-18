//IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

// function apna(){
//     console.log("database connection"); 

// }
// apna()

(function tera(){
    console.log("databse connection"); 
})();


//example one // named iife
(  function mera(){
    console.log(`db connect`);
    
})();

//exampletwo  simple iife
( (name) =>{
    console.log(`db connect ${name}`);
    
})("manisha");

// two iife with semicolon;

( function mera(){
    console.log(`db connect`);
    
})();
( (name) =>{
    console.log(`db connect ${name}`);
    
})("manisha");



