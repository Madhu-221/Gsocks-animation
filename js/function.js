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
    // y: 60,
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
  

  // spiderMan section animation
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".spiderman_logo", { scrollTrigger:{
    tigger:".spiderman_logo",
    start:"center  center",
    toggleActions: "restart",
  }, duration: 3,  x:"400", backgroundColor:"rgb(38 49 91)", borderRadius:"20%", border:"4px solid #fff", ease:"smooth", })


// canvas

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#28a92b";

let position = { x: 0, y: 0 };

function draw() {
  // erase the canvas
  ctx.clearRect(0, 0, 300, 300);
  // redraw the square at it's new position
  ctx.fillRect(position.x, position.y, 100, 100);
}

//animate x and y of point
gsap.to(position, { 
  x: 200, 
  y: 200, 
  duration: 4,
  onUpdate: draw,
  repeat: -1,
});


// control function

// click handlers for controlling the tween instance...
let nav = document.querySelector('.nav')

let tween = gsap.to(".navy", {
  duration: 4, 
  x: () => nav.offsetWidth, // animate by the px width of the nav
  xPercent: -100, // offset by the width of the box
  rotation: 360, 
  ease: "none", 
  paused: true
});

// click handlers for controlling the tween instance...
document.querySelector("#play").onclick = () => tween.play();
document.querySelector("#pause").onclick = () => tween.pause();
document.querySelector("#resume").onclick = () => tween.resume();
document.querySelector("#reverse").onclick = () => tween.reverse();
document.querySelector("#restart").onclick = () => tween.restart();
