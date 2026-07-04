var div  = document.querySelector("div")
var btn  = document.querySelector("button")

// div.addEventListener("click",function()
// {
//     console.log("div");
    
// })


btn.addEventListener("click",function(event)
{   
    event.stopPropagation()
    console.log("btn");
    
})
