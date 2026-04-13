class animal{
    constructor(dog,cat,cow){
        this.dog =dog;
        this.cat=cat;
        this.cow=cow
    }

    encryptcat(){
        return `${this.cat}mmewo_mwoe`

    }
    changeanimalname(){
        return`${this.dog.toUpperCase()}`
    }

}
const voice = new animal('bok_bok','cat','moo-moo') 

// console.log(voice.encryptcat());
// console.log(voice.changeanimalname());

// console.log(voice);


// behind the scene

class student{
    constructor(name,age){
        this.name=name;
        this.age=age
    }
    greet(){
        return`hello everyone ,me name is ${this.name}`
    }
    studentage(){
        return`my age is ${this.age}`
    }
}
const student1 = new student('mansiha','20')
// console.log(student1.greet());
// console.log(student1);
// console.log(student1.studentage());





// inhertacnce
// class mobile{
//     constructor(brand){
//         this.brand=brand;
//         // this.price=price;
//     }

//     details(){
//         return `brand name is  ${this.brand}`
//     }
    
// }

//  class phone extends mobile{
//     constructor(brand,price,year){
//        super(brand)
//         this.price=price;
//         this.year=year

//     }

//     addname(){
//         return` name of barnd ${this.brand}`
//     }


//  }

// const cellphone= new phone('apple','20k','2000')
// console.log(cellphone.addname());

// const anotherphone =  new mobile('oppo')
// anotherphone.addname()
// // anotherphone.mobile()
// // cellphone.details


class user{
    constructor(username){
        this.username =username
    }

    logme(){
        console.log(`username is ${this.username}`);
        
    }
}

class anotheruser extends user{
    constructor(username,email,password){
        super(username)
        this.email=email;
        this.password=password;
    }
    callme(){
        console.log(`add more value like email=${this.email} and password=${this.password}`);
        
    }
}
 const chai=new anotheruser("manisha","mansihaanand@123","12345")
chai.logme()
chai.callme()
const anotherchai = new user('isha')
anotherchai.logme()
// anotherchai.callme()
console.log(chai=== anotherchai);// false
console.log(chai=== anotheruser);// false
console.log(chai instanceof anotheruser);// true
