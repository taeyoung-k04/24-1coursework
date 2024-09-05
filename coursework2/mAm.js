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

let Position = {lat: 37.56095152048675, lng: 126.98991658638977};
let Title = "MyHometown";

async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");
    const { Marker } = await google.maps.importLibrary("marker");

    let map = new Map(document.getElementById("map"), {
        center: Position,
        zoom: 8
    });
    
    const marker = new Marker({
        map: map,
        position: Position,
        title: Title
    });
}

initMap();


const Buttons = document.querySelectorAll('.buttons span');
const videos = document.querySelectorAll('.videos video');
const mapClass = document.querySelector('.mapClass');

Buttons.forEach((link, index)=>{
    link.addEventListener('click',()=>{
        showVideo(index);
    });
});

const MediaQuery = window.matchMedia('(min-width: 800px)');
const showVideo = e =>{

    if(e == 0){
        Position = {lat: 36.39671307916246, lng: 127.39476111553986};
        Title = "Korea-Dejeon";
    }else if(e == 1){
        Position = {lat: 34.67466916688802, lng: 135.48664758256257};
        Title = "Japan-Osaka";
    }else if(e == 2){
        Position = {lat: 53.800976684590836, lng: -1.5535167832363812};
        Title = "England-Leeds";
    }
    initMap();

    for(let video of videos){
        video.style.opacity = '0';
        video.style.visibility = 'hidden';
    }

    if(e >= 0){
        if(MediaQuery.matches){
            mapClass.style.width = '600px';
        }else{ mapClass.style.width = '200px';}
        videos[e].style.opacity = '1';
        videos[e].style.visibility = 'visible';
    }else{
        if(MediaQuery.matches){
            mapClass.style.width = '900px';
        }else{ mapClass.style.width = '520px';}
    }

}
showVideo();
window.addEventListener('resize',showVideo);
