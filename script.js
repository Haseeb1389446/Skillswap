var container = document.querySelector('.container');
var cursor = document.getElementById('cursor');

container.addEventListener("mousemove", function(event) {
    gsap.to(cursor, {
        x: event.x,
        y: event.y,
        duration: 1,
        ease: "power2.out",
    })
})

const lenis = new Lenis({
  autoRaf: true,
});

lenis.on('scroll', (e) => {
  console.log(e);
});