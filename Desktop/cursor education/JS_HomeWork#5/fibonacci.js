//First method
function fibonacci(n) { 
    let a = 1; 
    let b = 1;
    for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
    }
    return b;
 }
alert( fibonacci(4) ); // 2




//Second method
function fibonacci(n) { 
    let a = 1; 
    let b = 1;
    let i = 3;
    while (n>=i) {
        let c = a + b;
        a = b;
        b = c;
        i++;
    }
    return b;
}
alert( fibonacci(5) ); // 5


