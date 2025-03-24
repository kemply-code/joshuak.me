// This function adds a new resource tile to the page
function addResource(name, link) {
    // Get the container where the resources will be added
    const container = document.getElementById('resource-list');
    
    // Create a new div element to hold the resource
    const item = document.createElement('div');
    
    // Add the 'resource-item' class for styling
    item.classList.add('resource-item');
    
    // Create the HTML content for the new resource tile
    item.innerHTML = `<a href="${link}" target="_blank">${name}</a>`;
    
    // Append the new resource item to the container
    container.appendChild(item);
}

// Example usage of the function to add resources dynamically
// You can call this function whenever you want to add a resource
addResource("T1.25 Science Notes", "Science Term 1 Revision Notes.pdf");
