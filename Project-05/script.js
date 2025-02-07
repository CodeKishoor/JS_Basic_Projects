document.addEventListener("DOMContentLoaded",()=>{
    const quote = document.getElementById("quote");
    const author = document.getElementById("author");
    const btn = document.getElementById("btn");

    const quotes = [
        {
            quote: "The only way to do great work is to love what you do.",
            author: "Steve Jobs"
        },
        {
            quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            author: "Winston Churchill"
        },
        {
            quote: "Believe you can and you're halfway there.",
            author: "Theodore Roosevelt"
        },
        {
            quote: "Do what you can, with what you have, where you are.",
            author: "Theodore Roosevelt"
        },
        {
            quote: "The future belongs to those who believe in the beauty of their dreams.",
            author: "Eleanor Roosevelt"
        },
        {
            quote: "Act as if what you do makes a difference. It does.",
            author: "William James"
        },
        {
            quote: "In the middle of every difficulty lies opportunity.",
            author: "Albert Einstein"
        },
        {
            quote: "Your time is limited, so don’t waste it living someone else’s life.",
            author: "Steve Jobs"
        }
    ];

    btn.addEventListener("click",()=>{
        let number = Math.floor(Math.random()*quotes.length);
        quote.innerHTML = quotes[number].quote;
        author.innerHTML = quotes[number].author;
    })

})