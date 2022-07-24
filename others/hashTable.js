class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }
  hash(str) {
    let total = 0;
    for (let i = 0; i < str.length; i++) {
      total += str.charCodeAt(i);
    }
    return total % this.size;
  }
  set(key, value) {
    let index = this.hash(key);
    this.table[index] = value;
  }
  get(key) {
    let index = this.hash(key);
    return this.table[index];
  }
  remove(key) {
    let index = this.hash(key);
    this.table[index] = undefined;
  }
  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i] !== undefined) {
        console.log(i, this.table[i]);
      } 
    }
  }
}

let ht = new HashTable(10);
ht.set("name", "Kirsten Dunst");
ht.set("age", 47);
console.log("Before deleting...")
ht.display();
ht.remove("name")
console.log("After deleting...")
ht.display();