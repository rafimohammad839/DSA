function appendAndDelete(s, t, k) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t[i]) {
      count++;
      continue;
    }
    break;
  }

  let t_len = s.length + t.length;
  if ((t_len <= 2 * count + k && t_len % 2 === k % 2) || t_len < k) {
    return "Yes";
  } else {
    return "No";
  }
}

let s =
  "asdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcv";
let t =
  "bsdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcv";
let k = 100;
console.log(appendAndDelete(s, t, k));
