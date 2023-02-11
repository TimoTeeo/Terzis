// Desktop Images
const imagesDesktopAccordion = document.querySelectorAll('.image-container');
// Desktop Accordions
const perioxesAccordionsDesktop = document.querySelectorAll('.inside-pages--info__phrases--container');

// Mobile Images
const imagesMobileAccordion = document.querySelectorAll('.inside-pages--info--mobile__image-phrase--images');
// Desktop Accordions
const perioxesAccordionsMobile = document.querySelectorAll('.inside-pages--info--mobile__image-phrase--container');
const perioxesAccordionsMobileContainer = document.querySelector('.inside-pages--info--mobile');





imagesDesktopAccordion.forEach( (image) => {
    image.addEventListener('click', function() {
        console.log(image.id);
        image.classList.toggle('active-image')
        
        imagesDesktopAccordion.forEach( (imageNew) => {
            if(imageNew.id !== image.id) {
                imageNew.classList.remove('active-image');
            }
        })
        perioxesAccordionsDesktop.forEach( (perioxi) => {
            if(image.id === perioxi.id) {
                perioxi.classList.toggle('show');
            }
            else {
                perioxi.classList.remove('show');
            }
        })
    })

})


imagesMobileAccordion.forEach( (image) => {
    image.addEventListener('click', function() {
        perioxesAccordionsMobile.forEach( (perioxi) => {
            if(image.id === perioxi.id) {
                console.log(image.id, perioxi.id);
                if(image.id === "keratsiniImageAccordion" && !(perioxi.classList.contains('show'))) {
                    console.log("ttrue");
                    perioxesAccordionsMobileContainer.style.paddingBottom = "500px";
                }
                else {
                    perioxesAccordionsMobileContainer.style.paddingBottom = "200px";
                }
                image.scrollIntoView(true)
                perioxi.classList.toggle('show');

            }
            else {
                // perioxi.style.marginBottom = "0";
                perioxi.classList.remove('show')
            }
        })
    })

})