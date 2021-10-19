let conditionalSum = function(values, condition) 
{
  var sum = 0;
  values.forEach(function(value) {
    if(condition == "even" && value % 2 === 0) {
      sum += value;
    } else if (condition == 'odd' && value % 2 !== 0) {
      sum +=value;
    }
  });
  return sum;

};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));