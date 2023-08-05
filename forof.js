//var a=0
var output=[]
var arr=[3,1,5,89,63,69,48,4,2] 
console.log("even number from the given array is =")
/*for(a=0;a<arr.length;a++)

{
    if((arr[a])%2==0)
    {
        output.push(arr[a])
    }
}
console.log(output)*/
for (var a of arr) {
    if(a%2==0)
    {
        console.log(a)
    }
}