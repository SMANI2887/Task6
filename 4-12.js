

var as=[12,34,5,6,2,56,6,2,1];
var z=0;
var s=as.filter(function(a,c){
 if(a%2!=0)
 {
 return z += a;
 }
});
console.log(z);
