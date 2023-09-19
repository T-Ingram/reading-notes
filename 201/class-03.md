# Reading notes - 03

The topics covered in todays reading material are important because it allows us to organize the material within our pages so that it's easier to read by the users. The covered topics also are important because it will help us to stylize our pages so that they're more attractive to interact with, such as padding boxes and writing interactive arrays.

## Learn HTML

### 1. When should you use an unordered list in your HTML document?

- You can use an unordered list when the items in the group don't need to be in numerical order. An unordered list is represented with a bullet.

### 2. How do you change the bullet style of unordered list items?

- While the bullet is fixed in design in the HTML file, it is able to be customized to some extent through CSS. The CSS element to change the bullet style is `list-style-type`.

### 3. When should you use an ordered list vs an unorder list in your HTML document?

- If there is a reason to have items listed in order then it would be better to use an ordered list. If it's not crucial to have the list in order then an unordered list would be fine. For example, if you were writing a baking recipe then you would want the list ordered so as to add the ingredients in the correct order.  

### 4. Describe two ways you can change the numbers on list items provided by an ordered list?

- When you want to change the numbers on an ordered list, you have quite a few options. One option would be to change the numbers to roman numerals with an `<i>` or `<I>` element. Another option would be to use letters A-Z, this would be achieved by entering either `<a>` or `<A>`.

## Learn CSS

### 1. Describe the CSS properties of margin and padding as characters in a story. What is their role in a story titled: “The Box Model”?

- Margin is the antagonist, he lives to push others away and stay on the outside. Whenever anyone gets too close, margin increases his pixels and shoves them back.

Padding is the protagonist, he is a kind soul that just wants harmony in the world. He enjoys staying close to his friends. He knows when to give his friends some extra space, or when to come in close. His challenge in life is to win margin over and let him know it's ok to be friendly and bring others closer.

### 2. List and describe the four parts of an HTML elements box as referred to by the box model.

- The four parts in the box model are, content box, padding box, border box, and margin box. Each one of these parts has a specific role. The content box is generally the innermost box and wraps directly around your text. The padding box sits between the content and border box and is generally used for spacing. The border box is between the margin box and padding box and wraps around the content and padding boxes. The margin box is the outermost box and wraps around all of the other boxes. The margin box is commonly used for spacing next to other elements.

## Learn JS

### 1. What data types can you store inside of an Array?

- Yes, the given code is a valid array. The values stored can be accessed by calling the people array like this, `people[0][0]` for individual values or `people[0]` for the entire array.

### 2. List five shorthand operators for assignment in javascript and describe what they do.

- `x = y()`   This operator allows you to assign a value to x based on what the function of f() does.
- `x += f()`   This operator will add the operands and assign the resulting value to x.
- `x-= f()`   This operator will subtract the operands and assign the resulting value to x.
- `x *= f()`   This operator will multiply the two operands and assign the resulting value to x.
- `x /= f()`   This operator will divide the two operands and assign the resulting value to x.

### 3. Read the code below and evaluate the last expression and explain what the result would be and why.

- The end result would be '10dog' because (a + c) is added first, false is equal to 0, so the equation becomes (10 + 0) which equals 10. Next we add (10) +'dog' which comes out to '10dog' because 10 is treated as a string ('10') and then concatenates it with the string 'dog', resulting in '10dog'.

### 4. Describe a real world example of when a conditional statement should be used in a JavaScript program.

- If you wanted to build a program that provided different responses based on the weather, you could use a conditional statement to inform the user of the recommended type of attire they could wear to coincide with the stated weather.

### 5. Give an example of when a Loop is useful in JavaScript.

- A loop is useful when you want to repeat something until it meets a specified limit. For instance, if you wanted to display a seven day forecast for temperature, you could write the code to display it for each day only up to 7 days out, at which point the loop would complete its execution.

## Things I want to know more about.

- I definitely want to better understand operators and feel more comfortable using them.
- I also want to get more experience in using arrays.
- Is there a plugin that you can add to vscode to act as a spell checker?
