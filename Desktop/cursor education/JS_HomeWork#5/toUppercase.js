function toUppercase(str) {
   let  upper = ``;
   for (let i = 0; i < str.length; i++) {
      upper += String.fromCharCode(str.charCodeAt(i) & 223);
   }
   console.log(upper);
}
toUppercase(`taras`) // Write your text