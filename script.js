const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');



// Solar system
function changeImages(theme){
    image1.src =`img/actualites_${theme}.svg`;
    image2.src =`img/constellations_${theme}.svg`;
    image3.src =`img/systeme_solaire_${theme}.svg`;
}


function solarMode(){
    toggleIcon.children[0].textContent = ('Solar System');
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    changeImages('solar');
}

function spaceMode(){
    toggleIcon.children[0].textContent = ('Infinite Space');
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    changeImages('space');
}


// Changer dynamiquement le thème
function switchTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme','solar-system');
        solarMode();
    } else {
        document.documentElement.setAttribute('data-theme','infinite-space');
        spaceMode();
    }
}

// Event listener pour changer le theme
toggleSwitch.addEventListener('change', switchTheme);

