import { animate, utils } from 'animejs';

const min = utils.random(0.1, 0.4);
const max = utils.random(0.7, 1);

animate(".line1", {
  opacity: [min, max],
  duration: utils.random(1000, 2000),
  direction: "alternate",
  easing: "easeInOutSine",
  loop: true
});

