const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.menu');
    const navLinks = document.querySelectorAll('.menu li');
    const content = document.querySelector('.content');

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

let pic=0;

const left = document.querySelector('.left-button');
const right = document.querySelector('.right-button');
const sliderindex = document.querySelectorAll('.slider-index span');

left.addEventListener('click',()=>{
    changeSlide(-1);
});
right.addEventListener('click',()=>{
    changeSlide(1);
});
sliderindex.forEach((link, index)=>{
    link.addEventListener('click',()=>{
        moveTo(index);
    });
});



const moveTo = e =>{
    pic = e;
    showSlide(pic);
}
const changeSlide = e =>{
    pic += e;
    showSlide(pic);
}

const showSlide = e =>{
    const leftimages = document.querySelectorAll('.slider-controls .left-items img');
    const rightimages = document.querySelectorAll('.slider-controls .right-items img');
    const images = document.querySelectorAll('.slider-items img');
    const indicators = document.querySelectorAll('.slider-index span');

    if(e >= images.length){pic=0};
    if(e < 0){pic = images.length-1};

    for(let image of images){
        image.style.opacity = '0';
    }
    for(let indicator of indicators){
        indicator.style.width = '8px';
        indicator.style.background = 'var(--orange)';
    }
    
    for(let leftimage of leftimages){
        leftimage.style.opacity='0';
    }
    for(let rightimage of rightimages){
        rightimage.style.opacity='0';
    }

    leftimages[pic].style.opacity = '0.5';
    rightimages[pic].style.opacity = '0.5';

    images[pic].style.opacity = '1';
    indicators[pic].style.width = '26px';
    indicators[pic].style.background = 'var(--black)';
}

showSlide(pic);