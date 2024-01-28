# Reading Journal

Understanding React lifecycle methods is crucial as it allows us to manage the various stages of a component's existence. Distinguishing between state and props is neccessary to effectively control data, with state representing mutable data within a component and props representing immutable data from parent components. This knowledge is essential for maintaining a clear and predictable flow of data in React applications.

## Reading

### React Lifecycle

#### 1. Based off the diagram, what happens first, the `render` or the `componentDidMount`?

- The `render` happens before the `componentDidMount`. The `componentDidMount` occurs after it’s added to the DOM.

#### 2. What is the very first thing to happen in the lifecycle of React?

- The first thing that happens in the lifecycle of React is that the calling of the `constructor` method occurs. This has to occur before `render` can happen.

#### 3. Put the following things in the order that they happen: `componentDidMount`, `render`, `constructor`, `componentWillUnmount`, `React Updates`

- `constructor`, `render`, `componentDidMount`, `React Updates`, `ComponentWillUnmount`.

#### 4. What does `componentDidMount` do?

- The `componentDidMount` method is called after a component has been rendered to the DOM. It’s commonly used to perform tasks that require interaction with the DOM, such as fetching external data ie. API calls.

## Videos

### React State Vs Props

#### 1. What types of things can you pass in the props?

- You can pass many different types of data in as props, such as, functions, objects, arrays, PropTypes, Primitive Data types, and React elements.

#### 2. What is the big difference between props and state?

- To summarize the various differences between props and state, props are external inputs that are passed from parent to child and can not be modified by the child, while state is internal to a component and can be changed the component itself.

#### 3. When do we re-render our application?

- Typically an application will re-render a component when there is a change to the state or property. This can happen when a component is interacted with and needs to pull fetch data.

#### 4. What are some examples of things that we could store in state?

- React is very interactive and therefore is commonly used to store user inputs such as text input, store and manage numeric values, fetching data, and toggling buttons on or off depending on the programing.

## Things I want to know more about.

I want to get a better understanding of React and how to use it. It seems like React has a very practical purpose which makes it very useful in real world applications.