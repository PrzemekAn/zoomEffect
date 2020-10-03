const container = document.querySelector('.container');
const img = document.querySelector('.image');



container.addEventListener('mousemove', (e) => {
    let x = e.clientX - container.offsetLeft;
    let y = e.clientY - container.offsetTop;
    console.log(x, y);

    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = 'scale(2.5)';

})


container.addEventListener('mouseleave', () => {
    img.style.transformOrigin = 'center center'
    img.style.transform = 'scale(1)';
})