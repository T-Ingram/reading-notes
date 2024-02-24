# Reading Journal

Understanding the JavaScript Call Stack is important because it helps me comprehend how functions work together in my code, knowing that JavaScript executes one function call at a time. Learning about Last In, First Out principles help me understand how functions are managed in the call stack. Knowing about JavaScript error messages such as reference error, syntax error, range error, and type error is crucial for debugging and fixing issues in my code, while breakpoints and the debugger tool aid in troubleshooting by allowing me to pause execution and inspect the code step by step.

## Reading

### Understanding the JavaScript Call Stack

#### 1. What is a ‘call’?

- A call is invoking a function inside of your code. When the function is called, it executes that code inside the functions body. This updates the call stack with a new frame that updates parameters, variables, and the return address.

#### 2. How many ‘calls’ can happen at once?

- Due to the nature of JavaScript, it can only execute one call at a time. It will however continue to execute calls until the call stack size is met.

#### 3. What does LIFO mean?

- Last In, First Out.

#### 4. Draw an example of a call stack and the functions that would need to be invoked to generate that call stack.

 **Call Stack:**

- main() > function1() > function2()  with function2() being the last function in.
- function2() executes and returns.
- function1() executes and returns
- main() executes and returns
- the call stack is now empty

#### 5. What causes a Stack Overflow?

- A stack overflow happens when the browser or JavaScript engine becomes too deep with calls and it "overflows". Stacks are a finite size and can only handle so many calls.

### JavaScript error messages

#### 1. What is a ‘reference error’?

- When there's an attempt to access a variable or function but it's not defined or not accessible within the scope of the function, you will get a reference error.

#### 2. What is a ‘syntax error’?

- A syntax error indicates that there is a mistake in the structure of the code, such as a missing parenthesis, a typo in a keyword, or an invalid statement. A syntax error does not conform to the rules of the language.

#### 3. What is a ‘range error’?

- This error may be thrown if an array is created that exceeds the maximum array length, using numeric values that are too large or small for a function, or calling a function too many times that exceeds the stack limit.

#### 4. What is a ‘type error’?

- This error is thrown when you try to use a value of a different type than what was expected.

#### 5. What is a breakpoint?

- A breakpoint is a stopping point in the execution of code that is manually set by the developer within the debugging tool. This is typically used for troubleshooting code.

#### 6. What does the word ‘debugger’ do in your code?

- When you use debugger directly in your code, it sets a breakpoint in the code itself, as opposed to using the browser console to do so.

## Things I want to know more about.

I want to continue to play around with breakpoints and the inspect tool as a whole. There appears to be many different kinds of tools that are available to the developer within the inspect tool.