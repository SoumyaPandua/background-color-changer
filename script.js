function bgdchanger(color){
    return function(){
        document.body.style.backgroundColor = `${color}`
    }
};
document.getElementById('gray').onclick = bgdchanger('gray');
document.getElementById('yellow').onclick = bgdchanger('yellow');
document.getElementById('green').onclick = bgdchanger('green');
document.getElementById('red').onclick = bgdchanger('red');