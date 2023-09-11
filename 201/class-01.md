# Reading notes - 01

The topics covered in today's reading material matters because as web developers-in-training we need to know not only what we're doing, but the *why* and *how* behind it. In learning the *why* and *how* we'll be able to better connect the dots as to the cause and effect when writing code as well as the reason for the structure as it's developed through the years.

## **How the Internet works**

### 1. Compose a short poem describing how HTTP sends data between computers.

- Client,<br>
Requests data,<br>
Then the server collects,<br>
Data is sent quickly to the,<br>
Client<br>

  *Cinquain Form*

### 2. Describe how HTML, CSS, and JS files are “parsed” in the browser.

- HTML files are read first. The browser then looks for CSS or JavaScript links in order to know what attributes to apply to the HTML file as its executing. As the browser loads the page from the in-memory document object model (DOM), we begin to see a rendered page appear in the browser.

### 3. How can you find images to add to a Website?

- The easiest way to find an image to add to a website is by going to Google, selecting *Tools>Usage rights>Creative Commons licenses* and then right clicking on the photo and either copying the image URL or saving the image directly to your computer.

### 4. How do you create a `string` vs a `number` in JavaScript?

- A `string` is a data type expressed with single or double quotes and is used to manipulate and store textual data.<br>
Example: `('Nice to meet you ' + questionOne + '!');`
- A `number` is a data type that represents an actual number, just like it sounds. This is useful when indicated my a numerical number without any quotes.<br>
Example: `(let variableOne = 1);`

### 5. What is a `variable` and why are they important in JavaScript?

- A variable in JavaScript is what makes our web pages interactive! Variables enable dynamic function within a web page. Some examples include prompts or different displayed values based on user input.

## Introduction to HTML

### 1. What is an HTML attribute?

- An HTML attribute is used to modify the behavior of an element within HTML. Attributes can also be used to provide additional information for an element. Examples of attributes include `href`, `alt`, `src`, `width`, `height`, and `title`.

### 2. Describe the Anatomy of an HTML element.

- An element consists of an opening tag (`<>`), the content within(`text`), and the closing tag(`</>`).

### 3. What is the difference between `article` and `section` element tags?

- The `article` tag is generally used to display an independent article on a site, something that can stand alone. Some examples can include a widget, blog entry, or forum post.
- The `section` tag is simply a generic element and should only be used when there isn't a better element to match the content being placed inside it. 

### 4. What Elements does a “typical” website include?

- A typical website includes, `<!doctype html>`, `<html></html>`, `<head></head>`, `<meta></meta>`, `<title></title>`, `<body></body>`, and `<p></p>` elements.

### 5. How does metadata influence Search Engine Optimization?

- Having appropriate metadata helps search engines find relevant web data more accurately. Properly utilized metadata also helps search engines, such as Google, to understand the context of the web pages which can result in more traffic to your web site.

### 6. How is the `meta` HTML tag used when specifying metadata?

- This element is used to describe the content of the document. It is given attributes such as `charset`, `name`, `content`, or `property`, to name a few. These all help with SEO.

## How to start designing a Website

### 1. What is the first step to designing a Website?

- You need to have an idea and structure it. This can be achieved through pen and paper and possibly a good friend.

### 2. What is the most important question to answer when designing a Website?

- The most important question to answer when designing a website is to ask yourself, "what do you want to accomplish?" All websites need to have a goal or vision or else they're more likely to fail.

## Semantics

### 1. Why should you use an `h1` element over a `span` element to display a top level heading?

- An `h1` element is widely recognized as a top level heading and will therefore cause the text it's wrapped around to be characterized automatically like a main heading. If you use `span` you'll not get the automatic formatting that comes with `h1`. You'll have to manually edit the font, margin, and character type to best match a top level heading.  

### 2. What are the benefits of using semantic tags in our HTML?

- It's recognized as industry best practice to use semantic tags when possible as this will get the best search engine results, aid in accessibility, and make it easier to find mistakes in code when troubleshooting.

## What is JavaScript

### 1. Describe 2 things that *require* JavaScript in the Browser?

- If you want a dynamically interactive function such as a button that prompts or saves user inputted data, you'll need to use JavaScript functions to achieve that.
- If you want the ability to validate data based off predetermined parameters, this must be done through JavaScript as CSS and HTML don't have this ability.

### 2. How can you add JavaScript to an HTML document?

- You can either use the element `script` inline (directly in the HTML document), or you can use reference an external file by using `src=document.js`. It is generally best practice to use an external JavaScript file.
