//1.print 3 largest elements of the given Array input:[1,4,17,7,25,3,100]

var a=0
var b=0
var temp=0
var arr=[1,4,17,7,25,3,100]
var output=[]
for(b=0;b<arr.length;b++)
{
    for(var a=0;a<arr.length;a++)
    {
        if((arr[a])<(arr[a+1])) {
        temp=arr[a]
        arr[a]=arr[a+1]
        arr[a+1]=temp
    }
}
    output.push(arr[b])
}
console.log(output)

//2.given is the input arr=[5,6,9,40,3]....output should be [5,7,11,43,7]
var b=0
var output=[]
var ar=[5,6,9,40,3]
for(b=0;b<5;b++)
{
    output.push((ar[b])+b)
    //console.log((ar[b])+b)
}
console.log(output)

//3.find max and min value from array

var a=0
var max=1
var min=1
var arr=[1,4,17,7,25,3,100]
for(a=0;a<arr.length;a++)
{
    if(arr[a]>max)
    {
        max=arr[a]
    }
}
console.log("maximum value of array=",max)
//for minimum value
for(a=0;a<arr.length;a++)
{
    if(arr[a]<=min)
    {
        min=arr[a]
    }
}
console.log("minimum value of array=",min)

//4.write a program to reverse a array

var a=0
var arr=[1,4,17,7,25,3,100]
console.log(arr.length)
for(a=arr.length;a>=0;a--)
{
    console.log(arr[a])
}

//6.Check whether given number is present in array.
//	input:[1,4,17,7,25,3,100] n=25
 var arr=[1,4,17,7,25,3,100]
 var n=20
for(var a=0;((arr[a]==n)||(a<arr.length));a++)
{}
if(arr[a]==n)
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
var arr=[1,4,17,7,25,3,100]
console.log("after multiplication by given no.,element of arrary are =")
for(a=0;a<arr.length;a++)
{
    console.log(arr[a] *n )
}

/*8.Write a function which will print only even number from given array.
	a)input: arr=[3,2,56,89,63,6]
	output=[2,56,6]
	b)input: arr=[3,1,5,89,63,69]
	output=[]
*/ 
//a)  
var a=0
var arr=[3,2,56,89,63,6] 
console.log("even number from the given array is =")
for(a=0;a<arr.length;a++)
{
    if((arr[a])%2==0)
    {
        console.log(arr[a])
    }
    
}
//b)
var a=0
var arr=[3,1,5,89,63,69] 
console.log("even number from the given array is =")
for(a=0;a<arr.length;a++)
{
    if((arr[a])%2==0)
    {
        console.log(arr[a])
    }
    
}

/*5. Write a program to sort the array.
	input:[1,4,17,7,25,3,100]
	output:[1,3,4,7,17,25,100]
*/
var a=0
var temp=0
var b=0
var arr=[1,4,17,7,25,3,100]
for(a=0;a<arr.length;a++)
{
    for(b=0;b<arr.length;b++)
    {
        if(arr[b]>arr[b+1])
        {
            temp=arr[b]
            arr[b]=arr[b+1]
            arr[b+1]=temp
        }
    }
    console.log(arr[a])
}


