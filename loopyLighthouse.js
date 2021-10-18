/* // SO:
for (var x = 100; x <= 200; x++){
  if( x % 3 === 0 ){
    console.log("Loopy");
  }
  if( x % 4 === 0 ){
    console.log("Lighthouse");
  }
  if( ( x % 3 !== 0 ) && ( x % 4 !== 0 ) ){
    console.log("LoopyLighthouse");
  }
}
*/


// TLN:
/*
function loopyLighthouse(start, end){
  var output = "";
  for(var i = start; i <= end; i++){
    output = "";
    if(!(i % 3)) output += "Loopy";
    if(!(i % 4)) output += "Lighthouse";
    console.log(output || i);
  }
}

loopyLighthouse(100, 200);
*/

/*
for (var x = 100; x <= 200; x++)
{
  if( ( x % 3 === 0 ) && ( x % 4 === 0 ) ){
    console.log("LoopyLighthouse"); }
  
  else if( x % 3 === 0 ){
    console.log("Loopy"); }
  
  else if( x % 4 === 0 ){
    console.log("Lighthouse"); }
      
  else {console.log(x);} 
} */



for (var x = 100; x <= 200; x++)
{
  if((x % 3 === 0) && (x % 4 === 0)){
    console.log("LoopyLighthouse"); }
  else if(x % 3 === 0){
    console.log("Loopy"); }
  else if(x % 4 === 0){
    console.log("Lighthouse"); }
  else { console.log(x); } 
}