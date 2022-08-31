var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all=0;
var inner_array = [];
for (var i = 0; i < numsArr[0].length; i++) {
  inner_array += numsArr[0][i],',';
}
for (var j = 0; j < numsArr[1].length; j++) {
   inner_array += numsArr[1][j],',';
    str_all = inner_array;
}
console.log(str_all);