document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.comment__container-button').forEach((el) => {
    el.addEventListener('click', () => {

      let content = el.previousElementSibling;
      console.log(content)

      if (content.style.maxHeight) {
        document.querySelectorAll('.comment__text').forEach((el) => el.style.maxHeight = null)
      }
      else {
        document.querySelectorAll('.comment__text').forEach((el) => el.style.maxHeight = null)
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    })
  })

  document.querySelectorAll('.card__button').forEach((el) => {
    el.addEventListener('click', () => {

      let content = el.previousElementSibling;
      console.log(content)

      if (content.style.maxHeight) {
        document.querySelectorAll('.card__description').forEach((el) => el.style.maxHeight = null)
      }
      else {
        document.querySelectorAll('.card__description').forEach((el) => el.style.maxHeight = null)
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    })
  })
})
