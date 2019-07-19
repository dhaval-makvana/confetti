function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

setInterval(() => {
    var colorClasses = ['red', 'green', 'blue', 'yellow', 'pink', 'brown'];

    var div = document.createElement('div');
    // var div = document.getElementById('1);
    var randomColor = getRandomInt(6);
    var randomColor = colorClasses[randomColor];
    var randomLeftPosition = getRandomInt(90);
    
    div.classList.add(randomColor);
    div.classList.add('down');
    div.style.left = `${randomLeftPosition}%`;
    div.style.zIndex = 10;

    document.getElementById('display').append(div);

}, 100);
