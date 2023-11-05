const mouseBall = document.querySelector('.mouse-ball');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    
    mouseBall.style.transform = `translate(${x}px, ${y}px)`;
    console.log()
});
