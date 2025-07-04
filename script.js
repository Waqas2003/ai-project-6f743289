// Add event listener to button
document.querySelector('button').addEventListener('click', function() {
    alert('Learn More button clicked!');
});

// Add event listener to form submit
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
});