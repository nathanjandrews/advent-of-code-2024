async function part1() {
  const file = Bun.file(__dirname + "/input.txt");
  const input = await file.text();
  const list1 = [];
  const list2 = [];
  for (const line of input.split("\n")) {
    const [num1, num2] = line.split(/\s+/).map((n) => Number.parseInt(n.trim()));
    list1.push(num1);
    list2.push(num2);
  }
  list1.sort();
  list2.sort();

  let sum = 0;
  for (let i = 0; i < list1.length; i++) {
    const num1 = list1[i];
    const num2 = list2[i];
    sum += Math.abs(num1 - num2);
  }

  console.log(sum);
}

async function part2() {
  const file = Bun.file(__dirname + "/input.txt");
  const input = await file.text();
  const list1 = [];
  const list2 = [];
  
  for (const line of input.split("\n")) {
    const [num1, num2] = line.split(/\s+/).map((n) => Number.parseInt(n.trim()));
    list1.push(num1);
    list2.push(num2);
  }

  let sum = 0;
  for (let i = 0; i < list1.length; i++) {
    const num1 = list1[i];
    sum += num1 * list2.filter((n) => n === num1).length;
  }

  console.log(sum);
}

await part1();
await part2();
