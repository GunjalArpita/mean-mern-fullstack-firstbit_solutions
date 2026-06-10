let number=9
 let flag=true;
   if( number<1)
       {
       console.log('Number is Not Prime');
      }
    else{
      for(let i=2;i<number/2;i++)
       {
   if(number%i===0)
        {
       console.log('Number is not Prime');
       flag =false 
       break   
    }
  }
  if (flag)
    {
      console.log(number,"is prime")
    }
    else
    {
      console.log(number,' is not prime')
    }   
   }
   



