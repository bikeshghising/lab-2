//  Function to update the background color based on RGB input values
window.onload = function() {

    // Select the input elements for red, green, and blue color values
    const redInput = document.querySelector('#red');
    const greenInput = document.querySelector('#green');
    const blueInput = document.querySelector('#blue');
    // Select the body element of the page
    const bodyElement = document.body;
    
    // Function to change the background color based on RGB input values
    function changeColor() {
        // Get the current values from the input fields
        const r = redInput.value;
        const g = greenInput.value;
        const b = blueInput.value;

        // RGB color string using the input values
        const color = 'rgb(' + r + ',' + g + ',' + b + ')';
        
        // Apply the generated color to the background of the body
        bodyElement.style.backgroundColor = color;
        
        // Log the color value to the console for debugging
        console.log('Color changed to:', color);
    }
    // changeColor function to the input event of each color slider
    redInput.oninput = changeColor;
    greenInput.oninput = changeColor;
    blueInput.oninput = changeColor;
   
    // Calling changeColor to set the initial color
    changeColor();
};


