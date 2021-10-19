function range (start, end, step) 
{
  if (step === 0 || step < 0) return [];
    
  let elementsArray = [];
  for (let i = start; i <= end;  i += step ) 
  {
    elementsArray.push(i);
  }
  return elementsArray;
}



console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));