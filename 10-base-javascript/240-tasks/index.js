/*
	Какое будет выведено значение: let x = 5; alert( x++ ); ?

	Чему равно такое выражение: [ ] + false - null + true ?

	Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?

	Чему равна сумма [ ] + 1 + 2?

	Что выведет этот код: alert( "1"[0] )?

	Чему равно 2 && 1 && null && 0 && undefined ?

	Есть ли разница между выражениями? !!( a && b ) и (a && b)?

	Что выведет этот код: alert( null || 2 && 3 || 4 ); ?

	a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?

	Что выведет этот код: alert( +"Infinity" ); ?

	Верно ли сравнение: "Ёжик" > "яблоко"?

	Чему равно 0 || "" || 2 || undefined || true || falsе ?
*/

console.log("Task_1");
console.log([] + false - null + true); //NaN
//
console.log("\nTask_2");
let y = 1;
let x = (y = 2);
console.log(x); //2
//
console.log("\nTask_3");
console.log([] + 1 + 2); //'12'
//
console.log("\nTask_4");
console.log("1"[0]); //1

console.log("\nTask_5");
console.log(2 && 1 && null && 0 && undefined); //null

console.log("\nTask_6");
console.log(!!(1 && 2) === (1 && 2)); //false

console.log("\nTask_7");
console.log(null || (2 && 3) || 4); //3

console.log("\nTask_8");
const a = [1, 2, 3];
const b = [1, 2, 3];
console.log(a === b); //false

console.log("\nTask_9");
console.log(+"Infinity"); //"Infinity"

console.log("\nTask_10");
console.log("Ёжик" > "яблоко"); //false

console.log("\nTask_11");
console.log(0 || "" || 2 || undefined || true || falsе); //2
