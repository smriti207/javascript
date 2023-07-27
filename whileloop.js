//1.printing 9,8,7,6,5,4,3,2,1,0

var a=9
while(a>=0)
{
    console.log(a)
    a--
}

//2.
var a=10
while(a>=1)
{
    console.log(a)
    a--
}

//3.

var a=1
while(a<=10)
{
    console.log(a)
    a++
}

//4.

var a=1
while(a<=10)
{
    console.log(a*2)
    a++
}

//5. printing the following pattern 0,1,1,2,3,5,8,13,21,34,55

var a=0
var b=1
var c=a+b
console.log("fabonacci series")
console.log(a)
console.log(b)
while(a<34)
{
    
    console.log(c)
    a=b
    b=c
    c=a+b
    a++
}

//6. printing ***********

var a=0
while(a<=9)
{
    console.log("*")
    a++
}