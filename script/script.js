let toglle = false;
const content = document.querySelector('body');

const hamb = document.getElementById('hamberger');
const hideList = document.getElementById('hide-list');

const ghost = document.getElementById('ghost');
// BLUR
const img = document.getElementById('img');
const blur = document.getElementById('blurs')


hamb.addEventListener("click", () => {
    toglle != toglle;
    if (toglle) {
        hideList.classList.toggle('open');
        ghost.classList.toggle('ghost-open');
        blur.classList.toggle('offblur');

    } else {
        hideList.classList.toggle('close');
        ghost.classList.toggle('ghost-close');
        img.classList.toggle('margin-up');
        blur.classList.toggle('blur');
        content.classList.toggle('fixed');
    }
})