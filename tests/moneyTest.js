 import formatCurrency from "../scripts/utils/money.js";

 //Automated Testing or testing with testcases 

 //Group of test = test suite
 console.log('test suite: formatCurrency') 

 console.log('converts cents into dollars:')
 if (formatCurrency(2095) === '20.95'){ //Basic Testcase
  console.log('passed')
 }else{
  console.log('failed')
 } 

 console.log('works with 0:')
 if (formatCurrency(0) === '0.00'){ //Edge Cases
  console.log('passed')
 }else{
  console.log('failed')
 } 

 console.log('ruounds up to the nearest cents:')

 if (formatCurrency(2000.5) === '20.01'){
  console.log('passed')
 }else{
  console.log('failed')
 } 
