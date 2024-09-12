
// let ism="Abdulloh"

// console.log(ism.length);nechta harif borligi
// console.log(ism.trim()); keraksiz probelarni ochiradi
// console.log(ism.toUpperCase());hariflarni kota qilish
// console.log(ism.toLocaleLowerCase());hariflani kichkaytiradi
// console.log(ism.endsWith("h"));oxiri shunaqami
// console.log(ism.startsWith("A"));boshi shunaqami
// console.log(ism.includes("a"));ichida shunaqa harif bomi
// console.log(ism.indexOf("d"));birinchi kelgan shu harf indexini topadi
// console.log(ism.lastIndexOf("l"));oxiridan birinchi kelgan shu harf indexini topadi
// console.log(ism.repeat(3));shuncha marta qaytaradi
// console.log(ism.replace("A","x"));xariflani joyini almashtirib qoyadi
// console.log(ism.replaceAll("d","uz"));hariflani ozgartiradi





let ism = prompt("Ismingizni kiriting")
let harf = prompt("Harf kiriting")


if (ism.includes(harf)) {
    alert((ism) + " Isimning ichida " + (harf) + " harfi mavjud");
} else {
    alert((ism) + " Isimning ichida " + (harf) + " harfi mavjud emas")
}










