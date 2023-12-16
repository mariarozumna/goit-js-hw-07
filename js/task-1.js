
const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);
categories.forEach((item) => {
  const categoryName = item.firstElementChild.textContent;
  const elementsCount = item.lastElementChild.children.length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elementsCount}`);
});

