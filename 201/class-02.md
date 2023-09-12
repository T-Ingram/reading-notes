# Reading notes - 02

The topic covered in todays reading material matters because it covers some basic concepts of JavaScript, CSS and HTML. From symantics to if..else statements, they all have their place and function to help bring a webpage to life while making it easier for the developer to read and troubleshoot if needed.

## Introduction to HTML

### 1. Why is it important to use semantic elements in our HTML?

- We need to use symantic elements in our HTML to keep things appearing and acting as expected by users and browsers. Even though we can use CSS to replicate many functions of elements in HTML, it doesn't mean we should, hence the importance of using symantic elements.

### 2. How many levels of headings are there in HTML?

- There is a total of six heading elements within HTML. They are listed h1-h6, with h1 being the largest and becoming increasingly smaller as the numerical value increases.

### 4. What are some uses for the `sup` and `sub` elements?

- `sup` and `sub` are used mainly when writing mathmatical equations, chemical equations or formulas, as well as including references in a document.  

### 5. When using the `abbr` element, what attribute must be added to provide the full expansion of the term?

- You must use the `title` element within your `abbr` tag in order to provide the explanation of what the abbreviation means. This helps readability as well as aiding in accessibility if someone is visually impaired.

## How CSS is structured

### 1. What are ways we can apply CSS to our HTML?

- CSS can be applied to an HTML document by either using an external, internal, or inline stylesheet. External stylesheets are used with a reference such as `<link href="fileName"/>`. Internal stylesheets are used within the existing `<head>` element of the HTML, indicated by the `<style>` element. Inline stylesheets wil alter only the element they're inserted within, such as `<h1 style="chooseAColor">`.

### 2. Why should we avoid using inline styles?

- First off, it's not industry best practice. Industry best practice is to keep CSS files separate from your content. Second, it complicates the reading and comprehension of the code within the document as it can greatly increase the amount of code used to achieve the same results that a separate CSS file can.

### 3. Review the block of code below and answer the following questions:

- 1. What is representing the selector?

    - All elements with `<h2>` will have the characteristics specified within the curly brackets applied to them.

- 2. Which components are the CSS declarations?

    - Each line within the curly brackets are the declarations. In the code provided this would be `color: black;` and `padding: 5px;`.

- 3. Which components are considered properties?

    - The properties are `color` and `padding`. These set what characteristics you want to apply to the `<h2>` element.

## Learn JS

### 1. What data type is a sequence of text enclosed in single quote marks?

- Strings are enclosed in single quote marks, but can sometimes be enclosed in double quote marks if neccessary.

### 2. List 4 types of JavaScript operators.

- Assignment `=`
- Does not equal `!==`
- Strict equality `===`
- Multiplication `*`

### 3. Describe a real world Problem you could solve with a Function.

- You could set up a function to display how many days are left in the year.

## Making decisions in your code - Conditionals 

### 1. An if statement checks a __ and if it evaluates to ___, then the code block will execute.

- An *if* statement checks a **condition** and if it evaluates to **true**, then the code block will execute.

### 2. What is the use of an `else if`

- This allows you to compare if the condition is true or false. If the `if` statements true then run one code, if it's false then run the  `else` statement and it's included code.

### 3. List 3 different types of comparison operators.

- `===` or `!==`
- `<=` or `>=`
- `<` or `>`

### 4. What is the difference between the logical operator `&&` and `||`?

- `&&` represents *and*, meaning all expressions listed must be true on their own for the entire expression to come back true.
- `||` represents *or*, meaning one or more expressions listed must be true on thier own for the entire expression to come back true.