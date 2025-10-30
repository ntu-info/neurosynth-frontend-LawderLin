

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function groupByFirstLetter(terms) {
    // Grouping terms by their starting letter A-Z
    // Returns an array of objects: { letter: 'A', terms: [...] }

    const letters = [];
    for (let i = 0; i < 26; i++) {
        letters.push(String.fromCharCode(65 + i));
    }

    var groupList = letters.map(letter => {
        const filteredTerms = terms.filter(term => term.toUpperCase().startsWith(letter));
        return {
            letter: letter,
            terms: filteredTerms
        };
    });
    // Drop groups with no terms
    groupList = groupList.filter(group => group.terms.length > 0);

    return groupList;
}

