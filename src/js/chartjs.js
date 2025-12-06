import { animate, splitText, stagger, utils } from "https://esm.sh/animejs";


// Premier texte
const { chars: chars1 } = splitText("p", {
 chars: { wrap: "clip" }
});
// Deuxième texte
const { chars: chars2 } = splitText("p1", {
 chars: { wrap: "clip" }
});

const { chars: chars3 } = splitText("p2", {
 chars: { wrap: "clip" }
});
// Animation du premier texte
animate(chars1, {
 x: ["100%", "0%"],
 duration: 10,
 delay: stagger(150),
 loopDelay: 4000,
 loop: true
});
// Animation du deuxième texte
animate(chars2, {
 x: ["100%", "0%"],
 duration: 10,
 delay: stagger(150),
 loopDelay: 1000,
 loop: true
});

animate(chars3, {
 x: ["100%", "0%"],
 duration: 10,
 delay: stagger(150),
 loopDelay: 1000,
 loop: true
});



