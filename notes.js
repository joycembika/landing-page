function makeActive() {
  let currentSectionId = "";
  for (const section of sections) {
    const box = section.getBoundingClientRect();
    //Find a value that works best, but 150 seems to be a good start.
    if (box.top <= 149.5 && box.bottom >= 806) {
      //apply active state on current section and corresponding Nav link
      section.classList.add("active-link");
      currentSectionId = "#" + section.id;
      //corresponding navLink
      const navLinks = document.querySelectorAll("nav li a");
      for (navLink of navLinks) {
        const hrefValues = navLink.getAttribute("href");
        for (hrefValue of hrefValues) {
          if (hrefValue === currentSectionId) {
            hrefValue.classList.add("active-link");
          }
        }
      }
      return;
      //Remove active state from other section and corresponding Nav link
    } else {
      return section.classList.remove("active-link");
    }
  }
}

// Make sections active
document.addEventListener("scroll", function (e) {
  e.preventDefault();
  makeActive();
});
