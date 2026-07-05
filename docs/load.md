# `load` Function Documentation

## Overview

The `load` function is a utility to dynamically load various types of resources into the document. It supports loading JavaScript files, CSS files, SCSS files, HTML files, and metadata from objects. The function can handle both single resource and arrays of resources.

## Function Signature

```javascript
self.load = (srcList, pos = "head") => { ... }
```

## Parameters

- `srcList` (string | Array): The URL or an array of URLs of the resources to load. It can also be an object containing metadata.
- `pos` (string): The position where the resource will be appended. It can be 'head' or 'body'. The default value is 'head'.

## Flow and Working

1. **Initialize Position**:
    - If `pos` is not provided, set it to 'head'.

2. **Check Type of `srcList`**:
    - If `srcList` is an array, iterate over each item in the array and determine the type of resource based on its extension.
    - If `srcList` is not an array, determine the type of resource based on its extension.

3. **Determine Resource Type**:
    - For each resource, extract the file extension to determine its type:
        - `.js`: Load JavaScript file using `loadjs`.
        - `.css`: Load CSS file using `loadcss`.
        - `.scss`: Load SCSS file using `getfile` and `loadscss`.
        - If the resource is an object, load metadata using `loadMetaFromObject`.

4. **Error Handling**:
    - The function includes a try-catch block to handle any errors that occur during the loading process. If an error occurs, it logs the error message to the console.

## Example Usage

### Loading a Single JavaScript File

```javascript
// Load a JavaScript file into the head
load('script.js');
```

### Loading Multiple Resources

```javascript
// Load multiple resources into the head
load(['style.css', 'script.js', 'content.html']);
```

### Loading a Resource into the Body

```javascript
// Load a JavaScript file into the body
load('script.js', 'body');
```

### Loading Metadata from an Object

```javascript
// Load metadata from an object into the head
const metaData = {
    title: 'My Page',
    description: 'This is a description of my page.',
    type: 'website',
    url: 'https://example.com',
    image: 'https://example.com/image.jpg',
    logo: 'https://example.com/logo.png',
    site_name: 'Example Site'
};
load(metaData);
```

## Conclusion

The `load` function is a versatile utility for dynamically loading various types of resources into the document. It supports loading JavaScript files, CSS files, SCSS files, HTML files, and metadata from objects. The function can handle both single resource and arrays of resources, making it a powerful tool for dynamic content loading.



---


# `loadjs`, `loadcss`, and `loadMetaFromObject` Functions Documentation

## Overview

The `loadjs`, `loadcss`, and `loadMetaFromObject` functions are utilities to dynamically load JavaScript files, CSS files, and metadata into the document. These functions help in dynamically adding resources to the document head or body.

## `loadjs` Function

### Function Signature

```javascript
self.loadjs = (src, pos = 'head') => { ... }
```

### Parameters

- `src` (string): The URL of the JavaScript file to load.
- `pos` (string): The position where the script will be appended. It can be 'head' or 'body'. The default value is 'head'.

### Flow and Working

1. **Create Script Element**:
    - Create a `script` element using `document.createElement("script")`.
    - Set the `type` attribute to 'text/javascript'.
    - Set the `src` attribute to the provided URL.
    - Set the `async` and `defer` attributes to ensure the script loads asynchronously.

2. **Append Script Element**:
    - Append the script element to the specified position ('head' or 'body').

### Example Usage

```javascript
// Load a JavaScript file into the head
loadjs('script.js');

// Load a JavaScript file into the body
loadjs('script.js', 'body');
```

## `loadcss` Function

### Function Signature

```javascript
self.loadcss = (link, pos = 'head') => { ... }
```

### Parameters

- `link` (string): The URL of the CSS file to load.
- `pos` (string): The position where the link element will be appended. It can be 'head' or 'body'. The default value is 'head'.

### Flow and Working

1. **Create Link Element**:
    - Create a `link` element using `document.createElement("link")`.
    - Set the `href` attribute to the provided URL.
    - Set the `rel` attribute to 'stylesheet'.
    - Set the `type` attribute to 'text/css'.

2. **Append Link Element**:
    - Append the link element to the specified position ('head' or 'body').

### Example Usage

```javascript
// Load a CSS file into the head
loadcss('style.css');

// Load a CSS file into the body
loadcss('style.css', 'body');
```

## `loadMetaFromObject` Function

### Function Signature

```javascript
self.loadMetaFromObject = (obj, pos) => { ... }
```

### Parameters

- `obj` (object): An object containing metadata to load. The keys represent the meta attribute names, and the values represent the meta attribute values.
- `pos` (string): The position where the meta elements will be appended. It can be 'head' or 'body'.

### Flow and Working

1. **Iterate Over Object Keys**:
    - Iterate over the keys of the provided object.

2. **Create Meta Element**:
    - For each key-value pair, create a `meta` element using `document.createElement("meta")`.
    - Set the `name` attribute to the key.
    - Set the `content` attribute to the value.
    - If the key is one of the Open Graph properties (e.g., 'title', 'description', 'type', 'url', 'image', 'logo', 'site_name'), set the `property` attribute to `og:key`.

3. **Append Meta Element**:
    - Append the meta element to the specified position ('head' or 'body').

### Example Usage

```javascript
// Load metadata from an object into the head
const metaData = {
    title: 'My Page',
    description: 'This is a description of my page.',
    type: 'website',
    url: 'https://example.com',
    image: 'https://example.com/image.jpg',
    logo: 'https://example.com/logo.png',
    site_name: 'Example Site'
};
loadMetaFromObject(metaData, 'head');
```

## Conclusion

The `loadjs`, `loadcss`, and `loadMetaFromObject` functions provide a convenient way to dynamically load JavaScript files, CSS files, and metadata into the document. These functions support appending resources to both the head and body of the document, making them versatile tools for dynamic content loading.