# Reading Journal

Understanding REST principles and HTTP verbage helps me better understand how web APIs function, making it easier for me to interact with them. Knowing how to structure URIs allows me to create accessible endpoints, improving the usability of my applications. Learning about HTTP status codes ensures I can understand server responses correctly, allowing me to handle errors and successes effectively in my code.

## Reading

### API Design Best Practices

#### 1. What does REST stand for?

- Representational State Transfer

#### 2. REST APIs are designed around a ____.

- REST API's are designed around a resource.

#### 3. What is an identifier of a resource? Give an example.

- This is a unique identifier that allows clients to access or interact with the resource. An example is the web URL such as https://github.com/T-Ingram.

#### 4. What are the most common HTTP verbs?

- `GET`, `POST`, `PUT`, `DELETE`, `PATCH`.

#### 5. What should the URIs be based on?

- REST API's should be based on Restful practices, such as representing an object uniquely and permanently, using lowercase letters whenever possible, use forward slashes only to represent hierarchical paths, and underscores should not be used.

#### 6. Give an example of a good URI.

- GET /potato/{potatoeid}

#### 7. What does it mean to have a ‘chatty’ web API? Is this a good or a bad thing?

- A chatty web API is used to describe an API design that uses multiple small requests to perform a single operation or retrieve data. This can slow down the website performance and cause an increase in load for the network. Typically this would be a bad thing due to longer latency and increased code complexity. Tthere are some situations where it would be helpful to the user experience, such as if the user has a low band width.

#### 8. What status code does a successful `GET` request return?

- `200 OK`

#### 9. What status code does an unsuccessful `GET` request return?

- `404 Not Found`, `400 Bad Request`, `403 Forbidden`, `401 Unauthorized`. These all depend on the reason for the failure.

#### 10. What status code does a successful `POST` request return?

- `201 Created`

#### 11. What status code does a successful `DELETE` request return?

- `204 No Content`

## Things I want to know more about.

I want to know more about HTTP codes and how the history behind them. How they were decided upon to be the end all be all verbage that the entire world would end up using.
