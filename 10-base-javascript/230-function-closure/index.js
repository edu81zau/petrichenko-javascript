let value = "Сюрприз!";

function f() {
  let value = "ближайшее значение";
  console.log(1, value);
  function g() {
    console.log(2, value);
    debugger; // в консоли: напишите alert(value); Сюрприз!
  }

  return g;
}
let g = f();
console.log(3, value);
g();
console.log(4, value);
