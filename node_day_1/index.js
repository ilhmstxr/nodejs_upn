// variable at node.js
// let = dinamis, dapat mengubah value berkali kali
// let name = "acumalaka awawokwaoekawowkeoak";
// console.log(name);

// name = "ilham";
// console.log(name);

// const = value sudah fix, tidak bisa dirubah

// const city = "surabyaa";
// console.log(city);

// city = "jakarta";
// console.log(city);

// TIPE DATA javascript

// // undefined
// let v;
// console.log(typeof v);

// // Number
// v = 16;
// console.log(typeof v);

// // String
// let zaza = "16"
// console.log(typeof zaza);

// // Boolean
// let bool = false;
// console.log(typeof bool);

// OPERATOR ASSIGNMENT
// let b = 3;
// let x = 20;
// let y = 30;

// x += y;
// console.log(x);

// OPERATOR LOGIKA
// let a = 2;
// let b = 2;

// false, karena nilai sama
// console.log(a > b);

// true
// console.log(a == b);

// false karena logika and perlu seluruh kondisi bernilai true
// console.log(a > b && a == b);

// let x = 2;
// let y = 4;

// if (y > x) {
//   console.log(x);
// } else {
//   console.log("hasil y > x itu false");
// }

// OBJECT
// const user = {
//   name: "Ilham Bintang Herlambang",
//   univercity: "UPNV JATIM",
//   age: 20,
//   city: "surabaya",
// };

// console.log(user.age);
// user.age = 30;
// console.log(user.age);

// spread operator
// let obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// let objectInArray = [
//   {
//     nama: "ilham",
//     umur: "18",
//   },
// ];

// let mahasiswa = ["ilham", "alip", "ervian"];

// let npm = ["123123", "456456", "789789"];

// let spread = [obj, ...objectInArray];

// console.log(spread);

// map
// const myArray = new Map([
//   [1, 2, 3, 4],
//   ["nasgor", "miegor", "cilor", "maklor"],
//   [10000, 13000, 500, 200],[true, true, false, true],
// ]);
// console.log(myArray);
// function total(harga, stock, diskon) {
//   let total = (harga * stock)*(1 - diskon);
//   return total;
// }

// let harga = total(120, 20, 0.1);
// console.log(harga);

// const luas = (p, l) => p * l;
// console.log(luas(10,10));

// x merupakan variabel global
// let x = 10;
// function luas(z) {
//   // y merupakan variabel lokal
//   let y = 10;
//   total = x * y * z;
//   return total;
// }

// console.log(luas(10));
// console.log(x);
// console.log(y);
// console.log(z);

// for (let a = 0; a < b; a++) {
//   x += y;
// }
// const  {kopi, luas} = require("./home.js");
// console.log(kopi);
// console.log(luas(10));

// try {
//     console.log("step awal");
//     errorcode
//     console.log("step akhir");
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// }

// jika ingin mengecek value maka di terminal lalu ketik nama file, contoh (node index.js)
