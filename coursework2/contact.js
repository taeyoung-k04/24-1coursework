const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const content = document.querySelector('.contact');

    burger.addEventListener('click', ()=>{

       nav.classList.toggle('nav-active');
       content.classList.toggle('con-active');

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

function CopyPhone() {
    const phone = document.querySelector('.phone').textContent;
    
    navigator.clipboard.writeText(phone);
    alert("Copied the text: " + phone);
}
function CopyEmail() {
    const email = document.querySelector('.email').textContent;
    
    navigator.clipboard.writeText(email);
    alert("Copied the text: " + email);
}
function CopyInsta() {
    const insta = document.querySelector('.insta').textContent;
    
    navigator.clipboard.writeText(insta);
    alert("Copied the text: " + insta);
}