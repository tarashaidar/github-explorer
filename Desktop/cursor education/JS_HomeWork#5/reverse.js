//First method
function reverse(str) { 
    let newString = ``;
    for (let i = str.length - 1; i>=0; i--) {
       newString+=str[i];  
    }
    return newString;
}

result = reverse(`taras`);
console.log(`Write some string:`, result);




//Second method
function reverse(str) {
    return str.split(``).reverse().join(``);
}
console.log(reverse(`abc`)); //cba