// FIZZBUZZ
// numbers 1-100
// numbers divisible by 3 FIZZ
// numbers divisible by 5 BUZZ
// numbers divisible by 3 and 5 FIZZBUZZ

for ( i = 1; i <100; i++){
  if( i % 15 === 0)
  console.log("FIZZBUZZ");
  else if( i % 3 === 0){
    console.log("FIZZ");
  if( i % 5 === 0)
  console.log("BUZZ");
  }

  console.log(i);


}
