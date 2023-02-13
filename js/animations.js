gsap.registerPlugin("ScrollTrigger");

const timeline = gsap.timeline({
  defaults: { duration: 1, opacity: 0, scale: 0 },
});
timeline
  .from(".main__content__title", { ease: "back" })
  .from(".main__content__para", { ease: "sine" })
  .from(".main__content__subtitle", { ease: "sine" }, "<")
  .from(".main__content__button", { ease: "power1" })
  .from(".article__img-wrapper__img", {});

gsap.from(".article__img-wrapper__img", {
  rotation: "360",
  duration: 10,
  ease: Linear.easeNone,
  repeat: -1,
});

gsap.from(".footer__content", {
  scrollTrigger: ".footer",
  duration: 1,
  y: "-50%",
  opacity: 0,
  ease: "power1",
});
