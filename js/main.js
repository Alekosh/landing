const image = document.querySelector('.header__hero img');

let count = 1;
let images = [1, 2, 3, 4, 5, 6];

let = function slide() {
  image.src = "./img/" + count + ".jpg";

  if (count < images.length) {
    count++;
  }
  else {
    count = 1;
  }
  setTimeout(slide, 2000);
}()

// rating

const ratingITemsList = document.querySelectorAll('.rating__item');
const ratingItemsArray = Array.prototype.slice.call(ratingITemsList);

ratingItemsArray.forEach(item => {
  item.addEventListener('click', () => {
    const { itemValue } = item.dataset;
    item.parentNode.dataset.totalValue = itemValue;

    // request
  })
});
