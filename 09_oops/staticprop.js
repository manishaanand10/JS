class mobile{
    constructor(brand){
        this.brand =brand
    }
    details(){
        console.log(`brand name is = ${this.brand}`);
    }

    static createid(){
        return `value change`
    }
}

const phone = new mobile('apple')
// // console.log(phone.createid())

class cellphone extends mobile{
    constructor( brand,email){
        super(brand)
        this.email = email;

    }
}            

const iphone = new cellphone('iphone','isha@123')
iphone.details()
console.log(iphone.createid())

