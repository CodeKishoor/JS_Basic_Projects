document.addEventListener("DOMContentLoaded",()=>{

    const browser = document.getElementById("browser");
    const os = document.getElementById("os");

    window.addEventListener("load",()=>{
        let details = navigator.userAgent;
        
        if(details.includes("Chrome/")){
            browser.innerText += "Chrome";
        }else if(details.includes("Safari/")){
            browser.innerText += "Safari";
        }else if(details.includes("Edge/")){
            browser.innerText += "Edge";
        }else if(details.includes("Firefox/")){
            browser.innerText += "Firefox";
        }

        if(details.includes("Android")){
            os.innerText += "Android";
        }else if(details.includes("iPhone")){
            os.innerText += "IPhone";
        }else if(details.includes("Win")){
            os.innerText += "Windows";
        }else if(details.includes("Mac")){
            os.innerText += "Macintosh";
        }else if(details.includes("Linux")){
            os.innerText += "Linux";
        }

    })

})