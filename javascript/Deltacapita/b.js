function check(str)
{
   str1=str.split('').reverse().join('')
   if( str.toUpperCase() === str1.toUpperCase())
   {
    return true
   }
   else{

    return false
   }
}

console.log(check("Madam"));
