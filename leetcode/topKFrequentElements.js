// Leetcode 347: Top K Frequent Elements
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 class PriorityQueue {
  constructor() {
    this.items = [];
  }

  heapify(i) {
    let l = i * 2 + 1;
    let r = i * 2 + 2;
    let smallest = i;
    if (l < this.items.length && this.items[l][1] < this.items[i][1]) {
      smallest = l;
    }
    if (r < this.items.length && this.items[r][1] < this.items[smallest][1]) {
      smallest = r;
    }
    if (i !== smallest) {
      this.swap(i, smallest);
      this.heapify(smallest);
    }
  }
    
  size() {
      return this.items.length;
  }

  bottomUpHeapify(i) {
    let parent = Math.floor((i - 1) / 2);
    if (i > 0) {
      if (this.items[i][1] < this.items[parent][1]) {
        this.swap(i, parent);
        this.bottomUpHeapify(parent);
      }
    }
  }

  swap(i, j) {
    const arr = this.items;
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  remove() {
    if (this.size() <= 0) return;
     
    if (this.size() === 1) {
        this.items.pop();
        return;
    }
      
    this.swap(0, this.items.length - 1);
    this.items.pop();
    this.heapify(0);
  }

  insert(value) {
    this.items.push(value);
    this.bottomUpHeapify(this.items.length - 1);
  }
}

var topKFrequent = function (nums, k) {
  let counts = new Map();
  let priorityQueue = new PriorityQueue();
  let len = nums.length;

  // Creating hashmap of frequency count
  for (let i = 0; i < len; i++) {
    if (counts.has(nums[i])) {
      counts.set(nums[i], counts.get(nums[i]) + 1);
    } else {
      counts.set(nums[i], 1);
    }
  }

  // Inserting elements in priorityQueue
  for (const [val, count] of counts.entries()) {
    priorityQueue.insert([val, count]);
    if (priorityQueue.size() > k) {
      priorityQueue.remove();
    } 
  }

  console.log('Priority Queue is', priorityQueue.items);

  // Getting the top k elements from priorityQueue
  return priorityQueue.items.map((val) => val[0]);
};

let nums = [4, 1, -1, 2, -1, 2, 3], k = 2;
console.log(topKFrequent(nums, k));