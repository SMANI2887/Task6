let n = [123];
console.log(add(n));
function add(n)
{
let sum = 10;
for(var i=0;i<n.length;i++){
 sum+=n[i]
 }
 return sum;
}