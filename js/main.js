 //1 Сonverter
 function convert(x) { 
 return(8*x); 
 }
 console.log(convert(2));

//2 A function which returns reversed string.
function reverse(str) { 
 let result1 = '';
 for (let index = str.length-1; index >= 0; index--) {
  result1+=str[index];    
 }  
 return(result1); 
}
 console.log(reverse('abc'));
 
 //3 A function which prints the stair picture of size n
function printStairs(a) { 
a-=1;
str = '';
for(let i = 0; i <= a; i++) {
  str +='#';
  console.log(str);
  
  }

}
printStairs(3);
 console.log(printStairs(3));

 function printStairs(a) { 
  let str = '';
  let i = 0;
  while(i < a) {
    i++;
    str += '#';
    console.log(str);
  }
}
 printStairs(3);
 
 //4 A function which returns total sum of a range
 function sumRange(start, end) { 
start=start-1;
var sum=0;
 
while(start<end){
 
       start++;
       sum+=start;    
    }
 
var c=(sum);
return(c);
}
console.log(sumRange(1, 3));

//5 Write a function which returns the smallest of three numbers.
function min(a, b, c) { 
var d=Math.min(a, b, c);
// console.log(d);
return(d); 
}
console.log(min(4, 44, 9));


//11 A function that when given a number n returns the n-th number in the Fibonacci Sequence. The sequence starts from 1 and looks like this: 1, 1, 2, 3, 5, 8, 13, 21…
function fib(n) {
	
  var a = 1,
    b = 1;
  for (var i = 3; i <= n; i++) {
    var c = a + b;
    a = b;
    b = c;
  }
  return b;
  return(fib);
}
console.log( fib(7) );
