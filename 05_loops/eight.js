//reduce in js
// reduse use in shopping cart
// keyword

const mynum =[1,2,3,4]
// const mytotal = mynum.reduce(function (acc,curratevalue){console.log(`acc:${acc} and curratevalue ${curratevalue}`);
//  return acc+curratevalue}
// , 0)

const mytotalnum = mynum.reduce( (acc, curval)=> acc+curval,0 )
// console.log(mytotalnum);

//shopping product
const shoppingcart =[
    {
        item :'t-shirt',
        price :299
    },
    {
        item :'shirt',
        price :399
    },
    {
        item :'shoes',
        price :999
    },
    {
        item :'makeup',
        price :9999
    },
    {
        item :'heels',
        price :1299
    },
    
]

const price = shoppingcart.reduce( (acc,item)=> acc+ item.price,0)
console.log(price);

