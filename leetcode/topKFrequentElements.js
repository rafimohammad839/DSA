// Leetcode 347: Top K Frequent Elements
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// -------------------------------------- Solution 1 | Space - O(N + k) | Time - O(NLogk)
// class PriorityQueue {
//   constructor() {
//     this.items = [];
//   }

//   heapify(i) {
//     let l = i * 2 + 1;
//     let r = i * 2 + 2;
//     let smallest = i;
//     if (l < this.items.length && this.items[l][1] < this.items[i][1]) {
//       smallest = l;
//     }
//     if (r < this.items.length && this.items[r][1] < this.items[smallest][1]) {
//       smallest = r;
//     }
//     if (i !== smallest) {
//       this.swap(i, smallest);
//       this.heapify(smallest);
//     }
//   }

//   size() {
//     return this.items.length;
//   }

//   bottomUpHeapify(i) {
//     let parent = Math.floor((i - 1) / 2);
//     if (i > 0) {
//       if (this.items[i][1] < this.items[parent][1]) {
//         this.swap(i, parent);
//         this.bottomUpHeapify(parent);
//       }
//     }
//   }

//   swap(i, j) {
//     const arr = this.items;
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//   }

//   remove() {
//     if (this.size() <= 0) return;

//     if (this.size() === 1) {
//       this.items.pop();
//       return;
//     }

//     this.swap(0, this.items.length - 1);
//     this.items.pop();
//     this.heapify(0);
//   }

//   insert(value) {
//     this.items.push(value);
//     this.bottomUpHeapify(this.items.length - 1);
//   }
// }

// var topKFrequent = function (nums, k) {
//   let buckets = new Map();
//   let priorityQueue = new PriorityQueue();
//   let len = nums.length;

//   // Creating hashmap of frequency count
//   for (let i = 0; i < len; i++) {
//     if (buckets.has(nums[i])) {
//       buckets.set(nums[i], buckets.get(nums[i]) + 1);
//     } else {
//       buckets.set(nums[i], 1);
//     }
//   }

//   // Inserting elements in priorityQueue
//   for (const [val, count] of buckets.entries()) {
//     priorityQueue.insert([val, count]);
//     if (priorityQueue.size() > k) {
//       priorityQueue.remove();
//     }
//   }

//   console.log("Priority Queue is", priorityQueue.items);

//   // Getting the top k elements from priorityQueue
//   return priorityQueue.items.map((val) => val[0]);
// };

//-------------------------------------- Solution 2 | Space - O(N) | Time - O(N)
var topKFrequent = function (nums, k) {
  let map = new Map();
  let buckets = Array(nums.length + 1)
    .fill(0)
    .map(() => Array(0));
  let results = [];
  let counter = 0;
  // Map for frequency count of each element
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }

  // Applying bucket sort principle to insert elements according to their frequencies as indices
  for (const [val, count] of map.entries()) {
    buckets[count].push(val);
  }

  // Looping through buckets array and getting elements from end
  for (let i = buckets.length - 1; i >= 1 && results.length < k; i--) {
    if (buckets[i].length) {
      results.push(...buckets[i]);
    }
  }
  return results;
};

let nums = [
    3, 2, 3, 1, 2, 4, 5, 5, 6, 7, 7, 8, 2, 3, 1, 1, 1, 10, 11, 5, 6, 2, 4, 7, 8,
    5, 6,
  ],
  k = 10;
console.log(topKFrequent(nums, k));
