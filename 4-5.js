const newArray=[1,3,2,5,10];
const myPrime=newArray.filter(num=>{
 for(let i=0;i<=num;i++){
 if(num%2==0)
 {
return false;
 }
 }
 return (num%2==1);
});
console.log(myPrime);