// document.addEventListener("DOMContentLoaded", function () {
//   const imageObserver = new IntersectionObserver((entries, imgObserver) => {
//     // console.log(entries, imgObserver)
//     entries.forEach((entry) => {
//       console.log(entry)
//       console.log(entry.target.dataset.sursa)
//       if (entry.isVisible) {
//         const lazyImage = entry.target;
//         lazyImage.src = lazyImage.dataset.sursa;
//         lazyImage.classList.remove("inca-ceva");
//         imgObserver.unobserve(lazyImage);

//       }
//     })
//   })
//   const arr = document.querySelectorAll(".inca-ceva");
//   arr.forEach((v) => {
//     imageObserver.observe(v);
//   })
// })

document.querySelectorAll('input[type="radio"]').forEach((element) => {
  element.addEventListener("change", () => {
    document.querySelector("#services").checked = false
  })
})

let loadForm = false;
const callMeOnMove = () => {
  if (!loadForm) {
    loadForm = true;
    document.removeEventListener("mousemove", callMeOnMove)

    const quoteFormular = document.querySelector("#quote-formular")
    quoteFormular.src = quoteFormular.dataset.src
  }
}
document.addEventListener("mousemove", callMeOnMove)
