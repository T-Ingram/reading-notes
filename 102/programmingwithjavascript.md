# Programming with Javascript

## What is control flow?

* Control flow represents the order that the computer executes statements in a script. The computer runs the code starting from the top and works its way through the script. As it works its way through the script, it looks for things like conditionals, loops, and functions that might tell it to behave differently based on the declared rules.

## What is a JavaScript `function`?

* A Javascript function is a block of reusable code that performs a specific task or combination of tasks. Functions are crucial building blocks of Javascript. It is good practice to declare functions at the top of the script page so as not to create execution issues later on in the page. Within functions are arguments, which act as inputs to the function. Javascript functions should follow proper naming conventions and provide a clear description of the function’s purpose. 

    _Example:_ `function addNumbers(a, b){//function body:code to be executed here}`

## What does it mean to `invoke` - or `call` - a function?

* It means you are commanding a function to execute or run the code within the block. When a function is called you're telling it to perform any and all actions that are within the function. This process involves the parameters all being met, such as predefined variables within the parenthesis, any arguments that are assigned to the variables, and return statements functioning correctly.

## What are the parenthesis () for when you define a function?

* The parenthesis are used to call a function. When using () inside a function, you are telling the function what parameters it can accept as inputs. These inputs are defined prior to the function in the script. They also are used to define where the function’s code begins and ends. Furthermore, they can be left blank inside if the function doesn’t require any inputs. They are essentially the gatekeeper that tells the function when it can execute.

    _Example:_ `function addNumbers(a, b) {return a + b;}   `