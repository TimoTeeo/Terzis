const backgroundImage = document.querySelector('.background-image');
const headerLogo = document.querySelector('.header-logo');
const bottomImages = document.querySelector('.bottom-images');
const socialIcons = document.querySelector('.social-icons');
const scrollingHeader = document.querySelector('.header-container-scrolling');
const textWhiteLine = document.querySelector('.header-container--text-line__parent');
let backgroundImagePos = backgroundImage.getBoundingClientRect();

window.addEventListener("scroll", function () {
  let headerLogoPos = backgroundImage.getBoundingClientRect();
  // console.log(backgroundImage.clientHeight);
  // console.log(headerLogoPos.bottom);

  // tablet and above
  if(window.innerWidth > 990) {
    if(headerLogoPos.bottom + backgroundImage.clientHeight - 150 < backgroundImage.clientHeight) {
      bottomImages.classList.add('fixed-images-class');
      socialIcons.classList.add('fixed-social-class');
      textWhiteLine.classList.add('fixed-white-bar-class');
      scrollingHeader.classList.add('show');
    } else {
      bottomImages.classList.remove('fixed-images-class');
      socialIcons.classList.remove('fixed-social-class');
      textWhiteLine.classList.remove('fixed-white-bar-class');
      scrollingHeader.classList.remove('show');
    }
  }
  else {
    if(window.scrollY > 10) {
      scrollingHeader.classList.add('show');
      if(headerLogoPos.bottom + backgroundImage.clientHeight - 150 < backgroundImage.clientHeight) {
        textWhiteLine.classList.add('fixed-white-bar-class');
      }
      else {
        textWhiteLine.classList.remove('fixed-white-bar-class');
      }
    } else {
      scrollingHeader.classList.remove('show');
    }
  }
});

window.addEventListener("resize", function () {
  if(window.innerWidth < 990) {  
    if(bottomImages.classList.contains('fixed-images-class')) {
      bottomImages.classList.remove('fixed-images-class')
    }
  }
});
