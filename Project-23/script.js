document.addEventListener("DOMContentLoaded",()=>{

    const scratch = document.getElementById("scratch");

    scratch.addEventListener("mousemove",(e)=>{
        let span = document.createElement("span");
        span.style.top = `${e.pageY}px`;
        span.style.left = `${e.pageX}px`;
        scratch.appendChild(span);
    })

})