window.onload = async function() {
  // Grap multiple element from DOM
  function grapAll(name) {
    return document.querySelectorAll(name);
  }
  //   Grap single element from DOM
  function grapOne(name) {
    return document.querySelector(name);
  }

  let imageSlides = grapAll(".carousel__image__wrapper");
  let singleImageWidth = imageSlides[0].getBoundingClientRect().width;
  let Number = 0;
  let size = [];

  //   Stack images inline
  imageSlides.forEach(imageSlide => {
    imageSlide.style.left = singleImageWidth * Number + "px";
    size.push({ index: Number, size: imageSlide.style.left });
    Number++;
  });

  //   Animate Carousel Slides
  await setInterval(() => {
    for (let i = 0; i <= imageSlides.length; i++) {
      if (imageSlides[i].id == "current") {
        // remove id
        imageSlides[i].removeAttribute("id");

        // set prev to the current
        let prevImage = grapOne("#prev");
        prevImage.removeAttribute("id");

        // before setting to next update next to current
        let nextImage = grapOne("#next");
        nextImage.removeAttribute("id");

        nextImage.setAttribute("id", "current");
        nextImage.style.left = size[size[0].index].size;
        nextImage.style.zIndex = 10;

        prevImage.setAttribute("id", "next");
        prevImage.style.left = size[size[1].index].size;
        prevImage.style.zIndex = -10;

        imageSlides[i].setAttribute("id", "prev");
        imageSlides[i].style.left = "-" + size[size[1].index].size;
        imageSlides[i].style.zIndex = 10;

        break;
      }
    }
  }, 3000);
};
