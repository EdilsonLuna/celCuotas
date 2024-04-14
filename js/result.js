console.log("local storage", localStorage);
document.addEventListener("DOMContentLoaded",()=>{
    const h1text = document.getElementById("resultText");
    console.log("resultyexy",h1text);
    h1text.innerText = localStorage.getItem("h1text");
    console.log("local storage",localStorage);
});