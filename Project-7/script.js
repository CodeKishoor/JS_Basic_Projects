document.addEventListener("DOMContentLoaded",()=>{

    const box = document.getElementsByTagName("img")[0];
    const slider = document.getElementById("slider");
    console.log(box)

    slider.addEventListener("input",()=>{
        const range = slider.value;
        box.style.transform = `rotate(${range}deg)`;
    })

})