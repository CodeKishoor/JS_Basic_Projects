document.addEventListener("DOMContentLoaded",()=>{

    const link = document.getElementById("link");
    const clear = document.getElementById("clear");
    const btn = document.getElementById("btn");
    const width = document.getElementById("width");
    const height = document.getElementById("height");
    const img = document.getElementById("img");

    clear.addEventListener("click",()=>{
        link.value = "";
        img.src = "";
        width.innerText = "";
        height.innerText = "";
    });

    link.addEventListener("input",()=>{
        img.src = link.value;
    })

    btn.addEventListener("click",()=>{
        console.log(img.naturalHeight,img.naturalWidth)
        width.innerText = `Width : ${img.naturalWidth}px`;
        height.innerText = `Height : ${img.naturalHeight}px`;
    })

})