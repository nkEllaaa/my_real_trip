const carouselSlide = document.querySelector('.all-8-area');
const carouselImages = document.querySelectorAll('.article-nk');

const prevBtn = document.querySelector('.btn-prev');
const nextBtn = document.querySelector('.btn-next');

let counter = 0;
const size = carouselImages[0].clientWidth;
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Buttons
nextBtn.addEventListener('click', ()=> {
  if(counter >= carouselImages.length -1) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter = counter + 4;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', ()=> {
  if(counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter = counter - 4;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

// Jump to First/Last Slide
carouselSlide.addEventListener('transitionend', () => {
  console.log(carouselImages[counter]);
  if (carouselImages[counter].id === 'lastClone'){
    carouselSlide.style.transition = 'none'; // 트랜지션 효과 없애기
    counter = carouselImages.length -2; // couter 초기화
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'; // 실제 마지막 이미지로 이동.
  } else if (carouselImages[counter].id === 'firstClone') {
    carouselSlide.style.transition = 'none';
    counter = carouselImages.length - counter; // couter 초기화
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
});