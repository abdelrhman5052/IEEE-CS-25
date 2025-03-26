let images = document.querySelectorAll("img");
for(let i = 0 ; i < images.length ; i++){

    if(images[i].hasAttribute("alt")){

        images[i].setAttribute("alt","Old");

    }else{
        images[i].alt="Elzero new";

    }
}
