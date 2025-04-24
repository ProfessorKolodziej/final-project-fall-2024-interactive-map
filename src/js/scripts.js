// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

// Test to make sure my JS was connected to my HTML

console.log("Hello from Ariana!");

// Used ChatGPT for help with the SVG interactive map

document.querySelectorAll('#map path').forEach(region => {
    region.addEventListener('click', () => {
        const regionName = region.id;
        alert("You clicked on: " + regionName);
    });

    region.addEventListener('mouseenter', () => {
        region.style.fill = '#99f';
    });

    region.addEventListener('mouseleave', () => {
        region.style.fill = '';
    });
});

