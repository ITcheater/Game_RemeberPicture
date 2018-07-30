var gameField = document.getElementById('game');
var newGameBut = document.getElementById('newGameBut');

var imgUrls=[
    'image/0.png',
    'image/1.png',
    'image/2.png',
    'image/3.png',
    'image/4.png',
    'image/5.png',
    'image/6.png',
    'image/7.png',
    'image/8.png',
    'image/9.png'
];
var newImgUrls = imgUrls.concat(imgUrls);

var addImgFunc =(function addIMG() {
    var node = document.createElement('div');
    newImgUrls.sort(randomImg);
    node.classList.add('field');
    for(var i=0; i<newImgUrls.length;i++){
        var div = document.createElement('div');
        div.classList.add('divImgShow');
        div.style.backgroundImage = "url('" + newImgUrls[i] + "')";
        node.appendChild(div);
    }
    node.addEventListener('click', showImg);
    gameField.appendChild(node);

    newGameBut.addEventListener('click',function () {
        gameField.removeChild(node);
        addImgFunc();
    });
});

function randomImg(a, b) {
    return Math.random() - 0.5;
}

addImgFunc();

function imageClicked(e) {
    if(e.target.classList.contains('divImgShow')){
        e.target.style.filter = 'none';
        e.target.classList.add('active');
    }
}
function imageActive(arr) {
    for(var i=0; i<arr.length; i++){
        arr[i].classList.remove('active');
    }
}

function imageHover(arr) {
    for(var i=0; i<arr.length; i++){
        arr[i].style.filter = 'brightness(0) invert(0.8)';
        arr[i].classList.remove('active');
    }
}


function showImg(e) {
    var first;
    var second;
    var arr = [];

    imageClicked(e);
    arr = document.querySelectorAll('.active');

    if(arr.length == 2){
        first = arr[0].getAttribute('style');
        second = arr[1].getAttribute('style');

        if(first != second){
            setTimeout(imageHover, 500, arr);
        }else{
            imageActive(arr);
        }
    }
}

