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


const sortedBands = bands.sort((a, b) => {
  const aWithoutArticles = removeArticles(a);
  const bWithoutArticles = removeArticles(b);
  return aWithoutArticles.localeCompare(bWithoutArticles);
});

const bandList = document.getElementById('band'); 

if (!bandList) {
  bandList = document.createElement('ul');
  bandList.id = 'band'; 
  document.body.appendChild(bandList); 
}
