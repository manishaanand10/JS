//arrow function  shorter syntax for writing functios and handle this differently
// this keyword means change current value..
const user ={
    username:"manisha",
    password:"manishaanand10",
    website:"instgram",

    welcomemessage: function (){
        console.log(`${this.username} ,welcome to wedsite`);
        console.log(this);
        
    }
}
//  user.welcomemessage()
//  user.username = "isha"// change username for this(keyword)
//  user.welcomemessage()

//  console.log(this);


//normal function
// function apna(){
//      const username ="manisha"
//     console.log(this.username);
    
// }
// apna()

// var in function
// const apna = function(){
//     const username ="manisha"
//     console.log(this.username)
// }
// apna()


//arrow function
const apna = () => {
    const username ="manisha"
    //console.log(this)
}
apna()

