# Reading Journal

This topic matters because domain modeling helps us to stay organized and work within the boundaries that are set in front of us. This helps insure the deliverables are exactly what the customer is expecting while promoting team expectations. Constructors are helpful becuase they allow you to specify default values and then apply arguements if needed to customize the output. 

## Reading

### *Domain Modeling*

#### 1. Explain why we need domain modeling.

- Domain modeling helps everyone to be on the same page. It also conveys what is important to have in software and what isn't. Basically, it's a way to keep software and ideas clearly organized, which can be helpful when trying to provide deliverables to a client.

### *HTML Table Basics*

#### 1. Why should tables not be used for page layouts?

- Tables are no longer useful for page layout use due to browser adoption of CSS. Tables are by nature complicated and therefore hinder accessibility for people with special needs. Due to their complexity, they are also harder to debug the code and may not respond correctly to layout containers.

#### 2. List and describe 3 different semantic HTML elements used in an HTML `<table>`.

- `<table>` is the tag used to put content into. This is the first semantic HTML element that must be used to create a table of any kind.

- `<td>` (table data) is the smallest container and is used for a table cell when creating a table.

- `<tr>` (table row) is used to create a row within the table. It must be used before and at the end of all `<td>` tags in order to close them.

### *Introducing Constructors*

#### 1. What is a constructor and what are some advantages to using it?

- A constructor is used when you want to initialize an object's properties and default values. It also allows you to easily create multiple objects with the same initial properties, reducing the chance of error within your code. Constructors can also accept arguments to customize the object's properties during creation.

#### 2. How does the term this differ when used in an object literal versus when used in a constructor?

- `this` when used in an object literal, is referring to the object itself, as it sits within the current object.

- `this` when used in a constructor, refers to the newly created object that is being initialized by the function. This new object then becomes the reference for `this`.

### *Object Prototypes Using A Constructor*

#### 1. Explain prototypes and inheritance via an analogy from your previous work experience.

- Going off my experience as a public transportation fleet supervisor, a prototype would be like a build spec list that contains the basic requirements that each bus must have to adhere to FTA, DOT and ADA standards. An inheritance would be like taking a new bus, applying all the basic elements, and then adding unique features that will make it perform its specific route or task at optimum efficiency.

## Things I want to know more about.

I'd like to learn more about constructors and see real life code examples of them in action. 