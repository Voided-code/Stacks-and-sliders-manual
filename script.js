const sections = document.querySelectorAll(".rule-section");

function openSection(section) {
  const button = section.querySelector(".section-toggle");
  const body = section.querySelector(".section-body");

  section.classList.add("open");
  button.setAttribute("aria-expanded", "true");
  body.style.height = `${body.scrollHeight}px`;
}

function closeSection(section) {
  const button = section.querySelector(".section-toggle");
  const body = section.querySelector(".section-body");

  section.classList.remove("open");
  button.setAttribute("aria-expanded", "false");
  body.style.height = "0px";
}

sections.forEach((section) => {
  const button = section.querySelector(".section-toggle");

  closeSection(section);

  button.addEventListener("click", () => {
    const isOpen = section.classList.contains("open");

    sections.forEach((otherSection) => {
      if (otherSection !== section) {
        closeSection(otherSection);
      }
    });

    if (isOpen) {
      closeSection(section);
    } else {
      openSection(section);
    }
  });
});

window.addEventListener("resize", () => {
  sections.forEach((section) => {
    if (section.classList.contains("open")) {
      const body = section.querySelector(".section-body");
      body.style.height = `${body.scrollHeight}px`;
    }
  });
});