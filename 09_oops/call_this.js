// call
function setUsername(username){
    //complex database calls
    this.username = username
    console.log("call");
    
}

function createuser(username,email,pw){
    setUsername.call(this,username)
    this.email = email,
    this.pw =pw//password

}
const anotheruser = new createuser('manisha','manisha@123','180927897')
console.log(anotheruser);
