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
class mobile{
    constructor(brand){
        this.brand=brand;
        // this.price=price;
    }

    details(){
        return `brand name is  ${this.brand}`
    }
    
}

 class phone extends mobile{
    constructor(brand,price,year){
       super(brand)
        this.price=price;
        this.year=year

    }

    addname(){
        return` name of barnd${this.brand}`
    }


 }

const cellphone= new phone('apple','20k','2000')
console.log(cellphone.addname());


