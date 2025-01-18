const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog'
];

function removeArticles(str) {
  const articles = ['a', 'an', 'the'];
  for (const article of articles) {
    if (str.toLowerCase().startsWith(article + ' ')) {
      str = str.substring(article.length + 1);
    }
  }
  return str;
}

const sortedBands = bands.sort((a, b) => {
  const aWithoutArticles = removeArticles(a);
  const bWithoutArticles = removeArticles(b);
  return aWithoutArticles.localeCompare(bWithoutArticles);
});

const bandList = document.getElementById('band');
sortedBands.forEach(band => {
  const listItem = document.createElement('li');
  listItem.textContent = band;
  bandList.appendChild(listItem);
});