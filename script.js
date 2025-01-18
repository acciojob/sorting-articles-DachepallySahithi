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

function sortBands(bands) {
    const ignoreWords = ['a', 'an', 'the'];

    return bands.sort((a, b) => {
        const getSortKey = (bandName) => {
            const nameParts = bandName.split(' ');
            const firstWord = nameParts[0].toLowerCase();
            if (ignoreWords.includes(firstWord)) {
                return nameParts.slice(1).join(' ').toLowerCase(); // Ignore first word and sort the rest
            }
            return bandName.toLowerCase();
        };

        return getSortKey(a).localeCompare(getSortKey(b));
    });
}

// Sort the band names
const sortedBands = sortBands(bands);

const bandList = document.getElementById('bands');
sortedBands.forEach(band => {
    const li = document.createElement('li');
    li.textContent = bands;
    bandList.appendChild(li);
});
