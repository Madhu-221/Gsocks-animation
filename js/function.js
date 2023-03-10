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
