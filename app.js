const backgroundImage = document.querySelector('.background-image');
const headerLogo = document.querySelector('.header-logo');

window.addEventListener('scroll', function() {
    let x = backgroundImage.getBoundingClientRect();
    
    if(x.bottom < headerLogo.clientHeight + 50) {
        headerLogo.classList.add('absolute-class');
    }
    else {
        headerLogo.classList.remove('absolute-class');
    }
    
})