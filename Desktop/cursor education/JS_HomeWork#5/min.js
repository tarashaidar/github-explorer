function min(a, b, c) {
    if (typeof a === 'string' || typeof b === 'string'|| typeof c === 'string') {
        return alert('Error');
    }
    if (a < b && a < c) {
        console.log(a);
    } else if (b < a && b < c) {
        console.log(b);
    }
    else{
        console.log(c);
    }
 }

 min(10, 12, 11) // 5  //Write digitals
 min(3, 8, 4) // 3
