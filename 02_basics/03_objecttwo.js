//singleton

//const  facebookUser = new Object()

// non_singleton
 const facebookUser ={}
 facebookUser.id = "123@manisha"
 facebookUser.name = "sunny"
 facebookUser.isloggedin = true 

 //console.log(facebookUser);

 //nested object
 const inst_User ={
    id : "manisha_01",
    fullname : {
        username :{
            fisrt_name:"manisha",
            last_name:"anand"
        }

    }
 }
//  console.log(inst_User.fullname.username.fisrt_name);

 // object combine

 let obj1 = {1:"manisha" , 2:"anand"}
 let obj2 ={3:"diya", 4:"lodi"}


 //let result =obj1.concat(obj2)
 let result = Object.assign({}, obj1,obj2)

 //separed value
 //let result ={...obj1,...obj2}
//console.log(result === obj1);



 //console.log(result);

 const user =[
    {
        name:"mnisha",
        age:20,
        email:"mansihananad@10",
        id:1
    },
     {
        name:"mnisha",
        age:20,
        email:"mansihananad@10",
        id:1
    },
     {
        name:"mnisha",
        age:20,
        email:"mansihananad@10",
        id:1
    }
 ]
//  console.log(user);
//  console.log(facebookUser);

//  console.log(Object.keys(facebookUser));
//  console.log(Object.values(facebookUser));
//  console.log(Object.entries(facebookUser));

 //console.log(facebookUser.hasownProperty('isloggedin'));


 ///////////////destruct/////
 //extract properties form an objcet and store them in variables......

 const cousre ={

    cousrename :"js",
    cousreprice :999,
    cousreyear : "3months"

 }

 console.log(cousre.cousreyear);
 const {cousreyear : year} = cousre
 console.log(year);

 

//  +++++++++++++++++++++++++API++++++++++++++++++(like menu cards)
//two applications to communicate with each other 
// request data and services.


//json
{
"name" : "manisha",
"age": 20,
"isStudent":true
  
//key is also a string and same value is also a string in json

}
[
    {},
    {},
    {}
]




 
 
 
 
 
 

 



 