function sortBands(bands) {
            return bands.sort((a, b) => {
                const stripArticle = name => {
                    return name.replace(/^(a |an |the )/i, '').toLowerCase();
                };

                return stripArticle(a).localeCompare(stripArticle(b));
            });
        }

        const sortedBands = sortBands(bands);
        const bandList = document.getElementById('band');
        sortedBands.forEach(band => {
            const li = document.createElement('li');
            li.textContent = band;
            bandList.appendChild(li);
        });