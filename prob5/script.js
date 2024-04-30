document.getElementById('move-btn').addEventListener('click', function() {
    const div = document.getElementById('movable-div');
    const isAtStart = div.style.left === '0px' || div.style.left === '';
    
    if (isAtStart) {
        div.style.left = '90%'; 
    } else {
        div.style.left = '0'; 
    }
});
