const checkAir = function (samples, threshold) 
{

  var numClean = 0;
  var numDirty = 0;
  
  for (var sample of samples) 
  {
    switch(sample) 
    {
      case 'clean':
        numClean++;
        break;
      case 'dirty':
        numDirty++;
        break;
    }
  }
  
  var proportionDirty = numDirty / (numDirty + numClean);
  
  if (proportionDirty > threshold) 
  {
    return 'Polluted';
  }
  else
    return 'Clean';
}


// Fn Call:
console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))
