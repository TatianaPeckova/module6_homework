const randomArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
    debugger;
  }
}

for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    console.log(i);
    debugger;
  }
}