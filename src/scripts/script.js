const baseUrl = "https://dummyjson.com";
const path =  "/quotes/random";



const getQuotesByRandom = (callback) =>{
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `${baseUrl}${path}`, true);
    xhr.send();

    xhr.addEventListener('load', function(){
        const response = JSON.parse(xhr.responseText);
        callback(response);
    })
}



document.getElementById('btn').addEventListener('click', function(){
    getQuotesByRandom(function(response){
        document.getElementById('text-quotes').textContent = response.quote;
        document.getElementById('author-name').textContent = response.author;
    })

})



















