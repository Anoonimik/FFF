// Event handler for page load
window.addEventListener('load', function() {
    // Get elements
    var timeElement = document.getElementById('time');
    var orientationButton = document.getElementById('orientation-button');

    // Set current time
    function setCurrentTime() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var timeString = hours + ':' + (minutes < 10 ? '0' + minutes : minutes);
        timeElement.textContent = timeString;
    }

    // Update time every minute
    setInterval(setCurrentTime, 60000);

    // Event handler for orientation change button click
    orientationButton.addEventListener('click', function() {
        var desktopElement = document.querySelector('.desktop');
        desktopElement.classList.toggle('landscape');
    });
});
