// for each in array

const lang=["js","java","cpp","react","python"]
lang.forEach( function (value){
    // console.log(value);
    
})

//arrow function
 lang.forEach( (val) => {
    // console.log(val);
    
 } )

 function printMe(item){
    console.log(item);
    
 }
// lang.forEach(printMe)

// lang.forEach( (item,index,aaray,)=>{
//     console.log(item,index,aaray);
    
// })

// ["", "", ""]
// [{} , {} , {}]

const mycoding=[
    {
        langname :"javascript",
        langfile :"js"
    },
    {
        langname :"hypertext markup lang",
        langfile :"html"
    },
    {
        langname :"python",
        langfile :"py"
    }
]

mycoding.forEach( (item)=>{
    console.log(`${item.langname} stortcut is ${item.langfile}`);
    

})

