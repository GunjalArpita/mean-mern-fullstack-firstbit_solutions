//promises in js are used to handle asynchronous operations.
//they represents a value that may be available now,in the future,or never.
//**********states of a promises**********/ 
//1.pending-neither fulfilled nor rejected 2.fulfilled-completed successfully 3.rejected-operation failed.
//promise create using a 'promise' constructor.function called with resolve and reject parameters.
//'then ' and 'catch' methods to handle result of asynchronous operation.
//



let p=new Promise((resolve,reject)=>
    {
        let dataFound=true;
        if(dataFound==true)
            {
                resolve(100);
            }
        else
        {
            reject(0);
        }
    });
//a=getData();
p.then((res)=>{
    console.log("promise successfull "+res);
})
.catch((err)=>{
    console.log('promise failed '+err);
})
.finally(()=>{
    console.log("always executed");
}

)