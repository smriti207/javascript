//3.find max and min value from array

var a=0
var arr=[0,1,4,17,7,25,3,100,500,-7]
var max=arr[0]
var min=arr[0]

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

//6.Check whether given number is present in array.
//	input:[1,4,17,7,25,3,100] n=25
var arr=[1,4,17,7,25,3,100]
var n=20
for(a=0;a<arr.length;a++)
{
    if(arr[a]==n)
    {
        console.log(n,"is present in the array")
    }
    else{
        console.log(n,"is not present in the array")
    }
}