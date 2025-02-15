function Bold() {
    document.execCommand('bold');
}

function Italic() {
    document.execCommand('italic');
}

function Underline() {
    document.execCommand('underline');
}
function reloadPage() {
    window.location.reload();
}

function changeFontSize(action) {
    const textArea = document.getElementById("text-area");
    let currentSize = window.getComputedStyle(textArea).getPropertyValue('font-size');
    let newSize = parseFloat(currentSize);

    if (action === 'increase') {
        newSize += 2;
    } else if (action === 'decrease') {
        newSize -= 2;
    }

    textArea.style.fontSize = newSize + "px";
}


function changecolor() {
    const textArea = document.getElementById("text-area");
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    textArea.style.color = randomColor;
}

// Function to change font family
let fontIndex = 0;
const fontFamilies = ['Arial', 'Georgia', 'Courier New', 'Times New Roman', 'Verdana', 'sans-serif', 'serif'];

function changefontfamily() {
    const textArea = document.getElementById("para");
    fontIndex = (fontIndex + 1) % fontFamilies.length; // Cycle through the fonts
    textArea.style.fontFamily = fontFamilies[fontIndex];
}