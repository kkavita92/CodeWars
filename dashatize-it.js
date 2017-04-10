/* 
Given a number, return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark.

Examples 

dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5'
dashatize(5) -> 5

*/

function dashatize(num) {

  if (isNaN(num)) {return 'NaN';}
  num = Math.abs(num).toString().split("");
  if (num.length == 1) {return num.join("");} //No need to add dashes for single-digit numbers
  
  var res = "";
  for (i=0;i<num.length;i++) {
    if (Number(num[i]) % 2 == 0) { //if digit is even, push to string 
      res += num[i];
    } else {
      res = res + "-" + num[i] + "-"; //if digit is odd, add dashes around it and push to string 
    }
  }
   
   return res.replace(/(--)/g,"-").replace(/^-|-$/g,""); //remove double dashes and dashes in front/end of string 
};

//Best Solution 

function dashatize(num) {
  return String(num)
    .replace(/([13579])/g, "-$1-") //$1 refers to matching parantheses in regex pattern - in this case any odd numbers 
    .replace(/--+/g, "-") //removes any multiple dashes 
    .replace(/(^-|-$)/g, "") //removes dashes in front/end of string 
}
