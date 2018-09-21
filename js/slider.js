var control1 = document.querySelector(".control-first");
var control2 = document.querySelector(".control-second");
var control3 = document.querySelector(".control-third");
var slide1 = document.querySelector(".slider-item-first");
var slide2 = document.querySelector(".slider-item-second");
var slide3 = document.querySelector(".slider-item-third");

control1.addEventListener("click", function(evt) {
  control1.classList.add("active");
  control2.classList.remove("active");
  control3.classList.remove("active");
  if (control1.classList.contains("active")) {
    slide1.classList.add("current-slide");
    slide2.classList.remove("current-slide");
    slide3.classList.remove("current-slide");
  };
});

control2.addEventListener("click", function(evt) {
  control1.classList.remove("active");
  control2.classList.add("active");
  control3.classList.remove("active");
  if (control2.classList.contains("active")) {
    slide2.classList.add("current-slide");
    slide1.classList.remove("current-slide");
    slide3.classList.remove("current-slide");
  };
});

control3.addEventListener("click", function(evt) {
  control1.classList.remove("active");
  control2.classList.remove("active");
  control3.classList.add("active");
  if (control3.classList.contains("active")) {
    slide3.classList.add("current-slide");
    slide1.classList.remove("current-slide");
    slide2.classList.remove("current-slide");
  };

});
