// Reverse
let nums = [1, 2, 3, 4, 5];
for(let i =0; i <nums.length/2; i++){
    let temp = nums[i];
    nums[i] = nums[nums.length-1 -i];
    nums[nums.length-1-i] = temp;
}
console.log(nums)
// [ 5, 4, 3, 2, 1]