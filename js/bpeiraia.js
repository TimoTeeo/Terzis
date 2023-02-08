// Desktop Images
const imagesDesktopAccordion = document.querySelectorAll('.inside-pages--info__images-photo');
// Desktop Accordions
const perioxesAccordionsDesktop = document.querySelectorAll('.inside-pages--info__phrases--container');

// Mobile Images
const imagesMobileAccordion = document.querySelectorAll('.inside-pages--info--mobile__image-phrase--images');
// Desktop Accordions
const perioxesAccordionsMobile = document.querySelectorAll('.inside-pages--info--mobile__image-phrase--container');





imagesDesktopAccordion.forEach( (image) => {
    image.addEventListener('click', function() {
        perioxesAccordionsDesktop.forEach( (perioxi) => {
            if(image.id === perioxi.id) {
                perioxi.classList.toggle('show');

            }
            else {
                perioxi.classList.remove('show')
            }
        })
    })

})


imagesMobileAccordion.forEach( (image) => {
    image.addEventListener('click', function() {
        perioxesAccordionsMobile.forEach( (perioxi) => {
            if(image.id === perioxi.id) {
                perioxi.classList.toggle('show');

            }
            else {
                perioxi.classList.remove('show')
            }
        })
    })

})