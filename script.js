document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");

  const handleScroll = () => {
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        section.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Trigger once on load
});
