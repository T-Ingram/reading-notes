# Reading notes - 04

Starting off with our reading, creating links through HTML is important because without them the web would be much less of a "web". Links allow us to share important information and references with the ease of simply pressing a mouse button. It is also important to know the basic sturcture of HTML without the added complexity of CSS styling. With a strong understanding of the basics, we can more confidently build upon that foundation. In order to speed up code writing and minimize potential areas of complexity, we can utilize functions to quickly repeat code throughout our JS document. This also helps readability and makes potential debugging slightly simpler.

## Learn HTML

### Creating Hyperlinks

#### 1. To create a basic link, we wrap text or other content inside what element?

- You use an anchor `<a>`  element. This will create a basic link around whatever is inside of the opening and closing element.

#### 2. The href attribute contains what information?

- The `href`, otherwise known as a hypertext reference, is an attribute that allows you to enter a URL for the `<a>` element to grab.

#### 3. What are some ways we can ensure links on our pages are accessible to all readers?

- We can use clear, descriptive wording and not repeat redundant words like "link to". We can also use the `<title>` attribute to provide even more information about the website being linked. It's important to make our pages accessible also in case a link becomes broken the reader can still get an idea of what it was supposed to show.

## CSS Layout

### CSS Layout: Normal Flow CSS Layout: Positioning

#### 1. What is meant by “normal flow”?

- Normal flow describes how a web page will load without applying CSS styling elements. Normal flow is basically what we see when an HTML document loads by itself. It simply loads from top to bottom and displays basic styling cues such as bold, italics, and simple lists.

#### 2. What are a few differences between block-level and inline elements?

- Block-level elements create formatting across the entire space of their parent containers. They can create breaks before or after themselves. Inline elements only affect the content within the container and can be divided up within the larger parent container. Often inline elements are used to highlight individual parts of the context within.

#### 3. ___ positioning is the default for every html element.

- Static positioning is the default for every HTML element.

#### 4. Name a few advantages to using absolute positioning on an element.

- Absolute positioning is unique in the way it separates the element completely apart from the normal flow within the document. This allows the element to be customized in its own layer. Another notable advantage is that it is no longer susceptible to margin collapsing.

#### 5. What is a key difference between fixed positioning and absolute positioning?

- A fixed position is just what it says, stuck to a specific spot on the screen. If you scroll up or down, the container stays in the same spot. In an absolute position scenario, the element is assigned to the closest container and moves with that container.

## Learn JS

### Functions – Reusable Blocks of Code

#### 1. Describe the difference between a function declaration and a function invocation.

- A function declaration is when you are defining the code to be ran as a function, which you will call (invoke) later on throughout your file. A function invocation is simply calling your function to be ran later on in your file.

#### 2. What is the difference between a parameter and an argument?

- A parameter is assigned to a specific function and is defined when the function is being created. The parameter is a value that the function is expecting to receive in order to execute properly. An argument is the actual value that is used to replace the parameter in a function. An argument must be an actual object, value, or data to properly execute the function the way it was designed.

## Miscellaneous

### 6 Reasons for Pair Programming

#### 1. Pick 2 benefits to pair programming and reflect on how these benefits could help you on your coding journey.

- The ability to show a potential employer that I can work well with another programmer is extremely important to me. As someone who has hired others, it's crucial that a new hire is able to integrate with the current crew without causing a disruption. I hope to learn more so that I can be a better help to my potential coworker. I also believe that engaged collaboration could be extremely helpful to fight distractions and mental blocks. As it was stated, having some accountability can prove to be very helpful.

## Things I want to know more about.

- I want to learn more about fixed positioning and absolute positioning. I've read examples through the reading, but would like to play around more with it when I have the freetime.
