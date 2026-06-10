//their are two types of scopes
//1.global scope-declaration outside the function
      


//2.local scope-declaration inside the function   { }
 /*
 local scope has more priority than global scope.
  */  




let b=10;//global scope
for(let b=0;b<=5;b++) //local scope
    {   

        console.log("the number is",b)
    }
    //here b=0 has more priority because it is a local declaration

   
    
    


    