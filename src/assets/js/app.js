new Swiper('.block-container-bottom', {
    navigation: {
      nextEl: '.block-container-bottom__arrow-right',
      prevEl: '.block-container-bottom__arrow-left',
    },
    slidesPerView: 3,
    spaceBetween: 40,
    slidesPerGroup: 3,
    loop: true,
    centredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1.2
      },
      750: {
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      1500: {
        slidesPerView: 3,
        slidesPerGroup: 3
      },
    }
  }
)

new Swiper('.comments__list', {
    navigation: {
      nextEl: '.comments__arrow-right',
      prevEl: '.comments__arrow-left',
    },
    slidesPerView: 3,
    spaceBetween: 40,
    slidesPerGroup: 3,
    loop: true,
    centredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1.2
      },
      750: {
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      1500: {
        slidesPerView: 3,
        slidesPerGroup: 3
      },
    }
  }
)

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.comment__container-button').forEach((el) => {
    el.addEventListener('click', () => {

      let content = el.previousElementSibling;
      console.log(content)

      if (content.style.maxHeight) {
        document.querySelectorAll('.comment__text').forEach((el) => el.style.maxHeight = null)
        el.textContent = 'Развернуть';
      } else {
        document.querySelectorAll('.comment__text').forEach((el) => el.style.maxHeight = null)
        content.style.maxHeight = content.scrollHeight + 'px';
        el.textContent = 'Свернуть';
      }
    })
  })

  document.querySelectorAll('.card__button').forEach((el) => {
    el.addEventListener('click', () => {

      let content = el.previousElementSibling;
      console.log(content)

      if (content.style.maxHeight) {
        document.querySelectorAll('.card__description').forEach((el) => el.style.maxHeight = null)
      } else {
        document.querySelectorAll('.card__description').forEach((el) => el.style.maxHeight = null)
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    })
  })
})
