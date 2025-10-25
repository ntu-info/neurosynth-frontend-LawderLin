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

function createTermListElement(termGroups) {
    // termGroups: array of { letter: 'A', terms: [...] }, without empty groups
    // Return HTML elements for displaying grouped terms

    let out = "";

    for (let group of termGroups) {
        // const group = termGroups[i];
        let html = `<div id="term-group-${group.letter}" class="term-group card mb-4 border-0">`;
        html += `<div id="header-${group.letter}" class="card-header"><h3 class="card-title">${group.letter}</h3>`;
        // collapsible list of terms
        html += `<button class="btn btn-link" data-bs-toggle="collapse" data-bs-target="#collapse-${group.letter}" aria-expanded="false" aria-controls="collapse-${group.letter}">Show Terms</button></div>`;
        html += '<div class="collapse" id="collapse-' + group.letter + '">';

        // List terms
        let termsLink = 'term_association.html?term=';
        for (let i = 0; i < group.terms.length; i++) {
            const term = group.terms[i];

            // Wrap every 4 terms in a row when display is medium or larger
            if (i % 4 === 0) {
                html += '<div class="row">';
            }
            html += `<a href="${termsLink}${term}" class="term-link col-md-3">${term}</a>`;
            if (i % 4 === 3 || i === group.terms.length - 1) {
                html += '</div>'; // close row
            }
        }
        html += '</div></div>';

        // // Wrap every 4 cards in a row
        // if (i % 4 == 0) {
        //     html = "<div class='row'>" + html;
        // }else if (i % 4 == 3 || i == termGroups.length - 1) {
        //     html += "</div>";
        // }
        out += html;
    }

    return out;
}