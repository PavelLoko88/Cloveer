const hamb = document.getElementById('hamberger');
const hambClose = document.getElementById('hambClose');
const hambOpen = document.getElementById('hambOpen');
const content = document.getElementById('body');

let toglle = false;
let i = 0;

hambClose.style.display = 'none';
hambOpen.style.display = 'block';

hamb.addEventListener("click", () => {
    toglle != toglle;
    i++;
    console.log(i);
    if (i == 1) {
        hambClose.style.display = 'block';
        hambOpen.style.display = 'none';
        content.style.position = 'fixed';
        content.style.left = '0';
        content.style.right = '0';
    } else if (i > 1) {
        i = 0;
        hambClose.style.display = 'none';
        hambOpen.style.display = 'block';
        content.style.position = 'relative';
    }
    blur();
    ghost();

})

// GHOST CONTENT
function ghost() {
    const hideList = document.getElementById('hide-list');
    const ghost = document.getElementById('ghost');
    const img = document.getElementById('img');
    if (toglle) {
        ghost.classList.toggle('ghost-open');
        hideList.classList.toggle('open');
    } else {
        ghost.classList.toggle('ghost-close');
        img.classList.toggle('margin-up');
        hideList.classList.toggle('close');
    }
}
// BLUR
function blur() {
    const blur = document.getElementById('blurs');
    if (toglle) {
        blur.classList.toggle('offblur');
    } else {
        blur.classList.toggle('blur');
    }
}