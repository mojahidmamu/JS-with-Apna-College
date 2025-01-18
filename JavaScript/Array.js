let marks1 = [55, 44, 11, 22, 33];
sum = 0;
for(mark of marks1){
  if(mark % 2 === 0){
    sum += mark;  
  } 
}
console.log(sum)