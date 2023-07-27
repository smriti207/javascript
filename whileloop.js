//1.printing 9,8,7,6,5,4,3,2,1,0

var a=9
while(a>=0)
{
    console.log(a)
    a--
}

//2. printing 10,9,8,7,6,5,4,3,2,1
var a=10
while(a>=1)
{
    console.log(a)
    a--
}

//3. printing 1,2,3,4,5,6,7,8,9,10

var a=1
while(a<=10)
{
    console.log(a)
    a++
}

//4.printing 2,4,6,8,10,12,14,16,18,20

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

//7.printing 20,18,16,14,12,10,8,6,4,2,0

var a=10
while(a>=0)
{
    console.log(2*a)
    a--
}

//8. printing 40,80,120,160,200,240,280,320,360,400

var a=1
while(a<=10)
{
    console.log(40*a)
    a++
}
