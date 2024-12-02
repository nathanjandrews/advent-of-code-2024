async function part1() {
  const file = Bun.file(__dirname + "/input.txt");
  const input = await file.text();
  let numSafe = 0;
  for (const line of input.split("\n")) {
    const numbers = line.split(/\s+/).map((n) => Number.parseInt(n.trim()));
    let mode = "unset";
    let safe = true;
    for (let i = 1; i < numbers.length; i++) {
      const n1 = numbers[i - 1];
      const n2 = numbers[i];

      const difference = Math.abs(n1 - n2);
      const sign = Math.sign(n1 - n2);

      if (difference === 0 || difference > 3) {
        safe = false;
        break;
      }

      if (mode === "unset") {
        if (sign < 0) {
          mode = "ascending";
        } else {
          mode = "descending";
        }
      } else {
        if (mode === "ascending" && sign > 0) {
          safe = false;
          break;
        }
        if (mode === "descending" && sign < 0) {
          safe = false;
          break;
        }
      }
    }

    if (safe) {
      numSafe++;
    }
  }

  console.log(numSafe);
}

async function part2() {
  const file = Bun.file(__dirname + "/input.txt");
  const input = await file.text();
  let numSafe = 0;
  for (const line of input.split("\n")) {
    const numbers = line.split(/\s+/).map((n) => Number.parseInt(n.trim()));
    if (isSafe(numbers)) {
      numSafe++;
      continue;
    }

    for (let i = 0; i < numbers.length; i++) {
      const arr = numbers.toSpliced(i, 1);
      if (isSafe(arr)) {
        numSafe++;
        break;
      }
    }
  }

  console.log(numSafe);
}

function isSafe(numbers: number[]) {
  let mode = "unset";
  for (let i = 1; i < numbers.length; i++) {
    const n1 = numbers[i - 1];
    const n2 = numbers[i];

    const difference = Math.abs(n1 - n2);
    const sign = Math.sign(n1 - n2);

    if (difference === 0 || difference > 3) {
      return false;
    }

    if (mode === "unset") {
      if (sign < 0) {
        mode = "ascending";
      } else {
        mode = "descending";
      }
    } else {
      if (mode === "ascending" && sign > 0) {
        return false;
      }
      if (mode === "descending" && sign < 0) {
        return false;
      }
    }
  }

  return true;
}

await part1();
await part2();
