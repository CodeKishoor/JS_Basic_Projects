document.addEventListener("DOMContentLoaded", () => {

    const search = document.getElementById("search");
    const row = document.getElementsByTagName("tr");

    console.log(row)

    search.addEventListener("keyup", () => {
        let value = search.value.toLowerCase();
        for (let i = 1; i < row.length; i++) {
            let column = row[i].cells;
            let found = 0;
            for (let j = 0; j < column.length; j++) {
                if (column[j]) {
                    let column_value = column[j].textContent.toLowerCase() || column[j].innerText.toLowerCase();
                    if (column_value.includes(value)) {
                        found = 1;
                        break;
                    }
                }
            }
            row[i].style.display = found ? "" : "none";
        }
    })

})


//OR

// document.addEventListener("DOMContentLoaded", () => {

//     const search = document.getElementById("search");
//     const row = document.querySelectorAll("table tr");

//     console.log(row)

//     search.addEventListener("keyup", () => {
//         let value = search.value.toLowerCase().trim();
//         row.forEach((rows) => {
//             let original = rows.textContent.toLowerCase();
//             rows.style.display = original.includes(value) ? "" : "none";
//         })
//     })

// })


