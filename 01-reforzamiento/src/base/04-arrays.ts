const myArray: number[] = [1, 2, 3, 4, 5, 6];

myArray.push(+"23");
console.log(myArray);

for (const myNumber of myArray) {
  console.log(myNumber);
}
