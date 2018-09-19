class Sorter {
  constructor() {
    // your implementation
    this.arr = [];
    this.fun = (a, b) => a - b;
  }

  add(element) {
    // your implementation
    this.arr.push(element);
  }

  at(index) {
    // your implementation
    return this.arr[index];
  }

  get length() {
    // your implementation
    return this.arr.length;
  }

  toArray() {
    // your implementation
    return this.arr;
  }

  sort(indices) {
    // your implementation
    var sarr = [];
    indices.sort();
    for(var i = 0;i<indices.length;i++)
    {
      sarr[i] = this.arr[indices[i]];
    }
    sarr.sort(this.fun);
    for(var i = 0;i<indices.length;i++)
    {
      this.arr[indices[i]] = sarr[i];
    }
  }

  setComparator(compareFunction) {
    // your implementation
    this.fun = compareFunction;
  }
}

module.exports = Sorter;