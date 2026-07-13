function remove(str)
{
   // return str = str.replace(/\s+/g,"")
   return str.split(" ").join("")
}
console.log(remove("hii my name is arp"));
