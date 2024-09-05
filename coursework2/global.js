const gtTop = document.querySelector('.gotoTop');
const sDown = document.querySelector('.scroll');
const burger = document.querySelector('.burger');

const checkscrollbar = () => {
/*main page scroll doesn't show */
    if(document.documentElement.clientHeight >= document.documentElement.scrollHeight || document.documentElement.clientWidth == window.innerWidth){
        sDown.classList.add('scroll-active');
        gtTop.classList.remove('gotoTop-active');
    }else{
        sDown.classList.remove('scroll-active');
    }
}
window.addEventListener('resize',checkscrollbar);
burger.addEventListener('click', checkscrollbar);
checkscrollbar();

const scrollFunction = () => {

    if(document.documentElement.clientHeight < document.documentElement.scrollHeight){
        if(
            document.body.scrollTop != 0 || document.documentElement.scrollTop != 0
        ){
            gtTop.classList.add('gotoTop-active');
            sDown.classList.add('scroll-active');
        }else{
            gtTop.classList.remove('gotoTop-active');
            sDown.classList.remove('scroll-active');
        }
    }
}

window.onscroll = function(){
    scrollFunction();
};
gtTop.addEventListener("click", ()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});


