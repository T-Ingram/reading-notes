# How to design web pages with CSS

## What is the purpose of CSS

* CSS is a language that controls how documents are styled. CSS can not only change styling, it can also change layout, font color, boarders, backgrounds, etc. Basically, it helps to change a plain HTML document into something more pleasing to the eye.

## What are the three ways to insert CSS into your project

### External CSS 

- With an external style sheet, you will be able to effect your entire website with just one file. First you need to create a CSS file. Then in your HTML file, you must include a reference to the CSS file inside of the `<link>` element.

    ```Example: <head><link rel="stylesheet" href="mystyle.css"><head> ```

### Internal CSS

- With an internal style command, you will be able to effect only one webpage on your website. They need to be entered inside of a `<style>` element inside of the head section.

    ```Example: <style>body {background-color: linen;}h1 {color: maroon;margin-left: 40px;}</style>```

### Inline CSS

- With an inline style command, you will be able to effect only one element. In order for an inline style to take effect, you must insert your style commands inside of the HTML element you wish to change.

    ```Example: <h1 style="color:blue;text-align:center;">This is a heading</h1>```

## Write an example of a CSS rule that would give all <p> elements red text

- Create a CSS file and add the styling rules as followed:

`/* styles.css */
p {
  color: red;
} `/* styles.css */
p {
  color: red;
} 

- Then link the CSS file in the `<head>` section in your HTML document as listed below:


```<head>
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>```
