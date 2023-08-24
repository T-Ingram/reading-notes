# Operators and Loops

## What is an expression in JavaScript?

* An expression is a unit of code that resolves an issue. It’s the foundation of Javascript and can be written as simple or complex blocks of code. Nearly every code that is written in Javascript is a form of an expression. It can also be a combination of values, variables, operators, and functions used to produce a result.

    Here are some examples below:
    
    1. String expression: `“text”`
    2. Boolean expression: `False`
    3. Numeric expression: `10`
    4. Variable expression: `var y = 20;`

## Why would we use a loop in our code?

* Loops are blocks of code that tell the computer to do something repeatedly. They help to automate tasks and therefore cuts down on the potential for errors. Loops can also be written to operate based on user input, this is especially useful when you don’t know how many times a block of code needs to be executed. Using loops in code helps to make our code more readable and efficient.

## When does a `for` loop stop executing?

* The `for` loop statement stops repeating when the specific condition declared in the control statement evaluates to false. There are many steps to the `for` loop statement. Here are the steps that are gone through when this code block is executing; initialization, condition, statement, and afterthought.. There is quite a lot going on in this process, but basically as long as the condition remains `true`, the loop statement will continue to execute. As mentioned before, the loop will terminate once the condition returns `false`.

    Here is an example of a `for` loop:

    `for (initialization; condition; afterthought)
  statement`

## How many times will a while loop execute?

* The `while` loop will execute as long as the control statement returns `true`. How many times the `while` loop repeats depends on the condition before the statement. If the statement continues to return `true` then the loop continues and after each `true` statement it retests the condition until it finally returns `false`, at that point control is passed on to whatever statement is after `while`.  

   Here is an example of a `while` loop:

    `While (condition) {//code to be executed as long as the condition is true-this is also referred to as the statement#}` 