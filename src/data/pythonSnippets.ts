export const pythonSnippets = [
  {
    id: 1,
    code: `def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)`,
    title: "Fibonacci Sequence"
  },
  {
    id: 2,
    code: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None`,
    title: "Linked List Node"
  },
  {
    id: 3,
    code: `try:
    result = x / y
except ZeroDivisionError:
    print("Cannot divide by zero")`,
    title: "Exception Handling"
  },
  {
    id: 4,
    code: `numbers = [1, 2, 3, 4, 5]
squares = [x**2 for x in numbers]`,
    title: "List Comprehension"
  },
  {
    id: 5,
    code: `def decorator(func):
    def wrapper():
        print("Before function")
        func()
        print("After function")
    return wrapper`,
    title: "Decorator Pattern"
  }
];