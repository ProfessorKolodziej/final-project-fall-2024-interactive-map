// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

// Test to make sure my JS was connected to my HTML

console.log("Hello from Ariana!");

// Used ChatGPT to help me create a current time clock in Iran for the index.html.

function updateIranTime() {
    const iranTimeElement = document.getElementById('iranTime');
    const options = {
        timeZone: 'Asia/Tehran',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    };

    const formatter = new Intl.DateTimeFormat([], options);
    iranTimeElement.textContent = formatter.format(new Date());
}

updateIranTime();