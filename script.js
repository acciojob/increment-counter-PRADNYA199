//your JS code here. If required.

document.getElementById("incrementBtn").addEventListener("click", function() {
    
    let counterElement = document.getElementById("counter");
    
    
    let currentValue = parseInt(counterElement.textContent);
    
   
    alert("Current value before increment: " + currentValue);
    
    
    counterElement.textContent = currentValue + 1;
});
