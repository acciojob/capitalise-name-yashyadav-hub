let inp = document.getElementById("fname");

inp.addEventListener("blur", () => {
    let temp = inp.value.toUpperCase();  
    inp.value = temp; 
});
