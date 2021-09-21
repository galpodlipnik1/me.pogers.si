let social = document.querySelector('#social');


async function delay(x) {
    return new Promise(r=>setTimeout(r,x))
}


async function anim() {
    await delay(1500)
    social.classList.add('show')
}

anim();