document.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.querySelector('#root');
    const sections = document.querySelectorAll('section');
    console.log("działa")

    document.addEventListener('wheel', (event) => {
        console.log(event.wheelDelta);
    })
})