/*ОБЄДНУЄМО ДВА МАСИВА*/
/*1-й спосіб*/
var arr = ["a", "b", "c"];
var arr1 = [1, 2, 3];
for (var i = 0; i < arr1.length; i++){
 arr.push(arr1[i]);
}
console.log (arr);
console.log("arr.length =", arr.length);

/*2-й спосіб*/
var newarr = arr.concat(arr1);
console.log(arr);
console.log("arr.length =", arr.length);

/*ДОБАВЛЯЄМО 1, 2, 3, В КІНЕЦЬ МАСИВУ arr2 ["a", "b", "c"]*/
var arr2 = ["a", "b", "c"];
for (var i = 1; i < 4; i++) {
  arr2.push(i);
}
console.log(arr2);
console.log("arr.length =", arr2.length);

/*Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1]*/
var arr3 = [1, 2, 3];
console.log(arr3);
arr3 = arr3.reverse();
console.log(arr3);

/*Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6*/
var arr3 = [1, 2, 3];
for (var i = 6; i > 3; i--) {
  arr3.unshift(i);
}
console.log(arr3);
console.log("arr.length =", arr3.length);

/*Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5]*/
var arr4 = [1, 2, 3, 4 ,5];
console.log(arr4);
console.log("arr.length =", arr4.length);
var arr5 = arr4.splice(1, 2);
console.log(arr4);
console.log("arr.length =", arr4.length);
console.log(arr5);
console.log("arr.length =", arr5.length);
