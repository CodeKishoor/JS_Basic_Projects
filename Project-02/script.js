document.addEventListener("DOMContentLoaded",()=>{
    const filename = document.getElementById("filename");
    const file = document.getElementById("file");

    console.log(file.files.length)

    file.addEventListener("input",()=>{
        if(file.files.length){
            const extension = file.files[0].name.split(".").pop();
            filename.innerHTML = extension;
        }
    })
})