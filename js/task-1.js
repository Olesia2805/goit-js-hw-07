const listWithId = document.querySelector('#categories');

const itemsByTagName = listWithId.querySelectorAll('.item');

console.log(`Number of categories: ${itemsByTagName.length}`);

itemsByTagName.forEach(item => {
  const itemContent = item.firstElementChild.textContent;
  const itemChildLength = item.querySelectorAll('li').length;

  console.log(`Category: ${itemContent}\nElements: ${itemChildLength}`);
});
