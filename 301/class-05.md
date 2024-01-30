# Reading Journal

Knowing about higher-order functions is important because it helps us write code that is modular and efficient, making programs more adaptable. The single responsibility principle is about making sure each part piece of code does only one specific thing, making it easier to understand and maintain. These ideas are important for building programs that are easy to use and change.

## Reading

### React Docs - Thinking in React

#### 1. What is the `single responsibility principle` and how does it apply to components?

- The single responsibility principle says that each component in React should have a single and well defined responsibility. This aids in maintainability and keeping components modular.

#### 2. What does it mean to build a ‘static’ version of your application?

- This means that initially you should set up the framework of your application without enabling dynamic behavior. This allows for a solid framework before adding in more complexity.

#### 3. Once you have a static application, what do you need to add?

- Once you’ve completed your static application, you’ll want to add state management to handle user inputs, conditional rendering for a dynamic experience, and validation feedback to assist in the user experience.

#### 4. What are the three questions you can ask to determine if something is state?

- Does the value change over time?

- Is the value used to render the user interface?

- Is the value specific to an individual component?

#### 5. How can you identify where state needs to live?

- To identify where a state needs to live, it's necessary to evaluate the entire scope of data. We need to identify if it can be managed as a local state or if it's shared among other components as well as how it's intended to be modified through user interactions.

### Higher-Order Functions

#### 1. What is a “higher-order function”?

- A higher order function is a function that takes one or more functions in as arguments and returns a new function. This ability allows for more modular and flexible code.

#### 2. Explore the `greaterThan` function as defined in the reading. In your own words, what is line 2 of this function doing?

- Line 2 is a function that returns another function. The returned function checks the argument `m` against the original value `n` and evaluates if it's true or not.

#### 3. Explain how either map or reduce operates, with regards to higher-order functions.

- Map takes a function as an argument and applies it to each element of an array. As it does this it returns a new array with the new elements.

- Reduce takes a function as its first argument and an initial value for the accumulator as its second argument. It then applies a callback function that reduces an array to a single value.

## Things I want to know more about.

I would like to know more about higher order functions because they seem complex. They seem to have a lot of moving parts to keep track of and it's pretty intimidating.