let toglle = false;
const content = document.querySelector('body');
const hamb = document.getElementById('hamberger');
const hambClose = document.getElementById('hambClose');
const hambOpen = document.getElementById('hambOpen');
const hideList = document.getElementById('hide-list');
const ghost = document.getElementById('ghost');
// BLUR
const img = document.getElementById('img');
const blur = document.getElementById('blurs');
let i = 0;
hambClose.style.display = 'none';
hambOpen.style.display = 'block';
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

    i++;
    console.log(i);
    if (i == 1) {

        hambClose.style.display = 'block';
        hambOpen.style.display = 'none';
    } else if (i > 1) {
        i = 0;
        hambClose.style.display = 'none';
        hambOpen.style.display = 'block';
    }


})