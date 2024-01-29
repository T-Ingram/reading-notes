# Reading Journal

Controlled components play an important role in managing the state of form elements. This allows for dynamic updates and proper application state, all of which are essential for building interactive and responsive UI's. Ternary operators provide a concise way to express conditional statements, reducing the amount of code and improving code readability. Together, these topics contribute to a UI that is efficient and interactive.

## Reading

### How to use Forms in React

#### 1. What is a ‘Controlled Component’?

- A controlled component is an element that's controlled solely by React's state. Oftentimes this can be controlled by handlers that update the state based on user input. This allows for a more centralized way of handling components.

#### 2. Should we wait to store the users responses from the form into state when they submit the form OR should we update the state with their responses as soon as they enter them? Why.

- Ultimately it depends on the setup of the form and what goal is trying to be achieved. If you were to update the state as the user enters a response then it would dynamically change the state which could be useful if you wanted to show or hide components based on the entered data. One example - when shopping for car parts, you need to select the make, year, and model to narrow down what parts you can purchase that fit that particular vehicle.

- If you wanted to submit an address form then you would be ok to submit the data all at once and change the state in one shot.

#### 3. How do we target what the user is entering if we have an event handler on an input field?

- You would use `event.target.value` whereas `event` is the information about what the user did (ie. click, or type), `target` is the element that triggered the event, and `value` is the data that the user entered into the input field.

### The Conditional (Ternary) Operator Explained

#### 1. Why would we use a ternary operator?

- We use ternary operators because they are a simple and effective way to answer a true/false or yes/no type statement. They also are able to condense the if/else statement into a single line of code which greatly improves readability.

#### 2. Rewrite the following statement using a ternary statement:

`if(x===y){`
  `console.log(true);`
`} else {`
  `console.log(false);`
`}`

- `console.log(x === y ? true : false);`

## Things I want to know more about.

I think I'll be using the inspect tool to take a look at some common auto part websites I visit to see how/if they're using these topics. 