var crsr = document.querySelector(".cursor")
// var blur = document.querySelector(".cursor-blur")
document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x +"px"
  // // console.log(dets.y)
    crsr.style.top = dets.y+"px"
  //   // blur.style.left = dets.x -240+ "px"
    // blur.style.top = dets.y-240+"px"
// document.addEventListener("mousemove", function(dets) => {});

  // onmousemove = (event) => {
    // crsr.style.left = dets.x + "px";
    // console.log(dets.y)
    // crsr.style.top = dets.y + "px";
  
// };


})
var h4all = document.querySelectorAll(".nav h4")
h4all.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor= "transparent"
    })
    elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1
        crsr.style.border = "1px solid #95C11E"
        crsr.style.backgroundColor = "transparent"
    })
})



gsap.to(".nav", {
    backgroundColor: "#000",
    duration: 1,
    height: "100px",
    scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub:2
    }
})
gsap.to(".main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: ".main",
        scroller: "body",
        // markers: true,
        start: "top -20%",
        end: "top -100%",
        scrub:2,
    }
    
})
gsap.from(".about-us img,.about-us-in", {
  y: 50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".about-us",
    scroller: "body",
    // markers: true,
    start: "top 60%",
      end: "top 55%",
      scrub: 2,
  }
});
gsap.from(".card", {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers: true,
    start: "top 70%",
      end: "top 65%",
    scrub:1,
  }
});

gsap.from("#colon1", {
  x: -70,
  y: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 60%",
    scrub: 4,
  }
});
gsap.from("#colon2", {
  x:80,
  y:-50,
  scrollTrigger: {
    trigger: "#colon2",
    scroller: "body",
    // markers: true,
    start: "top 80%",
    end: "top 100%",
    scrub: 4,
  }
});
gsap.from(".page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: ".page4 h1",
    scoller: "body",
    // markers: true,
    start: "top 75%",
    end: "top 70%",
    scrub:3
  }
})


