//1.print 3 largest elements of the given Array input:[1,4,17,7,25,3,100]


var temp=0
var b=0
var c=0
var output=[]
var arr=[1,4,17,7,25,3,100]
for(var a of arr)
{
    for(var b=0;b<arr.length;b++)
    {
        if(arr[b]>arr[b+1])
        {
            temp=arr[b]
            arr[b]=arr[b+1]
            arr[b+1]=temp
        }
    }
   //output.push(arr[a])
}
console.log(arr)
    

console.log("three largest number of the array")
for(var d=(arr.length-1);d>3;d--)
    {
        console.log(arr[d])
    }


//2.given is the input arr=[5,6,9,40,3]....output should be [5,7,11,43,7]
var b=0
var count=0
var output=[]
var ar=[5,6,9,40,3]
for(var b of ar)
//for(b=0;b<5;b++)
{
    //output.push((ar[b])+b)
    output.push(b+count)
    count=count+1
}
console.log(output)

//3.find max and min value from array
var a=0
var arr=[1000,4,17,7,25,1,3,200]
var max=arr[0]
var min=arr[0]

for(var a of arr)
//for(a=0;a<arr.length;a++)
//for(var b of arr)
{
    if(a>max)
    {
        max=a
    }
}
console.log("maximum value of array=",max)
//for minimum value
//for(a=0;a<arr.length;a++)
for(a of arr)
{
    if(a<=min)
    {
        min=a
    }
}
console.log("minimum value of array=",min)

//4.write a program to reverse a array

var a=0
var output=[]
var arr=[1,4,17,7,25,3,100]
console.log("array length =",arr.length)
console.log("reverse of a array element=")
for((a=arr.length-1);a>=0;a--)
{
    output.push(arr[a])
}
console.log(output)

//6.Check whether given number is present in array.
//	input:[1,4,17,7,25,3,100] n=25
 var arr=[1,4,17,7,25,3,100]
 var n=20
 var flag=false
//for(var a=0;a<arr.length;a++)
for(var a of arr)
{
    if(a==n)
    {
        flag==true
    }
}
if(flag==true)
{
    console.log(n,"is present in the array")
}
else{
    console.log(n,"is not present in the arrary")
}


// 7.Write a program to multiply each element of array with given number.
//	input:[1,4,17,7,25,3,100] n=10
//	output:[10,40,170,70,250,30,1000]

var a=0
var n=10
var output=[]
var arr=[1,4,17,7,25,3,100]
console.log("after multiplication by given no.,element of arrary are =")
//for(a=0;a<arr.length;a++)
for(a of arr)
{
    output.push( a*n )
}
console.log(output)

/*8.Write a function which will print only even number from given array.
	a)input: arr=[3,2,56,89,63,6]
	output=[2,56,6]
	b)input: arr=[3,1,5,89,63,69]
	output=[]
*/
//a)  
var a=0
var output=[]
var arr=[3,2,56,89,63,6] 
console.log("even number from the given array is =")
//for(a=0;a<arr.length;a++)
for(var a of arr)
{
    if(a%2==0)
    {
       output.push(a) 
    }
    
}
console.log(output)

//b)
var a=0
var output=[]
var arr=[3,2,1,5,89,63,69,48] 
console.log("even number from the given array is =")
//for(a=0;a<arr.length;a++)
for(a of arr)
{
    //if((arr[a])%2==0)
    if((a%2==0))
    {
        output.push(a)
    }
}
console.log(output)

/*5. Write a program to sort the array.
	input:[1,4,17,7,25,3,100]
	output:[1,3,4,7,17,25,100]
*/
var a=0
var temp=0
var b=0
var output=[]
var arr=[1,4,17,7,25,3,100]
//for(a=0;a<arr.length;a++)
for(a of arr)
{
    for(b=0;b<arr.length;b++)
    //for(b of arr)
    {
        if(arr[b]>arr[b+1])
        {
            temp=arr[b]
            arr[b]=arr[b+1]
            arr[b+1]=temp
        }
    }
   //output.push(arr[a])
}
output =arr
console.log(output)
