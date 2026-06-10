// function enternum()
// {
//     var n=prompt("enter number:");
//     if(n!=null)
//         {
//             console.log(n);
//         }

// }

 async function fact()
{

let num= await prompt("Enter Number To Get Factorial");
let result=  factorial(num);
console.log("factoral of given number is=",result);                                    //print on terminal
alert(`display ${result}`);
}

function factorial(i)
{  
	if(i==0)
		{
			return 1;
		}
	let fact=1;
	while(i>0 )
	{
		fact=fact*i;//1*5=5,  5*4=20,  20*3=60,  60*2=120,  120*1=120.
        console.log("value of fact=",fact);
		//i=i-1;
		i-=1;
    }
      return fact;
}
//


