function large(array)
{  
    
   let maxStr = "";
   for(word of array)
   {
    if(word.length > maxStr.length)
    {
        maxStr = word
    }
   }
   return maxStr;

}
console.log(large(["hello","Hii","Arpita","bye"]));
console.log(large(["IAMARPITAGUNJAL","ok"]));

