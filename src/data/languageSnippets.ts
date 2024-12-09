import { pythonSnippets } from './pythonSnippets';

export const javascriptSnippets = [
  {
    id: 1,
    code: `function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[0];
  const left = arr.slice(1).filter(x => x < pivot);
  const right = arr.slice(1).filter(x => x >= pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
}`,
    title: "Quick Sort Algorithm"
  },
  {
    id: 2,
    code: `class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}`,
    title: "Binary Tree Node"
  },
  {
    id: 3,
    code: `const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
};`,
    title: "Memoization Function"
  }
];

export const rustSnippets = [
  {
    id: 1,
    code: `fn bubble_sort<T: Ord>(arr: &mut [T]) {
    for i in 0..arr.len() {
        for j in 0..arr.len() - 1 - i {
            if arr[j] > arr[j + 1] {
                arr.swap(j, j + 1);
            }
        }
    }
}`,
    title: "Bubble Sort Implementation"
  },
  {
    id: 2,
    code: `struct User {
    username: String,
    email: String,
    active: bool,
    login_count: u64,
}`,
    title: "Struct Definition"
  }
];

export const languages = [
  { id: 'python', name: 'Python', snippets: pythonSnippets },
  { id: 'javascript', name: 'JavaScript', snippets: javascriptSnippets },
  { id: 'rust', name: 'Rust', snippets: rustSnippets }
];