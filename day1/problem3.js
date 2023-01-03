let lower= ["a"];
let upper= ["A"];
let char= "a";
for(let i=0;i<lower.length;i++){
  if(char== lower[i]){
    char= upper[i];
    break;
  
  }
}
console.log(char);