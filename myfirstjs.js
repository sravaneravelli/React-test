console.log("intial project");
var a=3;
var b=3;
var c=a+b;
console.log(c);
var d=a-b;
console.log(d);
var e=a*b;
console.log(e);
var f=a/b;
console.log(f);
console.log("multiple of 3 numbers");
var u=7;
var v=8;
var w=9;
var k=u*v*w;
console.log(k);
console.log("print my name");
var name="sravan";
console.log("my name is"+name);
console.log("add to strings");
var string1="system";
var string2="updated";
var string3=string1+" is "+string2;
console.log(string3);
console.log("for loops");
//print 10 table starting with 12 and ends with 1
for (var i=12;i>=1;i--)
{
    console.log("10"+"X"+i+"="+i*10);
}
//print multiples of 3 upto 10
for(var i=3;i<=10;i=i+3)
{
    console.log(i)
}
var i=0
while(i<10)
{
    console.log(i);
    i++;
}
//write a function for do while loop
var w=1
do {console.log(w)}
while (w==0);
//write a function to calculate the exponent of of number
function exponent(n,e){
    return n**e;
}
var res=exponent(2,3);
console.log(res)
//multipications of two numbers
function multipications(g,h){
    return g*h;

}
var rest=multipications(2,9);
console.log(rest)
//add of 3 numbers with functions key
function multipication(l,k,j){
    return l*k*j;
}
var cen=multipication(1,2,3);
console.log(cen)
//write a function to print a string
function sk(n){
    console.log(n)
}
sk ("sravan" )
sk("name")
sk('gsgsg')
//declare an array
var spec=[1,2,2,3,4]
console.log(spec)
//iterate array using for of loop
for (var v of spec) 
console.log(v)
//declare of an object
var dial={"name":"sravan","age":"22"}
for(o in dial){
console.log(o)
console.log(dial[o])
}