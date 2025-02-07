document.addEventListener("DOMContentLoaded", () => {
    const row = document.getElementsByName("animals");
    const img = document.getElementById("img");
    const btn = document.getElementById("btn");

    btn.addEventListener("click",()=>{
        for(let icon of row){
            if(icon.checked){
                img.innerHTML = icon.value;
            }
        }
    })

})

