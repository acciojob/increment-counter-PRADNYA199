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

() => {
    // Visit the base URL of the application
    cy.visit(baseUrl);

    // Check the content of the alert before incrementing
    cy.on('window:alert', alertText => {
        // Ensure the alert shows the full message
        expect(alertText).to.equal('Current value before increment: 0');
    });

    // Click the increment button
    cy.get('#incrementBtn').click();

    // Verify the counter was incremented (optional)
    cy.get('#counter').should('have.text', '1');
}