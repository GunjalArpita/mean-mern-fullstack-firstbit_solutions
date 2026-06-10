//continuosly return data 
import { Observable} from 'rxjs'

const obs = new Observable ((Subscriber)=>
    {
        Subscriber.next(100);
        Subscriber.next(200);
        Subscriber.next(300);
        //Subscriber.error('somethig went wrong');
        setTimeout( ()=> {
            Subscriber.next(400);
            Subscriber.complete();
        },3000)
        
    }

)
console.log("i am learning observales");
obs.subscribe(
    {
        next(res)
        {   
            console.log('Received a new value from observables');
            console.log(res);
        },
    error(err)
    {
        console.log(err);
    },
    complete(comp)
    {
        console.log("completed")
    }
}
)
console.log('it is provided by observable');