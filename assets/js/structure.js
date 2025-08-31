// Opening site with opacity
let motiv = document.querySelector("h1");
let panter = document.querySelector(".pantera img");
let titre = document.querySelector(".title");

window.addEventListener("load", function () {
  panter.style.opacity = 1;

  setTimeout(() => {
    motiv.style.opacity = 1;
    titre.style.opacity = 1;
  }, 800);
});

// Menu hamburger
let btn = document.querySelector(".nav-bar button");
let menu = document.querySelector(".nav-bar nav");

btn.addEventListener("click", function () {
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
});

// Change of page html with effect fade
let fade = document.querySelector(".button button");
let page = document.querySelector(".container");

fade.addEventListener("click", function () {
  page.classList.add("vortex");

  setTimeout(() => {
    window.location.href = "index.html";
  }, 1700);
});

// Function to play the video when the user is on with the mouse, and mouseleave to put the video back to 0
function playVideo(box, video) {
  box.addEventListener("mouseover", function () {
    video.play();
  });
  box.addEventListener("mouseleave", function () {
    video.pause();
    video.currentTime = 0;
  });

  let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        video.classList.add("visible");
      }
    });
  },
  { threshold: 0.5 }
); // visibile quando almeno metà è nello schermo

observer.observe(video);
}

let videoBox1 = document.querySelector(".video1");
let video1 = document.querySelector(".video1 video");

let videoBox2 = document.querySelector(".video2");
let video2 = document.querySelector(".video2 video");

let videoBox3 = document.querySelector(".video3");
let video3 = document.querySelector(".video3 video");

let videoBox4 = document.querySelector(".video4");
let video4 = document.querySelector(".video4 video");

playVideo(videoBox1, video1);
playVideo(videoBox2, video2);
playVideo(videoBox3, video3);
playVideo(videoBox4, video4);
