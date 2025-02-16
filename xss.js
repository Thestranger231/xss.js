setTimeout(() => {
    new Function("alert('XSS Executed!')")();
}, 1000);
