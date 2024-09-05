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

const toggleRecipe = () => {
    const block = document.querySelectorAll('.secondline');
    const recipes = document.querySelectorAll('.recipe');
    const ingredients = document.querySelectorAll('.ingredient');
    const hovers = document.querySelectorAll('.hover');

    for(let recipe of recipes){
        recipe.style.display = 'none';
    }

    block.forEach((link, index) =>{
        link.addEventListener('click', ()=>{
            if(recipes[index].style.display == 'none'){
                recipes[index].style.display = 'inline-block';
                ingredients[index].style.display = 'none';
            }else{
                recipes[index].style.display = 'none';
                ingredients[index].style.display = 'inline-block';
            }

            if(hovers[index].innerHTML == 'click to see the recipe'){
                hovers[index].innerHTML = 'click to see the ingredient';
            }else{
                hovers[index].innerHTML = 'click to see the recipe';
            }
        });
    });
}

toggleRecipe();

const items = document.querySelectorAll('.item');
const table = document.querySelector('table');
const gyros = document.querySelectorAll('#gy');
const redVelvets = document.querySelectorAll('#rc');
const tteokbokkis = document.querySelectorAll('#dd');
const closetab = document.querySelector('.closetab');

const showRecipe = () => {

    items.forEach((link, index)=>{
        link.addEventListener('click',()=>{
            table.style.display = 'revert';
            if(index == 0){
                for(gyro of gyros){
                    gyro.style.display = 'block';  
                }
            }else if(index == 1){
                for(redVelvet of redVelvets){
                    redVelvet.style.display = 'block';  
                }
            }else if(index == 2){
                for(tteokbokki of tteokbokkis){
                    tteokbokki.style.display = 'block';  
                }
            }

            closetab.style.display = 'flex';
            closetab.addEventListener('click', ()=>{
                table.style.display = 'none';
                closetab.style.display = 'none';
                for(gyro of gyros){
                    gyro.style.display = 'none';  
                }
                for(redVelvet of redVelvets){
                    redVelvet.style.display = 'none';  
                }
                for(tteokbokki of tteokbokkis){
                    tteokbokki.style.display = 'none';  
                }
            });
        });
    });
}
showRecipe();

const resetpage = () =>{
    if(MediaQuery.matches){
        if(closetab.style.display == 'flex')closetab.style.display = 'none';

        table.style.display = 'revert';

        for(gyro of gyros){
            gyro.style.display = 'revert';  
        }
        for(redVelvet of redVelvets){
            redVelvet.style.display = 'revert';  
        }
        for(tteokbokki of tteokbokkis){
            tteokbokki.style.display = 'revert';  
        }
    }
    else{
        if(closetab.style.display == 'flex')closetab.style.display = 'none';
        
        table.style.display = 'none';

        for(gyro of gyros){
            gyro.style.display = 'none';  
        }
        for(redVelvet of redVelvets){
            redVelvet.style.display = 'none';  
        }
        for(tteokbokki of tteokbokkis){
            tteokbokki.style.display = 'none';  
        }
    }

}

const MediaQuery = window.matchMedia('(min-width: 800px)');
window.addEventListener('resize',resetpage);
