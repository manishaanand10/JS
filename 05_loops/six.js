// forEach value return nhi karta

const lang = ["js","java","html","python","cpp"]

const values = lang.forEach( (item) => {
    // console.log(item);
    return item;
})
// console.log(values);



//filter value return karta hai
const num = [1,2,3,4,5,6,7,8,9,10]
//  const newnum = num.filter( (num) => num  > 4)

// retrun key word
 const newnum = num.filter( (num) =>{
    return num > 4 
 })
//  console.log(newnum);
 
//  const num = []
//  newnum.forEach( (num) => {
//     if(num>4){
//         newnum.push(num)
//         // console.log("greater then 4");
        
//     }
//  })


//  console.log(newnum);


const books =[
    {title :"book one ", genre :"history", publish: 1920, edition : 2004},
    {title :"book two ", genre :"sci", publish: 1922, edition : 2008},
    {title :"book three ", genre :"non_ficition", publish: 1999, edition : 2007},
    {title :"book four ", genre :"sci", publish: 1989, edition : 2010},
    {title :"book five ", genre :"history", publish: 2011, edition : 2012},
    {title :"book six", genre :"english", publish: 2002, edition : 2012},
    {title :"book sever ", genre :"history", publish: 1988, edition : 2015},
    {title :"book eight", genre : " hindi", publish: 1944, edition : 2018},
    {title :"book nine", genre :"fiction", publish: 1995, edition : 2020},
    {title :"book ten", genre :"sci", publish: 1997, edition : 2021},
    
] 

//single line call
//  const userbooks = books.filter( (bk) => bk.genre === 'sci' )
const userbooks=books.filter( (bk) => bk.publish >=2000 && bk.genre ==="history")

//return keyword
// const userbooks = books.filter( (bk) =>{
//     return  bk.genre==='history'   
// })


console.log(userbooks);

 

