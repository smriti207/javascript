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