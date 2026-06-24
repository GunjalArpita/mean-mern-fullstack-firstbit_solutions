function fibonacci(n){

    let a=0;
    let b=1;

    for(let i=0;i<n;i++){

        console.log(a);

        let temp=a+b;  // 1   2      3
        a=b;         /// 1     1     2
        b=temp;        // 1     2     3
    } 
}

fibonacci(6);