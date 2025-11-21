document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const menuList = document.querySelector('.menu-list');
    

    if (!hamburger || !menuList) return;


    hamburger.addEventListener('click', (e) => {
        e.stopPropagation(); 
        menuList.classList.toggle('open');
    });


    const menuLinks = document.querySelectorAll('.menu-list a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuList.classList.remove('open');
        });
    });

    document.addEventListener('click', (e) => {
        const clickedInsideMenu = menuList.contains(e.target);
        const clickedHamburger = hamburger.contains(e.target);

        if (!clickedInsideMenu && !clickedHamburger) {
            menuList.classList.remove('open');
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const frame = document.getElementById('frame');

    if (!frame) {
        console.warn('Element #frame ei leitud');
        return;
    }

    // pildid 1–6 
    const pictures = [
        "images/1.jpg",
        "images/2.jpg",
        "images/3.jpg",
        "images/4.jpeg",
        "images/5.png",
        "images/6.jpg"
    ];

    let current = 0;

    frame.addEventListener('click', () => {
        current++;

        if (current >= pictures.length) {
            current = 0;
        }

        frame.src = pictures[current];
    });
});
