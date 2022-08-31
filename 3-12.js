let data = [[1,2,3,4,5],[6,7,8,9,10,11]];

let mani = (x) => {

let merge_array = [].concat.apply([], x);

let result = [];

for (let i = merge_array.length-1; i>= 0; i--){

result.push(merge_array[i]);

}

return result;

};

console.log(mani(data));
