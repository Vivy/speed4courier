document.addEventListener("DOMContentLoaded", function () {
  const imageObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach((entry) => {
      const lazyImage = entry.target;
      lazyImage.style.src = `url(${lazyImage.dataset.src})`;
      lazyImage.classList.remove("smart-load");
      imgObserver.unobserver(lazyImage);
    })
  })
  const arr = document.querySelectorAll(".smart-load.css");
  arr.forEach((v) => {
    imageObserver.observe(v);
  })
})
