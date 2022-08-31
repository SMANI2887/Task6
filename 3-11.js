var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];

var str_all=0;

var inner_array = [];

var inner_array2 = [];
 
for (var i = 0; i < numsArr[0].length; i++) {
     
if(numsArr[0][i] %2 !== 0){
         
numsArr[0][i] = "even";
         
inner_array += numsArr[0][i]+',';
     
}else if(numsArr[0][i] %2 == 0 ){
           
inner_array += numsArr[0][i]+',';  
         
}
    
}

for (var j = 0; j < numsArr[1].length; j++) {
    
if(numsArr[1][j] %2 !== 0){
        
numsArr[1][j] = "even";
        
inner_array += numsArr[0][j]+',';
    
}else if(numsArr[1][j] %2 == 0 ){
          
inner_array2 += numsArr[1][j]+',';  
        
}
   
}
console.log(numsArr[0]);
console.log(numsArr[1]);
