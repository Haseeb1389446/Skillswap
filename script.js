var container = document.querySelector('.container');
var cursor = document.getElementById('cursor');

container.addEventListener("mousemove", function(event) {
    gsap.to(cursor, {
        x: event.x,
        y: event.y,
        duration: 1,
        ease: "back.out",
    })
})

const lenis = new Lenis({
  autoRaf: true,
});

lenis.on('scroll', (e) => {
  console.log(e);
});

window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");
});

var faq = document.getElementsByClassName("contentBox");

for (var i = 0; i < faq.length; i++) {
  faq[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}