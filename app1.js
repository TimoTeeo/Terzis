const flag1 = true;
const flag2 = true;
const flag3 = true;
const isShown1 = document.getElementById("isShown1");
const title1 = document.getElementById("title1");
const img1 = document.getElementById("img1");
const isShown2 = document.getElementById("isShown2");
const title2 = document.getElementById("title2");
const img2 = document.getElementById("img2");
const isShown3 = document.getElementById("isShown3");
const title3 = document.getElementById("title3");
const img3 = document.getElementById("img3");

isShown1.style.display = "none";
isShown2.style.display = "none";
isShown3.style.display = "none";

title1.addEventListener("click", myFunction1);
title2.addEventListener("click", myFunction2);
title3.addEventListener("click", myFunction3);

function myFunction1() {
  if (this.flag1) {
    isShown1.style.display = "none";
    this.flag1 = false;
  } else {
    isShown1.style.display = "block";
    this.flag1 = true;
  }
}

function myFunction2() {
  if (this.flag2) {
    isShown2.style.display = "none";
    this.flag2 = false;
  } else {
    isShown2.style.display = "block";
    this.flag2 = true;
  }
}

function myFunction3() {
  if (this.flag3) {
    isShown3.style.display = "none";
    this.flag3 = false;
  } else {
    isShown3.style.display = "block";
    this.flag3 = true;
  }
}
