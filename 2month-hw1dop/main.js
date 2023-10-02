const input = prompt("Введите число:");

const num = parseFloat(input);

if (!isNaN(num)) {
  if (num % 2 === 0) {
    console.log("Четное");
  } else {
    console.log("Нечетное");
  }

  if (num > 0) {
    console.log("Положительное");
  } else if (num < 0) {
    console.log("Отрицательное");
  } else {
    console.log("Ноль");
  }
} else {
  console.log("Введите только числа");
}