


// Hacemos lo de el navegador cambie de color
window.addEventListener("DOMContentLoaded", () => {
    let element = document.querySelector(".nav-wrapper");



    document.addEventListener("scroll", () => {
        let posicionY = window.scrollY;
        const nav = document.querySelector('.navbar-fixed');
        if (posicionY === 0) {
            element.setAttribute("style", "background-color: transparent");
            nav.classList.add('mt-1')


        } else {
            element.setAttribute("style", "background-color: rgba(128, 128, 128, 0.1)");
            nav.classList.remove('mt-1')
        }


    });
});

// BOTONES

document.querySelectorAll('.button').forEach(button => {
    let div = document.createElement('div'),
        letters = button.textContent.trim().split('');

    function elements(letter, index, array) {

        let element = document.createElement('span'),
            part = (index >= array.length / 2) ? -1 : 1,
            position = (index >= array.length / 2) ? array.length / 2 - index + (array.length / 2 - 1) : index,
            move = position / (array.length / 2),
            rotate = 1 - move;

        element.innerHTML = !letter.trim() ? '&nbsp;' : letter;
        element.style.setProperty('--move', move);
        element.style.setProperty('--rotate', rotate);
        element.style.setProperty('--part', part);

        div.appendChild(element);

    }

    letters.forEach(elements);

    button.innerHTML = div.outerHTML;

    button.addEventListener('mouseenter', e => {
        if(!button.classList.contains('out')) {
            button.classList.add('in');
        }
    });

    button.addEventListener('mouseleave', e => {
        if(button.classList.contains('in')) {
            button.classList.add('out');
            setTimeout(() => button.classList.remove('in', 'out'), 950);
        }
    });

});

document.querySelectorAll('.buttonn').forEach(button => button.addEventListener('click', e => {
    if(!button.classList.contains('loading')) {

        button.classList.add('loading');

        setTimeout(() => button.classList.remove('loading'), 3700);

    }
    e.preventDefault();
}));
