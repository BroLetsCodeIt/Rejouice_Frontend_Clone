// locomotive + scrolltrigger
function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // // --- RED PANEL ---
  // gsap.from(".line-1", {
  //   scrollTrigger: {
  //     trigger: ".line-1",
  //     scroller: "#main",
  //     scrub: true,
  //     start: "top bottom",
  //     end: "top top",
  //     onUpdate: self => console.log(self.direction)
  //   },
  //   scaleX: 0,
  //   transformOrigin: "left center",
  //   ease: "none"
  // });

  // // --- ORANGE PANEL ---
  // gsap.from(".line-2", {
  //   scrollTrigger: {
  //     trigger: ".orange",
  //     scroller: "#main",
  //     scrub: true,
  //     pin: true,
  //     start: "top top",
  //     end: "+=100%"
  //   },
  //   scaleX: 0,
  //   transformOrigin: "left center",
  //   ease: "none"
  // });

  // // --- PURPLE/GREEN PANEL ---
  // var tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".purple",
  //       scroller: "#main",
  //       scrub: true,
  //       pin: true,
  //       start: "top top",
  //       end: "+=100%"
  //     }
  //   });

  // tl.from(".purple p", {scale: 0.3, rotation:45, autoAlpha: 0, ease: "power2"})
  //   .from(".line-3", {scaleX: 0, transformOrigin: "left center", ease: "none"}, 0)
  //   .to(".purple", {backgroundColor: "#28a92b"}, 0);

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
loco();

function cursorEffect() {
  const cursor = document.querySelector(".page1 .movingcursor");
  const page1 = document.querySelector(".page1");
  page1.addEventListener("mousemove", (e) => {
    // console.log(e)
    // cursor.style.left = e.x + "px";
    // cursor.style.top = e.y + "px";

    gsap.to(cursor, {
      scale: 1,
      duration: "1",
      x: e.x,
      y: e.y,
      ease: "power2",
    });
  });

  page1.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      scale: 0,
      duration: 2,
      ease: "power2",
    });
  });

  page1.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      scale: 1,
      duration: 2,
      ease: "power2",
    });
  });
}
cursorEffect();

function textAnimaterejouice() {
  const textval = document.querySelectorAll(".wrappertext div");

  gsap.from(textval, {
    y: 90,
    duration: 1,
    stagger: 0.1,
    ease: "smooth",
  });
}
// textAnimaterejouice();


// page2 animation
gsap.from(".page2-content h1", {
  height: 1,
  stagger: 0.25,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".page2-content",
    // markers:true,
    scroller: "#main",
    start: "top center",
    end: "top top",
    // once:true,
    scrub: 2,
  },
  //    markers:true
  // trigger:'.page2-content h1',
  // scroller:'body',
  // start:'top 47%',
  // end:'top 46%',
  // markers:true,
  // scrub:1
});

const d = new Date();
const data = d.getFullYear();
// console.log(data);

const datetext = document.querySelector('.video-content h3 span');
datetext.innerHTML = data;



function cursor2(){
  const wrapper = document.querySelector('.page5 .page5-blue-section');
  const cur = document.querySelector('.page5 .page5-blue-section .cur'); 
  
  wrapper.addEventListener('mousemove',(e) =>{
        gsap.to(cur,{
          x:e.x ,
          y:e.y,
          duration:1,
          scale:1,
          ease:'power2'
        }) 
  })
  
  wrapper.addEventListener('mousenter',() =>{
      gsap.to(cur , {
        scale:1,
        duration:'1',
        ease:'power2'
      })
  })
  
  wrapper.addEventListener('mouseleave',() =>{
    gsap.to(cur , {
      scale:0,
      duration:'1',
      ease:'power2'
    })
  })
}

cursor2()


// swiper js code 
// https://stackoverflow.com/questions/43801782/swiper-continous-loop-without-pause-between-sliding
function infinitescroll(){
  var swiper = new Swiper(".swiper", {
    loop:true,
    freeMode: true,
    spaceBetween: 0,
    grabCursor: true,
    slidesPerView: 1,
    loop:true,
    autoplay: {
      pauseOnMouseEnter: true,
      delay: 0,
      disableOnInteraction: false,
    },
    freeMode: true,
    speed: 10000,
    freeModeMomentum: false,
    
  });

}

infinitescroll();

var maindiv = document.querySelector('#main');


var t1 = gsap.timeline();

t1.from('.loader',{
  x:900,
  duration:1,
  stagger:0.1,
  ease:'expo'
})

t1.from('.loader h3',{
  x:100,
  duration:2,
  stagger:0.1,
  ease:'expo'
})

 t1.to('.loader',{
    x:900*2,
    display:'none',
    yoyo:true,
    opacity:0,
    duration:1,
     ease:'power2',
    onStart:textAnimaterejouice,
     
})



// document.addEventListener('DOMContentLoaded',() =>{
//   gsap.from('.loader', {
//     x:900,
//     duration:1,
//     ease:'expo'
//   })
//   gsap.from('.loader h3',{
//     x:100,
//     stagger:0.1,
//     duration:2,
    
//   })

//   window.addEventListener('load', () =>{
//     setTimeout(() => {
//       maindiv.style.opacity = 1;
//       maindiv.style.display = 'block';
//       gsap.to('.loader',{
//         x:900*2,
//         display:'none',
//         yoyo:true,
//         duration:1,
//         ease:'power2'
//        })
//      },3000)      
//     });

// })

