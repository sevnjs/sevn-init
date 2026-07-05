# `cssvar` Function Documentation

## Overview

The `cssvar` function is a utility to get or set CSS custom properties (variables) on the root element (`:root`). It allows you to dynamically manipulate CSS variables in your web application.

## Function Signature

```javascript
self.cssvar = (name, value) => { ... }
```

## Parameters

- `name` (string): The name of the CSS variable. If the name does not start with `--`, it will be automatically prefixed with `--`.
- `value` (string): The value to set for the CSS variable. If not provided, the function will return the current value of the CSS variable.

## Flow and Working

1. **Get Root Element**:
    - Use `document.querySelector(':root')` to select the root element.

2. **Get Computed Styles**:
    - Use `getComputedStyle` to get the computed styles of the root element.

3. **Prefix Variable Name**:
    - If the `name` parameter does not start with `--`, prefix it with `--`.

4. **Set or Get CSS Variable**:
    - If the `value` parameter is provided, use `style.setProperty` to set the CSS variable on the root element.
    - If the `value` parameter is not provided, use `getPropertyValue` to get the current value of the CSS variable from the computed styles.

5. **Return Value**:
    - Return the current value of the CSS variable.

## Example Usage

### Setting a CSS Variable

```javascript
// Set the CSS variable --main-bg-color to 'blue'
cssvar('main-bg-color', 'blue');
```

### Getting a CSS Variable

```javascript
// Get the current value of the CSS variable --main-bg-color
const bgColor = cssvar('main-bg-color');
console.log(bgColor); // 'blue'
```

## Conclusion

The `cssvar` function is a simple and effective utility for manipulating CSS custom properties. It allows you to dynamically set and get CSS variables, providing greater flexibility in styling your web application.