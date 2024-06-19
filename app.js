let text = "JS code";
console.log(text);
console.log(text.length);
console.log(text.includes("e"));
let text2 = "Code JS";
console.log(text2);
console.log(text2.startsWith("Code"));
console.log(text);
console.log(text.endsWith("code"));
let text3 = "'Travel' 'Turn' 'Type'";
console.log(text3);
console.log(text3.replaceAll("T","####"));
let fullName = "Azer Novruzov";
console.log(fullName);
console.log(fullName.length -1); // En asant olan
console.log(fullName);
console.log(fullName.split(""));
fullName = fullName.split("")[0] + "" + 
fullName.split("")[1] + "" + 
fullName.split("")[2] + "" + 
fullName.split("")[3] + "" + 
fullName.split("")[5] + "" + 
fullName.split("")[6] + "" + 
fullName.split("")[7] + "" + 
fullName.split("")[8] + "" + 
fullName.split("")[9] + "" + 
fullName.split("")[10] + "" + 
fullName.split("")[11] + "" + 
fullName.split("")[12];
console.log(fullName.length);
fullName = fullName.replaceAll(' ','');
console.log(fullName);
console.log(fullName.length);
console.log(fullName);
fullName = fullName.slice(0, 4) + fullName.slice(4);   // Eslinde burda fullName.slice(5) olmali idi yuxarda fullName = fullName.replaceAll(' ','') elemisem diyene artiq probelsiz gelir eynisini split eliyib substr nan da yazmaq olar 
console.log(fullName.length);
console.log(fullName.split(""));
fullName = fullName.substr(0, 4) + fullName.substr(4);
console.log(fullName);
console.log(fullName.length);