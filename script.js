document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");

  const throttle = (fn, wait) => {
    let lastTime = 0;
    return function (...args) {
      const now = new Date().getTime();
      if (now - lastTime >= wait) {
        fn.apply(this, args);
        lastTime = now;
      }
    };
  };

  const handleScroll = () => {
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85 && rect.bottom > 0) {
        section.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", throttle(handleScroll, 200));
  handleScroll(); // Initial check
});
