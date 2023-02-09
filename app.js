//1. arraydaki ededlerin ilk herfini boyuk yazsin
// var a = ["salam", "sabah", "sahib", "sahe", "sahil"];
// for (var i = 0; i < a.length; i++) {
//     a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1);
//   }
//   console.log(a.join(" "));

//========================================
//2. arraydaki ededleri tersine cevir
// var a = [154,3241, 321, 432, 9023];
// for (var i = 0; i < a.length; i++) {
//   let num = a[i].toString(),
//     revNum = "";
//   for (var j = num.length - 1; j >= 0; j--) {
//     revNum += num[j];
//   }
//   console.log(revNum);
// }
//===========================================
// 3.Arrayda stringlerin son herfini boyuke cevirin
// var a = ['salam','malas','malik']
// for (var i=0; i<a.length; i++){
//   a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1);
// }
// console.log(a.join(' '));
//=============================================
// 4.Array icerisindeki ən böyük ən kiçik ədədin tapılması
// var a = [344, 3245, 5556, 5, 676, 78788, 8989, 900];
// var big;
// var little = 0;
// for (var i = 0; i < a.length; i++) {
//   var eded=a[i]
//   for (var j = 0; j < eded.length; j++) {
//     if (big < eded[j]) {
//       big = eded[j];
//       console.log(`${eded[j]} en boyuk ededdir`);
//     }
//     if (eded[j] <= little) {
//       little = eded[j];
//       console.log(`${eded[j]} en kicik ededdir`);
//     }
//   }
// }
//==========================================================
// 5.Arrayda her iki ededden bir iki eded arasinda reqemlerin cemi
// var a = +prompt("enter number").split();
// for (var i = 0; i < a.length; i++) {
//   let sum
//   for (var j = a[i]; j < a[i + 1]; ) {
//     sum = a[i + 1] + a[i - 1];
//     k++;
//   }
//   i += 2;
//   console.log(sum);
// }
//===============================================
// 6.Qarışıq array verilib, yalnızca ədədləri çap etdirin.
// var a = [12,'dafddf',32,'fsddg',23,'ffs']
// for(var i=0;i<a.length;i++){
//   if(typeof a[i]==='number'){
//     console.log(a[i]);
//   }
// }
//==================================================
// 7.Qarışıq array verilib, yalnızca stringləri çap etdirin.
// var a = [12,'dafddf',32,'fsddg',23,'ffs']
// for (var i=0;i<a.length; i++){
//   if(typeof a[i]==='string'){
//     console.log(a[i]);
//   }
// }
//======================================================
// 8.Arrayda metodlar (en azi 3 method ile edilsin) ile ededleri 5 vahid artirmaq
// var a = prompt('ededleri daxil edin').split('')
// for (var i=0; i<a.length;i++){
//   var elaveBes = a[i]+5
//   console.log(elaveBes);
// }
// 9.Input ile daxil olunan stringler icerisindeki saitlerin sayini tapin
//version1
// var a = ["ewewfgdhgadsddfdfaafassaf", "asdf", "wwoiur"],
//   wovels = ["a", "ı", "o", "u", "ü", "e", "ə", "i", "ö"],
//   counter = 0;
// for (var i = 0; i < a.length; i++) {
//   let word = a[i];
//   for (let k = 0; k < word.length; k++) {
//     let char = word[k];
//     if (wovels.includes(char)) {
//       counter++;
//     }
//   }
// }
// console.log(counter);
//==================================================

// 10.Arrayde 6 olanlari “-” ile evez edin

// var a = prompt("ededi daxil edin").split(",");
// for (var i = 0; i < a.length; i++) {
//   let word = "";
//   for (let k = 0; k < a[i].length; k++) {
//     if (a[i][k] == "6") {
//       word += "-";
//     } else {
//       word += a[i][k];
//     }
//   }

//   a[i] = word;
//   console.log(a[i]);
// }
