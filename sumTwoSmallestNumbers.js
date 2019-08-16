function sumTwoSmallestNumbers(numbers) { 
 
  console.log(numbers.sort((a,b)=>a-b));
  return numbers[0]+numbers[1];
  //Code here
}