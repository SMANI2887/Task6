let array = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];
let result = [];
let k = 0;
var sum_odd = 0;
var sum_even = 0;
for (let i = 0; i < array.length; i++)
    for (let j = 0; j < array[i].length; j++)
        
        result.push(array[i][j]);
for (let k = 0; k < result.length; k++)
    
    if (result[k] % 2 != 0) {
        sum_odd += result[k]
    }
    else {
        sum_even += result[k]
    }
console.log(sum_odd);
console.log(sum_even);