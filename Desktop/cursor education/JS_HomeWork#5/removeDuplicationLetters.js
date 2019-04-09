function unique_char(str)
{
 let unique=``;
 for (let i=0;i < str.length;i++) {
 if ( str[i] === ` `) {
  unique +=str[i]; ;
  }
 if (unique.toLowerCase().indexOf(str.toLowerCase().charAt(i))==-1) {
  unique += str[i];  
  
  }
  }
  return unique;  
}  
console.log(unique_char(`Hello I am Iron Man`));