// INTRO
const intro = document.querySelector(`.intro`);
const video = intro.querySelector(`video`);
const text = intro.querySelector(`h1`);

// SECTION
const section = document.querySelector(`section`);
const end = section.querySelector(`h1`);

// SCROLL MAGIC
const controller = new ScrollMagic.Controller();

// SCENE
let scene = new ScrollMagic.Scene({
  duration: 9000,
  triggerElement: intro,
  triggerHook: 0,
})
  .addIndicators()
  .setPin(intro)
  .addTo(controller);

// TEXT ANIMATION
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: 1500,
  triggerElement: intro,
  triggerHook: 0,
})
  .setTween(textAnim)
  .addTo(controller);

// VIDEO ANIMATION
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on(`update`, (e) => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  video.currentTime = delay;
}, 33.3);
