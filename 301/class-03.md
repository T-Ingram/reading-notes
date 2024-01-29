# Reading Journal

This topic is important because passing functions between components is essential to enable communication and data flow between parent and child components. The spread operator is useful for efficiently altering and merging arrays or objects, it also provides a clear syntax for these tasks. Keys are crucial in efficiently rendering and updating components within lists, optimizing performance and maintaining a stable user experience.

## Reading

### React Docs - lists and keys

#### 1. What does `.map()` return?

- The `.map()` method returns a new array by allowing you to go through each element of an existing array, perform a specific operation on each element, gather the results and input them into a new array.

#### 2. If I want to loop through an array and display each value in JSX, how do I do that in React?

- First you would use the `.map()` method. Then, within the `.map()` function, you would iterate through each element of an array and return the JSX elements that represent the values. Each JSX element also needs a unique key to allow for proper rendering.

#### 3. Each list item needs a unique ___.

- Each list item needs a unique **key**.

#### 4. What is the purpose of a key?

- A key aids in uniquely identifying each element in an array. It allows React to more efficiently render and modify these elements.

### The Spread Operator

#### 1. What is the spread operator?

- The spread operator is written as three dots `...`. This operator helps combine or copy arrays or objects in a simplistic syntax.

#### 2. List 4 things that the spread operator can do.

- The spread operator can copy or combine arrays and copy or merge objects within JS.

#### 3. Give an example of using the spread operator to combine two arrays.

- `const arrayOne = [1, 3, 5];`
`const arrayTwo = [2, 4, 6];`

`const combineArray = [...arrayOne, ...arrayTwo];`

#### 4. Give an example of using the spread operator to add a new item to an array.

- `const ogArray = [1, 3, 5];`
`const newArray = [...ogArray, 7];`

#### 5. Give an example of using the spread operator to combine two objects into one.

- `const person = {name: 'John', age: 25, gender: 'male' };`
`const addInfo = {age: 26, city: 'New York' };`

`const updatedPerson = {...person, ...addInfo };`

## Videos

### How to Pass Functions Between Components

#### 1. In the video, what is the first step that the developer does to pass functions between components?

- The developer creates a parent component and a child component. The function is contained in the parent component that is ultimately going to be passed into the child component.

#### 2. In your own words, what does the `handleClick` function do?

- The `handleClick` function takes an event (the click) and handles the input based on predefined actions stated by the developer.

#### 3. How can you pass a method from a parent component into a child component?

- There are just a few short steps needed to pass a parent component into a child component. First, you must define the method in the parent component, then pass the method in as a prop, next access the method in the child component, and finally use the method in the child component.

#### 4. How does the child component invoke a method that was passed to it from a parent component?

- First you must create a method in the parent component that you want to pass, then when rendering the child component, include the method as a prop. Next invoke the method in the child component through props when it's needed.

## Things I want to know more about.

I would like to research, at a greater depth, React component lifecycles to better understand the concept.