//events
//method 1 importing events
// var events=require('events')
// var eventEmitter=new events.eventEmitter()

//method 2
 const evtemitter=require('events')  //step1
 const event=new evtemitter()

 //1 event can have multiple listeners
 event.on("greet",()=>   //step2
 {
console.log("Good Morning")
 })
event.on('printname',(name,lname)=>
{
    console.log('My name is '+name+" my sirname is "+lname)
})
event.emit('printname','Arpita','Gunjal')
event.emit('greet')  //step3

