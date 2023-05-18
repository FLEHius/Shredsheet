let header = document.querySelector('#intro');
let anim = [
    { t: " ", ms: 200 },
    { t: "_", ms: 200 },
    { t: " ", ms: 200 },
    { t: "_", ms: 200 },
    { t: "K_", ms: 100 },
    { t: "Ke_", ms: 100 },
    { t: "Kee_", ms: 100 },
    { t: "Keep_", ms: 100 },
    { t: "Keep  ", ms: 150 },
    { t: "Keep S_", ms: 150 },
    { t: "Keep Sh ", ms: 150 },
    { t: "Keep Shr_", ms: 150 },
    { t: "Keep Shre ", ms: 150 },
    { t: "Keep Shred_", ms: 150 },
    { t: "Keep Shredd ", ms: 150 },
    { t: "Keep Shreddi_", ms: 150 },
    { t: "Keep Shreddin ", ms: 150 },
    { t: "Keep Shredding_", ms: 150 },
    { t: "Keep Shredding", ms: 300 },
    { t: "Keep Shredding", ms: 300 }
];
let stepDenominator = 1;
if (window.localStorage.stepDenominator)
    stepDenominator = window.localStorage.stepDenominator;
let i = 0;
let update = () => {
    let step = anim[i];
    header.innerText = step.t;
    i++;

    if (i < anim.length)
        setTimeout(update, step.ms / stepDenominator);
    else {
        header.classList.add('top');
        setTimeout(() => {
            document.getElementById('main').style.opacity = 1;
            initGlobe();
        }, 500);
        window.localStorage.stepDenominator = 2;
    }
}
update();