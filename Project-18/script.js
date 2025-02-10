document.addEventListener("DOMContentLoaded",()=>{

    const box = document.querySelector(".box");

    box.addEventListener("mousemove",(e)=>{
        let x = e.offsetX;
        let y = e.offsetY;
        let red = x%255;
        let green = y%255;
        let blue = (x+y)%255;
        box.style.backgroundColor = `rgb(${red},${green},${blue})`;
    })

})