TweenMax.to('.green', 2, {left: '100px', repeat: -1});
gsap.to('.purple', 4, {y:'60px', fill: 'blue', repeat: -1});
// or even an Array of elements
let square = document.querySelector(".orange");
let circle = document.querySelector(".circle");
                                      
gsap.to([square, circle], 4, { x: -100 });
gsap.to('.orange', { x: 200, rotation: 360, duration: 1});



let tl = gsap.timeline({repeat: -1, repeatDelay: 1});

tl.to(".green-rot", { rotation: '360' });
tl.to(".purple-rot", { rotation: '360' });
tl.to(".orange-rot", { rotation: '360' });


// Stagger function

gsap.from(".simple-staggers", {
    duration: 2,
    scale: 0.5, 
    opacity: 0, 
    delay: 0.5, 
    stagger: 0.2,
    ease: "elastic", 
    force3D: true, 
  });
  
  document.querySelectorAll(".simple-staggers").forEach(function(simpleStaggers) {
    simpleStaggers.addEventListener("click", function() {
      gsap.to(".simple-staggers", {
        duration: 0.5, 
        opacity: 0, 
        y: -100, 
        stagger: 0.1,
        ease: "back.in"
      });
    });
  });
// 3d-Stagger
  gsap.to(".d-stagger-box", 1, {
    scale: 0.1, 
    y: 60,
    yoyo: true, 
    repeat: -1, 
    ease: "power1.inOut",
    delay: 1,
    stagger: {
      amount: 1.5, 
      grid: "auto",
      from: "center"
    }
  });
  