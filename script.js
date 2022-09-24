const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('Click');
// };

// btn.onclick = function() {
//     alert('SecClick');
// };

let i = 0;
const del = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if(i = 1) {
    //     btn.removeEventListener('click', del);
    // }
};

// btn.addEventListener('click', del);
// overlay.addEventListener('click', del);

btns.forEach(btn => {
    btn.addEventListener('click', del, {once: true});
});

const link = document.querySelector('a');

link.addEventListener('click', (e) => {
    e.preventDefault();

    console.log(e.target);
});



