import { animate } from "animejs";

animate(".dot", {
  x: [0, "20vw", 0, "-20vw", 0],
  y: [0, "-20vh", "20vh", 0],
  duration: 2000,
  loop: true
});