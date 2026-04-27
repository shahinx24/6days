// Palindrome checker
let Word = "Noon"
let str = Word.toLowerCase()
function palindrome(){
for(let i=0;i<str.length/2;i++){
    if(str[i] !== str[str.length-1-i]){
        return "Not a Palindrome"
    }return "Is Palindrome"
}}
console.log(palindrome())