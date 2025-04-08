window.onload = () => {
    [...document.querySelectorAll("a")]
    .filter( 
        (a) => a.classList.contains("open") && a.textContent === "Elzero"
          )[0].click();
};

