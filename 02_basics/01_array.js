const anime = ["jjk","AOT","naruto"]
const cantoon = ["tom&jerry","chotabheem","shichan"]

// anime.push(cantoon)
// console.log(anime.length);
// console.log(anime[3][1]);

// const allanime = anime.concat(cantoon)
// console.log(allanime);

//separed array

const all_new_anime =[...anime, ...cantoon]
console.log(all_new_anime);


const arr=[1,2,3,[4,5,6],7,[6,7, [4,5]]]

const usearr = arr.flat(Infinity)
console.log(usearr);

console.log(Array.isArray("manisha"));
console.log(Array.from("manisha"));

let score1 = 1000
let score2 = 2000
let score3 = 3000
console.log(Array.of(score1,score2,score3));










