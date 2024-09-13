document.addEventListener('DOMContentLoaded', function() {

    // Get elements
    const counterElement = document.getElementById('counter');
    const incrementBtn = document.getElementById('incrementBtn');

    // Event listener for the increment button
    incrementBtn.addEventListener('click', function() {
        // Get the current counter value as an integer
        const currentValue = parseInt(counterElement.textContent);

        // Show an alert with the un-incremented value
        alert('Current value before increment: ' + currentValue);

        // Increment the counter value and update the display
        counterElement.textContent = currentValue + 1;
    });

});