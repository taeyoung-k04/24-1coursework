const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const con = document.querySelector('.wrapper');

    burger.addEventListener('click', ()=>{

       nav.classList.toggle('nav-active');
       con.classList.toggle('con-active');

       navLinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = "";
        }else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index/7+0.5}s`;
        }
        });

        burger.classList.toggle('toggle');
    });

}

navSlide();

const imgZoom = () => {
    const image = document.querySelector('.image');
    const face = document.querySelector('.face');
    const text = document.querySelector('.text-image');
    const shadow = document.querySelector('.shadow-effect');

    face.addEventListener('click', ()=>{

       image.classList.toggle('image-active');
       face.classList.toggle('face-active');
       text.classList.toggle('text-active');

       if(text.innerHTML == "click<br>to<br>zoom") {
            text.innerHTML = "click to revert";
        }else{
            text.innerHTML = "click<br>to<br>zoom";
        }

       shadow.classList.toggle('shadow-active');

    });

}

imgZoom();