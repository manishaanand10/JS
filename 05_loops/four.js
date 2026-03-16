// for in
const myobject = {
    'js':'javascript',
    'cpp' :'c++',
    'html':'hypertext markup lang',
    'react':'react'
}
for (const key in myobject) {
    // console.log(`${key} shortcut name is ${myobject}`);
    
    console.log(`${key} shortcut is for ${myobject[key]}`);
    
  
}

// forin in Array

const arr =["manisha","isha", "micki","aksha"]
for (const key in arr) {
  console.log(arr[key]);  }