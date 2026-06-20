const n = 1;
let flag = true;

if (n <= 1) {
    flag = false;
} else {
    for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) {
            flag = false;
            break;
        }
    }
}

if (flag) {
    console.log("Number is prime");
} else {
    console.log("Number is not prime");
}