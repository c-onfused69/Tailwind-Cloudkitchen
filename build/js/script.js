//Mobile Menu
const sidenavbar = document.querySelector('#sidenavbar');
const menu = document.querySelector('#menu');
const hLink = document.querySelector('#hLink');
const faSolid = document.querySelector(".fa-solid");



sidenavbar.addEventListener('click', () => {
    menu.classlist.toggle('hidden');
    faSolid.classlist.toggle('fa-xmark');
})

hLink.forEach(link => {
    link.addEventListener('click', () => {
        menu.classlist.toggle('hidden');
        faSolid.classlist.toggle('fa-xmark');
    })
})