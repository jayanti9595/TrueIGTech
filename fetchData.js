const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) =>
        response.json()).then((data) =>{
        document.getElementById("data").innerHTML = `
        <h5>${data.title}</h5>
        <h5>${data.body}</h5>
        `;
    })
})