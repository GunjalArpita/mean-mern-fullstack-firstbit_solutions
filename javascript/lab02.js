let values=[1,2,3,100,7,50,89];
let sum=0;
//simple for loop
console.log("simple for loop");
for(let j=0;j<values.length;j++)
    {   
        
        if(values[j]==100)
        {
            continue;
        }
        else if(values[j]==50)
            {
                break;
            }   
       sum=sum+values[j];
        console.log(values[j],sum);
    }

// for in loop
let sum1=0;
console.log(" for-in loop");
for (let v in values){
   
    if(values[v]==100)
        {
            continue;
        }
        else if(values[v]==50)
            {
                break;
            }   
       sum1=sum1+values[v]; 
       console.log(values[v],sum1);
       
        }
//for of loop
let sum3=0;
console.log(" for-of loop");
for(let a of values)
    {   
        if(a==100)
            {
                continue;
            }
            else if(a==50)
                {
                    break;
                }   
           sum3=sum3+a;
            console.log(a,sum3);
    }


    