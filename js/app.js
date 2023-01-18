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
const sections = document.querySelectorAll("section");
const id = document.getElementsByTagName("id");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
for (section of sections) {
  const navList = document.createElement("li");
  const anchorLink = document.createElement("a");
  anchorLink.innerHTML = section.dataset.nav;
  anchorLink.href = "#" + section.id;
  anchorLink.classList.add("menu__link");
  navList.appendChild(anchorLink);
  navbar.appendChild(navList);
}

console.log(navbar);

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
