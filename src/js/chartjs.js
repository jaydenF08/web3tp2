import { animate, splitText, stagger, utils } from "https://esm.sh/animejs";


const { chars } = splitText("p", {
  chars: { wrap: "clip" }
});


animate(chars, {
  x: ["100%", "0%"],
  duration: 10,
  delay: stagger(150),
  loopDelay: 5000,
  loop: true
});

