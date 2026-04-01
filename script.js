const display = document.getElementById('display');
const container = document.getElementById('btn-container');

let currentInput = "";

// Attach ONE event listener to the parent
container.addEventListener('click', (e) => {
    const target = e.target;

    // Only proceed if a button was clicked
    if (!target.matches('button')) return;

    const type = target.dataset.type;
    const value = target.innerText;

    if (type === 'clear') {
        currentInput = "";
        display.innerText = "0";
    } 
    else if (type === 'delete') {
        currentInput = currentInput.slice(0, -1);
        display.innerText = currentInput || "0";
    } 
    else if (type === 'equal') {
        try {
            if (currentInput === "") return;
            
            // Perform calculation
            let result = eval(currentInput);
            
            // Clean up long decimals
            currentInput = Number.isInteger(result) ? result.toString() : result.toFixed(4).toString();
            display.innerText = currentInput;
        } catch {
            display.innerText = "Error";
            currentInput = "";
        }
    } 
    else {
        // Numbers and Operators
        if (currentInput === "" && (value === "0" || value === "00")) return;
        
        currentInput += value;
        display.innerText = currentInput;
    }
});