/**
 The cable problem
 Implement algorithm 1 here
*/
function cable1(current, required, saleLength){
  let count=0;
  let i=current;
  while(i<required){
    i=i+saleLength;
    count++;
  }
  return count;
}
/**
 The cable problem
 Implement algorithm 2 here
*/

function cable2(current, required, saleLength){
  let distance=required-current;
  let total= Math.ceil(distance/saleLength);
  return total;
}

module.exports={
  cable1,
  cable2
};