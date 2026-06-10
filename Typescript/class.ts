class person{
    constructor { public  name:string,public age:number,protected contact:number,private salary:number}

 wish():void{
    console.log("${this.name},${this.age")}

  
 getprotecteddetails():void{
    console.log('contact:${this.contact}')
 }  


proctected getsalary():void{
    console.log('${this.salary}')
}
}