// remove Dublicate
let array = [1,1,2,2,3,3,4];
let unique = [...new Set(array)]
console.log(unique);
// [ 1, 2, 3, 4 ]