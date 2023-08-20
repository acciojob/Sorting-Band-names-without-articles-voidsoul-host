function sortBandNamesWithoutArticles(bandNames) {
    const articles = ['a', 'an', 'the'];

    const sortedNames = bandNames.sort((a, b) => {
        const nameA = a.toLowerCase();
        const nameB = b.toLowerCase();

        for (const article of articles) {
            if (nameA.startsWith(article + ' ')) {
                return nameB.localeCompare(nameA.substring(article.length + 1));
            }
            if (nameB.startsWith(article + ' ')) {
                return nameB.substring(article.length + 1).localeCompare(nameA);
            }
        }

        return nameA.localeCompare(nameB);
    });

    return sortedNames;
}

const bandNames = ['The Beatles', 'Anthrax', 'Red Hot Chili Peppers', 'Aerosmith', 'The Rolling Stones'];
const sortedBandNames = sortBandNamesWithoutArticles(bandNames);

const ulElement = document.getElementById('band');
sortedBandNames.forEach(band => {
    const liElement = document.createElement('li');
    liElement.textContent = band;
    ulElement.appendChild(liElement);
});
