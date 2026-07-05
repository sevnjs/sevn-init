# `gen` Function Documentation

## Overview

The `gen` function is a utility to create HTML elements dynamically. It accepts multiple parameters to define the type, id, content, class, source, and events for the element. The function can handle various types of content, including strings, HTML elements, arrays, and objects.

## Function Signature

```javascript
self.gen = (elementtype, idin, htmlin, classin, src, event) => { ... }
```

## Parameters

- `elementtype` (string): The type of HTML element to create (e.g., 'div', 'span', 'input').
- `idin` (string): The id to assign to the element.
- `htmlin` (string | HTMLElement | Array): The content to insert into the element. This can be a string, an HTML element, or an array of strings/HTML elements.
- `classin` (string): A string containing class names separated by commas or spaces.
- `src` (string | object): The source attribute for elements like 'img' or 'a'. It can also be an object of attributes.
- `event` (object): An object containing event listeners to attach to the element.

## Flow and Working

1. **Handle Class Names**:
    - If `classin` is provided, replace all commas and semicolons with spaces to create a valid class list.

2. **Create Element**:
    - Create the main element using `document.createElement(elementtype)`.

3. **Set ID**:
    - If `idin` is provided, set it as the id of the element.

4. **Handle Content (`htmlin`)**:
    - If `htmlin` is not undefined:
        - If `htmlin` is not an array:
            - If `htmlin` is a string or an object, set the appropriate property (`innerText`, `value`, `alt`, or `innerHTML`) based on the `elementtype`.
            - If `htmlin` is an HTML element, append it to the created element.
        - If `htmlin` is an array:
            - Create a container element (`arrayholder`) to hold the array items.
            - Iterate over the array and create elements for each item, setting the appropriate properties and appending them to the container.
            - Set the container's innerHTML to the created element.

5. **Set Class Names**:
    - If `classin` is provided, set the class list of the element.

6. **Handle Source (`src`)**:
    - If `src` is provided:
        - If `src` is an object, set attributes using `element.setAttribute`.
        - If `src` is a string, set the appropriate property (`href` or `src`) based on the `elementtype`.

7. **Attach Events**:
    - If `event` is provided, attach event listeners to the element using `element.addEventListener`.

8. **Return Element**:
    - Return the created element.

## Example Usage

```javascript
// Create a div with id 'myDiv', class 'container', and innerHTML 'Hello World'
const myDiv = gen('div', 'myDiv', 'Hello World', 'container');

// Create an input element with id 'myInput', value 'Sample', and class 'input-field'
const myInput = gen('input', 'myInput', 'Sample', 'input-field');

// Create an image element with src 'image.jpg' and alt 'Sample Image'
const myImage = gen('img', null, null, null, 'image.jpg', { alt: 'Sample Image' });

// Create a button with an event listener for 'click'
const myButton = gen('button', 'myButton', 'Click Me', 'btn', null, { click: () => alert('Button Clicked!') });
```

## Error Handling

The function includes a try-catch block to handle any errors that occur during the creation of the element. If an error occurs, it logs the error message to the console.

```javascript
catch (err) {
    console.error("Error during gen(", elementtype, idin, htmlin, classin, src, ")", err);
}
```

## Conclusion

The `gen` function is a versatile utility for creating HTML elements dynamically with various attributes and content types. It simplifies the process of element creation and manipulation in JavaScript.


---

# `gens` and `genp` Functions Documentation

## Overview

The `gens` and `genp` functions are utilities to generate HTML elements as strings. The `gens` function returns the outer HTML of the generated element, while the `genp` function returns the outer HTML with special characters escaped for safe display in HTML as html code.

## `gens` Function

### Function Signature

```javascript
self.gens = (...args) => { ... }
```

### Parameters

The `gens` function accepts the same parameters as the `gen` function:

- `elementtype` (string): The type of HTML element to create (e.g., 'div', 'span', 'input').
- `idin` (string): The id to assign to the element.
- `htmlin` (string | HTMLElement | Array): The content to insert into the element. This can be a string, an HTML element, or an array of strings/HTML elements.
- `classin` (string): A string containing class names separated by commas or spaces.
- `src` (string | object): The source attribute for elements like 'img' or 'a'. It can also be an object of attributes.
- `event` (object): An object containing event listeners to attach to the element.

### Flow and Working

1. **Generate Element**:
    - Call the `gen` function with the provided arguments to create the HTML element.

2. **Convert to String**:
    - Convert the outer HTML of the generated element to a string using `outerHTML`.

3. **Return String**:
    - Return the string representation of the generated element.

### Example Usage

```javascript
// Generate a div with id 'myDiv' and class 'container' as a string
const myDivString = gens('div', 'myDiv', 'Hello World', 'container');
console.log(myDivString); // <div id="myDiv" class="container">Hello World</div>
```

## `genp` Function

### Function Signature

```javascript
self.genp = (...args) => { ... }
```

### Parameters

The `genp` function accepts the same parameters as the `gen` function:

- `elementtype` (string): The type of HTML element to create (e.g., 'div', 'span', 'input').
- `idin` (string): The id to assign to the element.
- `htmlin` (string | HTMLElement | Array): The content to insert into the element. This can be a string, an HTML element, or an array of strings/HTML elements.
- `classin` (string): A string containing class names separated by commas or spaces.
- `src` (string | object): The source attribute for elements like 'img' or 'a'. It can also be an object of attributes.
- `event` (object): An object containing event listeners to attach to the element.

### Flow and Working

1. **Generate Element String**:
    - Call the `gens` function with the provided arguments to generate the outer HTML of the element as a string.

2. **Escape Special Characters**:
    - Replace special characters in the string with their HTML entity equivalents:
        - `&` with `&amp;`
        - `<` with `&lt;`
        - `>` with `&gt;`
        - `</` with `&lt;&#47;`

3. **Return Escaped String**:
    - Return the escaped string representation of the generated element.

### Example Usage

```javascript
// Generate a div with id 'myDiv' and class 'container' as an escaped string
const myDivEscapedString = genp('div', 'myDiv', 'Hello World', 'container');
console.log(myDivEscapedString); // &lt;div id="myDiv" class="container"&gt;Hello World&lt;/div&gt;
```

## Conclusion

The `gens` and `genp` functions provide a convenient way to generate HTML elements as strings. The `gens` function returns the raw outer HTML, while the `genp` function returns the escaped outer HTML for safe display in HTML.