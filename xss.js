setTimeout(() => {
    document.body.innerHTML += "<h1>Hacked by XSS</h1>";
    alert("XSS Executed!");
}, 1000);
