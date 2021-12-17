class SumApp {
  // Add you solution here
  constructor(number) {
    this.numbers = [];
    this.sum = 0;
  }

  addNumber(n) {
    // put number in array numbers
    this.numbers.push(n);
  }

  getSum() {
    // take each item of array numbers and add to sum
    this.numbers.forEach((theNumber) => {
      this.sum += theNumber;
    });

    // if is there anything in array numbers, return the sum, otherwise return 0
    if (this.numbers.length > 0) {
      return this.sum;
    } else {
      return 0;
    }
  }

  reset() {
    // make array numbers empty
    this.numbers = [];
  }
}
