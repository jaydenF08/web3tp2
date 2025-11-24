import { animate, utils } from 'animejs';

animate(".line1", {
  opacity: () => utils.random(0, 1, 2),
  loop: true,
});