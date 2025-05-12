/* Permet par défaut de s'assurer que la page commence toujours en haut */
document.addEventListener("DOMContentLoaded", () => {
  const landingSection = document.querySelector("#landing");
  if (landingSection) {
    landingSection.scrollIntoView({ behavior: "smooth" });
  }
});

/* Création aniamtion volet du toggle menu hamburger */
const menuHamburger = document.querySelector(".menu-hamburger");
const navLinks = document.querySelector(".nav-links");

menuHamburger.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
});

/* ligne code chargement optimal gsap */

gsap.registerPlugin(ScrollTrigger);

/* Animation au sroll des apparitions de texte des différente section */

const animationLanding = document.querySelector("#landing h1");
const animationTop = document.querySelector("#about .title-about");
const animationleft0 = document.querySelector("#about .history-about");
const animationRight0 = document.querySelector("#about .adventure-about");
const animationLeft0 = document.querySelector("#about .ready-about");
const animationFadeEffect0 = document.querySelector("#about .animated-link");
const animationLeft1 = document.querySelector("#track .container-track");
const animationRight1 = document.querySelector("#contact .contact-title");
const animationFadeEffect1 = document.querySelector("#contact .map-container");
const animationFadeEffect2 = document.querySelector("#contact .contact-info");
const animationFadeEffect3 = document.querySelector("#track .video-background");

document.addEventListener("DOMContentLoaded", () => {
  // animation sans scroll du h1 de la section #landing.
  gsap.from("h1", {
    x: "-120%",
    opacity: 0, // État final
    duration: 2, // Durée de l'animation
  });

  // animation au scroll texte venant du haut de la section #about.
  gsap.from(".title-about", {
    y: "-180%", // Translation depuis la gauche
    opacity: 0, // Invisible au départ
    duration: 5,
    scrollTrigger: {
      trigger: ".title-about", // Élément déclencheur
      start: "top 80%", // Début de l'animation (par rapport au viewport)
      end: "bottom 30%", // Fin de l'animation
      scrub: true, // Synchronisation avec le défilement
      markers: false, // Afficher les marqueurs pour le débogage
    },
  });
  // animation au scroll texte venant de gauche de la section #about.
  gsap.from(".history-about", {
    x: "-120%", // Translation depuis la gauche
    opacity: 0, // Invisible au départ
    duration: 1,
    scrollTrigger: {
      trigger: ".history-about", // Élément déclencheur
      start: "top 120%", // Début de l'animation (par rapport au viewport)
      end: "bottom 60%", // Fin de l'animation
      scrub: true, // Synchronisation avec le défilement
      markers: false, // Afficher les marqueurs pour le débogage
    },
  });
  // animation au scroll texte venant de droite de la section #about.
  gsap.from(".adventure-about", {
    x: "120%", // Translation depuis la gauche
    opacity: 0, // Invisible au départ
    duration: 1,
    scrollTrigger: {
      trigger: ".adventure-about", // Élément déclencheur
      start: "top 120%", // Début de l'animation (par rapport au viewport)
      end: "bottom 50%", // Fin de l'animation
      scrub: true, // Synchronisation avec le défilement
      markers: false, // Afficher les marqueurs pour le débogage
    },
  });
  // animation au scroll texte venant de gauche de la section #about.
  gsap.from(".ready-about", {
    x: "-120%", // Translation depuis la gauche
    opacity: 0, // Invisible au départ
    duration: 1,
    scrollTrigger: {
      trigger: ".ready-about", // Élément déclencheur
      start: "top 120%", // Début de l'animation (par rapport au viewport)
      end: "bottom 60%", // Fin de l'animation
      scrub: true, // Synchronisation avec le défilement
      markers: false, // Afficher les marqueurs pour le débogage
    },
  });
  // animation au scroll avec fade effect pour les liens dans la section #about
  gsap.fromTo(
    ".animated-link",
    {
      opacity: 0, // État initial
    },
    {
      opacity: 1, // État final
      duration: 2, // Durée de l'animation
      scrollTrigger: {
        trigger: ".animated-link", // Élément déclencheur
        start: "top 80%", // Début de l'animation
        end: "bottom 50%", // Fin de l'animation
        scrub: true, // Synchronisation avec le défilement
        markers: false, // Afficher les marqueurs pour le débogage
      },
    }
  );
  // animation au scroll texte venant de gauche pour la section #track.
  gsap.from(".container-track", {
    x: "-120%", // Translation depuis la gauche
    opacity: 0, // Invisible au départ
    duration: 1,
    scrollTrigger: {
      trigger: ".container-track", // Élément déclencheur
      start: "top 120%", // Début de l'animation (par rapport au viewport)
      end: "bottom 60%", // Fin de l'animation
      scrub: true, // Synchronisation avec le défilement
      markers: false, // Afficher les marqueurs pour le débogage
    },
  });

  // animation au scroll avec fade effect pour la vidéo de la section #track.
  gsap.fromTo(
    ".video-background",
    {
      opacity: 0, // État initial
    },
    {
      opacity: 1, // État final
      duration: 2, // Durée de l'animation
      scrollTrigger: {
        trigger: ".video-background", // Élément déclencheur
        start: "top 70%", // Début de l'animation
        end: "bottom 30%", // Fin de l'animation
        scrub: true, // Synchronisation avec le défilement
        markers: false, // Afficher les marqueurs pour le débogage
      },
    }
  );

  // animation au scroll texte venant de droite de la section #contact.
  gsap.from(".contact-title", {
    x: "120%", // Translation depuis la gauche
    opacity: 0, // Invisible au départ
    duration: 1,
    scrollTrigger: {
      trigger: ".contact-title", // Élément déclencheur
      start: "top 120%", // Début de l'animation (par rapport au viewport)
      end: "bottom 50%", // Fin de l'animation
      scrub: true, // Synchronisation avec le défilement
      markers: false, // Afficher les marqueurs pour le débogage
    },
  });

  // animation au scroll avec fade effect pour le iFrame de la section #contact.
  gsap.fromTo(
    ".map-container",
    {
      opacity: 0, // État initial
    },
    {
      opacity: 1, // État final
      duration: 3, // Durée de l'animation
      scrollTrigger: {
        trigger: ".map-container", // Élément déclencheur
        start: "top 60%", // Début de l'animation
        end: "bottom 50%", // Fin de l'animation
        scrub: true, // Synchronisation avec le défilement
        markers: false, // Afficher les marqueurs pour le débogage
      },
    }
  );
  // animation au scroll avec fade effect pour les coordonées de la section #contact.
  gsap.fromTo(
    ".contact-info",
    {
      opacity: 0, // État initial
    },
    {
      opacity: 1, // État final
      duration: 2, // Durée de l'animation
      scrollTrigger: {
        trigger: ".contact-info", // Élément déclencheur
        start: "top 80%", // Début de l'animation
        end: "bottom 40%", // Fin de l'animation
        scrub: true, // Synchronisation avec le défilement
        markers: false, // Afficher les marqueurs pour le débogage
      },
    }
  );
});

/* navigation pour le slider au niveau de la gallerie */
document.querySelectorAll(".slider-nav button").forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-slide");
    const targetSlide = document.getElementById(targetId);

    // Défilement au slider correspondant
    if (targetSlide) {
      targetSlide.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/* Mise en place de l'animation fade effect de la #gallery */

/* Mise en place de l'animation au scroll */
