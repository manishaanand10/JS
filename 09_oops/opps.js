// const promise = new Promise()
// const date= new Date() // new keyword is a constructor


// function User(username,id,logincount){
//     this.username = username
//     this.logincount =logincount
//     this.id = id

//     return this

// }


// const user1 =User("manisha",1,12)
// const user2 =User("isha",5,6)// value overwrite
// console.log(user1);


function user(username,logincount,isloggedin){
    this.username= username
    this.logincount =logincount
    this.isloggedin=isloggedin
   

    // return this
}

const userone= new user ('manisha',12,false)
// const usertwo = new user('isha',1,true)
console.log(userone instanceof user);
console.log(userone instanceof Object);
// console.log(usertwo);

// step1 new keyword:- empty object create..
// step2 call construtor function with new keyword..
// inject this keyword..
// fucntion ke aandar mil jate hai..
