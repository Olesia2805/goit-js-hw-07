# task-1.js

Using the properties and methods of DOM elements, a script is written that counts and outputs to the console the number of categories in ul#categories, i.e. li.item elements. For each element li.item in the list ul#categories will find and output to the console the text of the element's title (the h2 tag) and the number of elements in the category (all li's nested in it).

# task-2.js

A script has been written to create an image gallery based on an array of data. The HTML contains a list of ul.gallery. To create img elements, data from the array of images objects was used. All gallery elements are added to the DOM in a single add operation. There is a minimal design of the gallery with flexboxes through CSS classes.

# task-3.js

A script has been written which, when text is typed in input#name-input (input event), substitutes its current value in span#name-output as a greeting name. Be sure to clean the value in the input around the edges from spaces. If the input is empty or contains only spaces, the string "Anonymous" should be substituted for the name in the span.

# task-4.js

Napino script for managing the login form. The page does not reload when submitting the form. If there are unfilled fields in the form during submission, display an alert with a warning that 'All form fields must be filled in'. If the user filled in all the fields and sent the form, the values of the fields are collected into an object with two properties, where the key is the name of the inputs, cleaned of spaces around the edges. To access form elements, use the elements property. When submitting the form, display the object with the entered data in the console and clear the form's values fields by using the reset method.

# task-5.js

This is a script that changes the background color of the body element via inline styling on click of button.change-color and sets that color value to the text content of span.color. The getRandomHexColor() function was used to generate a random color. Background on body is set only after clicking button.change-color. Each time the button.change-color element is clicked, the body's background is painted with a new random color. The body's value and span.color's value have the same color.

# task-6.js

There is an input into which the user enters the desired number of elements. After clicking the Create button, a collection with the appropriate number of elements should be rendered (added to the DOM) and the value in the input should be cleared. When the Create button is clicked again, the new collection should render on top of the old collection. After clicking the Destroy button, the collection of items should be cleared.