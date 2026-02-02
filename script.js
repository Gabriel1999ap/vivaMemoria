// Aguardar o DOM carregar
document.addEventListener("DOMContentLoaded", () => {
  // Registrar Plugins GSAP
  gsap.registerPlugin(ScrollTrigger);
  if (window.innerWidth < 768) {
    ScrollTrigger.getAll().forEach((t) => t.kill());
    gsap.globalTimeline.clear();
  }

  // --- Hero Animations ---

  const heroTl = gsap.timeline();

  // Entrada dos textos
  heroTl
    .from(".badge", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out" })
    .from(".hero-title", { y: 30, opacity: 0, duration: 0.8 }, "-=0.6")
    .from(".hero-subtitle", { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
    .from(".hero-actions", { y: 20, opacity: 0, duration: 0.6 }, "-=0.4");

  // Entrada dos Mockups (Efeito 3D e Slide)
  heroTl.from(
    ".main-magnet",
    {
      x: 100,
      opacity: 0,
      rotation: 10,
      duration: 1.2,
      ease: "back.out(1.7)",
    },
    "-=0.8",
  );

  heroTl.from(
    ".secondary-magnet",
    {
      x: 50,
      opacity: 0,
      scale: 0.8,
      duration: 1,
      ease: "power2.out",
    },
    "-=1",
  );

  // Animação contínua de flutuação no mockup
  gsap.to(".main-magnet", {
    y: -15,
    rotation: -5,
    duration: 3,
    yoyo: true,
    repeat: -1,
    repeatDelay: 1,

    ease: "sine.inOut",
  });

  gsap.to(".secondary-magnet", {
    y: -10,
    rotation: 8,
    duration: 4,
    yoyo: true,
    repeat: -1,
    repeatDelay: 1,

    ease: "sine.inOut",
    delay: 0.5,
  });

  // Efeito de brilho passando no ímã (Gloss)
  gsap.to(".resin-glass", {
    opacity: 0.85,
    duration: 1.2,
    yoyo: true,
    repeat: -1,
    ease: "sine.inOut",
  });

  // --- Scroll Animations ---

  // Passos (Staggered Fade In)
  gsap.utils.toArray(".step-card").forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
      },
      y: 40,
      opacity: 0,
      duration: 0.6,
      delay: i * 0.1,
      ease: "power3.out",
    });
  });

  // Animação de entrada dos ícones
  //   const icons = document.querySelectorAll(".step-icon i");
  //   icons.forEach((icon) => {
  //     gsap.from(icon, {
  //       scrollTrigger: {
  //         trigger: icon,
  //         start: "top 80%",
  //       },
  //       scale: 0,
  //       rotation: 360,
  //       duration: 0.6,
  //       ease: "back.out(1.7)",
  //     });
  //   });

  // Features Section (Slide from side)
  gsap.from(".feature-image-wrapper", {
    scrollTrigger: {
      trigger: ".features",
      start: "top 70%",
    },
    x: -50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(".feature-item", {
    scrollTrigger: {
      trigger: ".feature-list",
      start: "top 75%",
    },
    x: 50,
    opacity: 0,
    stagger: 0.2,
    duration: 0.8,
    ease: "power3.out",
  });

  // Galeria (Fade Up com Scale leve)
  gsap.utils.toArray(".gallery-item").forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: ".gallery-grid",
        start: "top 80%",
      },
      y: 30,
      opacity: 0,
      scale: 0.9,
      duration: 0.6,
      delay: i * 0.1,
      ease: "power2.out",
    });
  });

  // Parallax Text Animation (Emotional Section)
  gsap.to(".emotional-content", {
    scrollTrigger: {
      trigger: ".emotional-cta",
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
    y: -50,
    opacity: 1,
  });

  // Depoimentos (Entrada suave)
  gsap.from(".testimonial-card", {
    scrollTrigger: {
      trigger: ".testimonials",
      start: "top 80%",
    },
    scale: 0.9,
    opacity: 0,
    duration: 0.8,
    ease: "back.out(1.7)",
  });

  // Botão CTA Final (Pulsar atenção)
  gsap.to(".cta-pulse", {
    scale: 1.05,
    boxShadow: "0 0 20px rgba(108, 92, 231, 0.4)",
    duration: 0.8,
    yoyo: true,
    repeat: -1,
    repeatDelay: 1,

    ease: "sine.inOut",
  });

  gsap.utils.toArray(".combo-card").forEach((card) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
      },
      y: 40,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
    });
  });

  // --- Interatividade Extra ---

  // Smooth Scroll para links âncora
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = this.getAttribute("href");

      if (target === "#" || !document.querySelector(target)) return;

      e.preventDefault();
      document.querySelector(target).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Parallax suave do mouse no Hero (Desktop apenas)
  const heroSection = document.querySelector(".hero");
  let mouseTimeout;

  heroSection.addEventListener("mousemove", (e) => {
    if (window.innerWidth > 968) {
      clearTimeout(mouseTimeout);
      mouseTimeout = setTimeout(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;

        gsap.to(".main-magnet", {
          rotationY: x,
          rotationX: -y,
          duration: 0.8,
          ease: "power1.out",
        });
      }, 30);
    }
  });

  ScrollTrigger.refresh();
});
const stories = {
  0: [
    "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1200",
    "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1200",
    "https://images.unsplash.com/photo-1516961642265-531546e84af2?q=80&w=1200",
  ],
  1: [
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1200",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200",
  ],
  2: [
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200",
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200",
  ],
  3: [
    "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1200",
    "https://images.unsplash.com/photo-1516961642265-531546e84af2?q=80&w=1200",
  ],
};

const modal = document.getElementById("storyModal");
const img = document.getElementById("storyImage");
const progressContainer = document.getElementById("storyProgress");

let currentStory = [];
let currentIndex = 0;
let timer;
const STORY_TIME = 5000;

document.querySelectorAll(".gallery-item").forEach((item) => {
  item.addEventListener("click", () => {
    const id = item.dataset.story;
    openStories(stories[id]);
  });
});

function openStories(storyArray) {
  if (!storyArray) return;

  currentStory = storyArray;
  currentIndex = 0;

  buildProgressBar(storyArray.length);

  modal.style.display = "flex";
  showStory();
}

function buildProgressBar(total) {
  progressContainer.innerHTML = "";

  for (let i = 0; i < total; i++) {
    const segment = document.createElement("div");
    segment.classList.add("segment");

    const fill = document.createElement("span");
    segment.appendChild(fill);

    progressContainer.appendChild(segment);
  }
}

function showStory() {
  img.src = currentStory[currentIndex];

  const segments = document.querySelectorAll(".segment span");

  segments.forEach((seg, i) => {
    seg.style.transition = "none";
    seg.style.width = i < currentIndex ? "100%" : "0%";
  });

  setTimeout(() => {
    segments[currentIndex].style.transition = `width ${STORY_TIME}ms linear`;
    segments[currentIndex].style.width = "100%";
  }, 50);

  timer = setTimeout(nextStory, STORY_TIME);
}

function nextStory() {
  currentIndex++;

  if (currentIndex < currentStory.length) {
    showStory();
  } else {
    closeStory();
  }
}

function closeStory() {
  clearTimeout(timer);
  modal.style.display = "none";
}
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeStory();
  }
});

modal.addEventListener("click", closeStory);
