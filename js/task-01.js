const categoriesListEl = document.querySelector("#categories")
console.log(`Number of categories: ${categoriesListEl.children.length}`);
[...categoriesListEl.children].forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`)
    console.log(`Elements: ${item.lastElementChild.children.length}`)
})