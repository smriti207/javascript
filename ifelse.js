//1. finding number is wether even or odd
var a=4
if(a%2==0)
{
    console.log(a,"is a even number")
}
else{
    console.log(a,"is a odd number")
}

//2.
var char='v'
if (char==='a' || char==='e' ||char==='i' || char==='o' || char==='u' ) 
{
    console.log(char,"is a vowel")
    
} else
 {
    console.log(char,"is a consonant")
    
}

//3.
var year=2023
if (year%4===0)
{
    if(year%100===0)
    {
        if (year%400===0)
         {
          console.log(year,"is a leap year")  
        }
        else{
            console.log(year,"is not a leap year")
        }
    }
    else{
        console.log(year,"is not a leap year")
    }
}
else{
    console.log(year,"is not a leap year")
}

//5. richard and jeni
//1.
var richard=35
var jeni=25
if(richard>jeni)
{
    console.log("richard is older than jeni" )
}
//2.
else{
    console.log("jeni is older than richard")
}
//3.
var avg=(richard+jeni)/2
console.log("average age=",avg)
//4.
var age=35
if ((age<=30)&&(age>=20)) 
{
        console.log("jeni")
}
//5.
if ((age<=40)&&(age>=30)) {
    console.log("richard")
}

//11.
//a.
var marks=65
if (marks>=90)
 {
    console.log("aa")
}
//b.
else if((marks>80)&&(marks<=90))
{
    console.log("ab")
}
//c.

else if ((marks>70)&&(marks<=80)) {
    console.log("ac")
}

//12.
var unit=200
if(unit<100)
{
    console.log("per unit charges will be 4rs")
    console.log("total amount to pay=",unit*4)
}
else if ((unit<=200)&&(unit>=100)) {
    console.log("per unit charges will be 6rs")
    console.log("total amount to pay=",unit*6)
} 
else if((unit>=200)&&(unit<=300))
{
    console.log("per unit charges will be 8rs")
    console.log("total amount to pay=",unit*8)
}
else(unit>300)
{
    console.log("per unit charges will be 10rs")
}

//13.

var amount=1500
if ((amount>=1000)&&(amount<2000))
 {
    console.log("discount will be 10%")
    console.log("final payable amount=",(amount-((10/100)*amount)))
} 
else if ((amount>=2000)&&(amount<3000))
 {
    console.log("discount will be 20%")
    console.log("final payable amount=",(20/100)*amount)
} 
else if (amount>=3000)
 {
    console.log("discount will be 30%")
    console.log("final payable amount=",(30/100)*amount)
} 
else{
    console.log("no discount avail")
}

//14.

var num1=20
var num2=60
if(num1>num2)
{
    console.log("num1 is maximum")
}
else{
    console.log("num2 is maximum")
}

//15.
var num1=20
var num2=60
var num3=90
if(num1>num2)
{
    console.log("num1 is maximum")
}
else if(num2>num3)
{
    console.log("num2 is maximum")
}
 else{
    console.log("num3 is maximum")
 }  
 
 //16
var num=30
if ((num%5==0)&&(num%6==0)) {
    console.log("number is divisible by 6 and 5")
}
else{
    console.log("number is not divisible by 6 and 5")
}
