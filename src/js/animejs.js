import { animate, utils, waapi,svg,stagger } from "animejs";


            

utils.set(".line1", { opacity: 0 });
animate(".line1", {
  opacity: 1,
  duration: 3000,
  alternate: true,
  ease: "linear",
  loop: true,
});

utils.set(".line2", { opacity: 0 });
animate(".line2", {
  opacity: 1,
  duration: 3000,
  alternate: true,
  ease: "linear",
  loop: true,
});

utils.set(".line3", { opacity: 0 });
animate(".line3", {
  opacity: 1,
  duration: 3000,
  alternate: true,
  ease: "linear",
  loop: true,
});

utils.set(".line4", { opacity: 0 });
animate(".line4", {
  opacity: 1,
  duration: 3000,
  alternate: true,
  ease: "linear",
  loop: true,
});

utils.set(".line5", { opacity: 0 });
animate(".line5", {
  opacity: 1,
  duration: 3000,
  alternate: true,
  ease: "linear",
  loop: true,
});

utils.set(".line6", { opacity: 0 });
animate(".line6", {
  opacity: 1,
  duration: 3000,
  alternate: true,
  ease: "linear",
  loop: true,
});

utils.set(".line7", { opacity: 0 });
animate(".line7", {
  opacity: 1,
  duration: 3000,
  alternate: true,
  ease: "linear",
  loop: true,
});

utils.set(".line8", { opacity: 0 });
animate(".line8", {
  opacity: 1,
  duration: 3000,
  alternate: true,
  ease: "linear",
  loop: true,
});

utils.set(".img1", { opacity: 0.1 });
animate(".img1", {
  opacity: 0.4,
  duration: 5000,
  alternate: true,
  ease: "linear",
  loop: true,
});

utils.set(".glyphA", { opacity: 0.1 });

animate(".glyphA", {
  opacity: [0.1, 1],
  duration: 4000,
  ease: "linear",
  translateY: [-5, -20],     
  translateX: [0, 3],        
  rotate: [-2, 2],           
  scale: [0.98, 1],         
  loop: true,
  alternate: true,
});

utils.set(".glyphB", { opacity: 0.1 });

animate(".glyphB", {
  opacity: [0.1, 1],
  duration: 3000,
  ease: "linear",
  translateY: [-5, -15],  
  translateX: [0, -3],   
  rotate: [-1.5, 1.5],   
  scale: [0.97, 1],   
  alternate: true,   
  loop: true,
});


utils.set(".glyphC", { opacity: 0.1 });

animate(".glyphC", {
  opacity: [0.1, 1],
  duration: 4000,
  ease: "linear",
  translateY: [10, 25],   
  translateX: [0, 2],    
  rotate: [-2, 2],       
  scale: [0.96, 1],       
  alternate: true,
  loop: true,
});


animate(svg.createDrawable('.lineee'), {
  draw: ['0 0', '0 1', '1 1'],
  ease: 'inOutQuad',
  duration: 2000,
  delay: stagger(100),
  loop: true
});

animate(svg.createDrawable('.lineee2'), {
  draw: ['0 0', '0 1', '1 1'],
  ease: 'inOutQuad',
  duration: 2000,
  delay: stagger(100),
  loop: true
});



animate(svg.createDrawable('.lineee4'), {
  draw: ['0 0', '0 1', '1 1'],
  ease: 'inOutQuad',
  duration: 4000,
  delay: stagger(100),
  loop: true
});

animate(svg.createDrawable('.lineee5'), {
  draw: ['0 0', '0 1', '1 1'],
  ease: 'inOutQuad',
  duration: 4000,
  delay: stagger(100),
  loop: true
});



animate(svg.createDrawable('.lineee7'), {
  draw: ['0 0', '0 1', '1 1'],
  ease: 'inOutQuad',
  duration: 4000,
  delay: stagger(100),
  loop: true
});


animate(svg.createDrawable('.lineee9'), {
  draw: ['0 0', '0 1', '1 1'],
  ease: 'inOutQuad',
  duration: 4000,
  delay: stagger(100),
  loop: true
});






animate(svg.createDrawable('.eye'), {
  draw: ['0 0', '0 1', '1 1'],
  ease: 'inOutQuad',
  duration: 4000,
  delay: stagger(100),
  loop: true,
  loopDelay: 4000,
});

animate(svg.createDrawable('.bod'), {
  draw: ['0 0', '0 1', '1 1'],
  ease: 'inOutQuad',
  duration: 4000,
  delay: stagger(100),
  loop: true,
  loopDelay: 4000,
});




