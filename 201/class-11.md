# Reading Journal

This topic is important because audio and video is all around us and something that we interact with daily. It is important that these functions are handled correctly to allow for the best user experience. The grid function in CSS is also highly important because it helps achieve simpler grid styling when designing a web page layout than what would be possible with just flexbox.

## Reading

### Video and Audio Content

#### 1. Explain how the ability to use video and audio on the web has evolved since the early 2000s.

- Originally video and audio were made possible through 3rd party plugins that interpreted the audio/video and then displayed it on the webpage. While these worked ok they also had introduced vulnerabilities. Eventually these were phased out and replaced by elements embedded directly into the HTML document with interactivity being made possible through JavaScript.

#### 2. Describe the use of the `src` and controls attributes in the `<video>` element.

- The `src` attribute is used exactly like it is when trying to embed an image, it allows you to insert the link to the data you are sourcing. `Controls` allows you to harness the browsers own control interface to play, pause, and repeat the content.

#### 3. Why is it important to have fallback content inside the `<video>` element?

- It's important to have fallback content because it's possible that a user might have a browser that doesn't support the `video` element, in which case you can provide a text or direct link if you wish in order for the user to decide what to do.

#### 4. Write a very short story where <audio> and <video> are characters.

- In the land of Webtopia, one bright and sunny day, audio was walking down a path. He was looking at the ground, wondering if he'd ever meet his match. He knew he was fine just as he was but that he'd be complete if he could just find his significant other. Down that same path, on the other end of the trial, was video. She was daydreaming as she was walking, thinking about how happy she'd be if she could have a partner in life. As they were walking, completely unaware of their surroundings, they collided into each other! As they were getting their bearings, they looked at each other and knew instantly that they had met their "person". From that point on, audio and video were inseparable, bringing joy wherever they went.

### A Complete Guide To Grid

#### 1. How does Grid layout differ from Flex?

- Grid is different from Flex in that Grid works on the x and y axis, where Flex works on one axis only. Grid also allows nesting and positioning of items within their individual cells.

#### 2. Grid container, grid item, and grid line are a few important terms to understand when using Grid. Please describe these terms in a few sentences.

- Grid Container - This has the property `display:grid` applied directly to an element. In doing so, all children of the parent element become grid items.

- Grid Item - All child elements of the parent container are now placed within defined rows and columns of the grid and can be arranged within the grid.

- Grid Line - These are the horizontal or vertical lines that make up the columns or rows of the grid. The grid lines are referenced by their line numbers, or however they are chosen to be labeled.

### Responsive Images

#### 1. Besides making a site visually appealing across different screen sizes, why should developers make images responsive?

- Responsive images also allow for less data usage when viewing on mobile devices. This has a dual effect of also increasing load times. Another plus is that responsive images aid in search engine optimization and will generally allow your site to be found and recommended more easily.

#### 2. Define the following `<img>` attributes srcset and sizes. Write an example of how they are used.

- `srcset` is used to provide different resolution/size options for a user's browser to choose from based on the user's device. `<img srcset="small.png 100w, medium.png 200w, large.png 300w">`

- `sizes` is used to help the browser decide which image from the set to choose based on the pixel width of the user's device. `<img sizes="(max-width: 200px) 100px, (max-width: 300px) 200px, 300px">`

#### 3. How is srcset more helpful for responsive images than CSS or JavaScript?

- `srcset` is superior in the sense that it allows for native HTML integration. This also allows for a quicker load time as there are less server requests being made. This also has the added benefit of having less lines of code which reduces the chance for errors and allows easier maintainability.

## Things I want to know more about.

I don't really have one specific thing I want to know more about at this time. Over all I'd just like to continue experimenting with CSS functionality, better understand JavaScript principles and keep practing with building webpages.