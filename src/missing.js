
/**
 The missing number problem
 Implement algorithm 1 here
*/
function missing1(array){
  console.log("hi");
  const n=array.length+1;
  
  for(let i=1; i<=n; i++){
    //console.log(n);
    let found=false;
    let j=0;
    while(found===false && j<array.length){
      //console.log("do");
      if(i=array[j]){
        found=true;
      }
      j++;
    }
   if(found===false){
     return i;
   }
  }
  
}

/**
The missing number problem
Implement algorithm 2 here
*/
function missing2(array){
  console.log("hi");
  const n= array.length+1;
  let fullSum=(n*(n+1))/2;
  let sum=0;
  for(let i=0; i<array.length; i++){
    sum=sum+array[i];
  }
  return fullSum-sum;
}

module.exports={
  missing1,
  missing2
}
