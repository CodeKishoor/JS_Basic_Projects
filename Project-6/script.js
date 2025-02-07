document.addEventListener("DOMContentLoaded",()=>{
    const img = document.querySelector(".image");
    const slider = document.getElementById("slider");

    slider.addEventListener("input",()=>{
        const range = slider.value;
        img.style.filter = `brightness(${range}%)`
    })

})