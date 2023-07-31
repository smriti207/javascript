//1.print 3 largest elements of the given Array input:[1,4,17,7,25,3,100]

var a=0
var temp=0
var b=0
var c=0
var output=[]
var arr=[1,4,17,7,25,3,100]
for(a=0;a<arr.length;a++)
{
    for(c=0;c<arr.length;c++)
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
    }
    output.push(arr[a])
}
console.log("three largest number of the arrays")
for(var d=(arr.length-1);d>3;d--)
    {
        console.log(arr[d])
    }