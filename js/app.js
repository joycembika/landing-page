/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const navbar = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section[id]");
const id = document.getElementsByTagName("id");

/**
 * End Global Variables
 *
 */

/**
 * Begin Main Functions
 *
 */

// build the nav

for (const section of sections) {
  const navList = document.createElement("li");
  const anchorLink = document.createElement("a");
  anchorLink.innerHTML = section.dataset.nav;
  anchorLink.href = "#" + section.id;
  anchorLink.classList.add("menu__link");
  navList.appendChild(anchorLink);
  navbar.appendChild(navList);
}

// Add class 'active' to section when near top of viewport

const makeActive = () => {
  for (const section of sections) {
    const box = section.getBoundingClientRect();

    //Find a value that works best, but 150 seems to be a good start.
    if (box.top <= 150 && box.bottom >= 700) {
      let links = document.querySelectorAll("#navbar__list a");
      //apply active state on current section and corresponding Nav link
      section.classList.add("active-link");
      let sectionId = "#" + section.id;
      for (const link of links) {
        if (link.hash === sectionId) {
          link.classList.add("active");
          //Remove active state from corresponding Nav link
        } else {
          link.classList.remove("active");
        }
      }

      //Remove active state from other section
    } else {
      section.classList.remove("active-link");
    }
  }
};

/**
 * End Main Functions
 * Begin Events
 *
 */

// Scroll to section on link click
const menuLinks = document.querySelectorAll("#navbar__list li a");

for (const menuLink of menuLinks) {
  menuLink.addEventListener("click", linkClicked);
}
function linkClicked(e) {
  e.preventDefault();
  document.querySelector(e.target.hash).scrollIntoView({
    behavior: "smooth",
  });
}

// Make sections active
document.addEventListener("scroll", function (e) {
  e.preventDefault();
  makeActive();
});
