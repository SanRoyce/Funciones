let  generalColor = '';

document.addEventListener('keydown', function (event) {
    
    if (event.key === 'a') {
        generalColor = "pink"
    } else if (event.key === 's') {
        generalColor = "white"
    } else if (event.key === 'd') {
        generalColor = "yellow"
    } else if (event.key === 'w') {
        generalColor = "orange"
    }
    });

let div1 = document.querySelector ('#div1')
div1.addEventListener('click', () => (div1.style.backgroundColor =  generalColor));

let div2 = document.querySelector ('#div2')
div2.addEventListener('click', () => (div2.style.backgroundColor =  generalColor));

let div3 = document.querySelector ('#div3')
div3.addEventListener('click', () => (div3.style.backgroundColor =  generalColor));

let  div4 = document.querySelector ('#div4')
div4.addEventListener('click', () => (div4.style.backgroundColor =  generalColor));