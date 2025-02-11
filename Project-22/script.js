document.addEventListener("DOMContentLoaded",()=>{

    const btn = document.getElementById("btn");
    const result = document.getElementById("result");

    btn.addEventListener("click",(e)=>{
        let values = e.view.window.location.pathname.split("/").pop();
        result.innerText = values;
        result.style.display = "block";
    })

})