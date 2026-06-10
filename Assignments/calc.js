
function pick (val)
{
  document.getElementById("d").value+=val;
}
function clr()
{
  document.getElementById("d").value=" ";
}
function solve()
{
  let x=document.getElementById("d").value;
  let y=eval(x);
  document.getElementById("d").value=y;

}













// let input1="";
// function add(num){
//   console.log("adding",num);
//   input1=input1+num;
//   console.log(input1);
//   document.getElementById("d").value=input1;
// }


// 
// function clr(op){
//   console.log("adding",op);
//   input2=" ";
//   console.log(input2);
//   document.getElementById("d").value=input2;
// }

// 
// function res(){
//  let display=document.getElementById("d").value
//let res=eval(display)
//   document.getElementById("d").value=res;
// }


// function del()
// {
//    var input =document.getElementById('d')
//   input.value=input.value.substring(0,input.value.length-1);

// }

// let a=4;
// let b=2;
// switch('div')
// {
//   case 'add':console.log("Addition",a+b);
//   break;
//   case "sub":console.log("Subtraction",a-b);
//   break;
//   case 'mult':console.log("Multiplication",a*b);
//   break;
//   case 'div':console.log("division",a/b);
//   break;
//   default:console.log("Invalid case");
// }





