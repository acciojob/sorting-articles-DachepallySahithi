//your JS code here. If required.
function stricpArticle(band) {
	const articles = ['a', 'an', 'the'];
	const bandWords = band.split(' ');
	if (articles.includes(bandWords[0].toLowerCase())){
		bandWords.shift();
	}
	return bandWords.join(' ');
	}
const sortedBands = bands.sort((a,b) => {
	const stripA = stricpArticle(a);
	const stripB = stricpArticle(b);
	return stripA.localCompare(stripB);
});
const ul = document.getElementById('band');
    sortedBands.forEach(band => {
      const li = document.createElement('li');
      li.textContent = band;
      ul.appendChild(li);
});