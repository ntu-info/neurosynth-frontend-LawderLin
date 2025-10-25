[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/yOwut1-r)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=21150041&assignment_repo_type=AssignmentRepo)
# Neurosynth Frontend

You may visit the webpage [here](https://ntu-info.github.io/neurosynth-frontend-LawderLin/index.html).

This project is a demonstration for AJAX-based webpage, powered by bootstrap JS.

## Project structure
```text
.
├── autocomplete.css        # Stylesheet for autocomplete dropdown
├── autocomplete.js         # Implementation of automcomplete dropdown
├── chat_bootstrap.json     # LLM chat history. Used for learning bootstrap JS
├── chat.json               # LLM chat history for fixing JS.
├── index.html              # Homepage
├── studies.html            # List of search results with the query.
├── term_association.html   # List of terms associated with one query term.
├── terms.html              # List of all available terms, .
└── utils.js                # Functions for organizing fetched data.
```

## Features 

### Search Autocomplete

When user types in the search bar on the homepage, a dropdown list will pop up, providing suggestion according to the input.

More information: [w3schools](https://www.w3schools.com/howto/howto_js_autocomplete.asp)

### Conditional Query

User may click the "Adding Search Term" button on the homepage, which creates a new searhc bar and a dropdown selection for search condition ("And" or "Not"), to see research relevant to the query.

The results include:
- Article title, which links to the PubMed page of the article.
- Authors
- Journal
- Year of pulbication
- PMID

### Sorting Associated Terms

User may click the "Association Terms" button on the homepage to see terms associated with the query.

In the result page, user may sort the result terms by:
- Alphabetic order.
- Jaccard scores.
- Co-occurence frequecies.

Term association only allows for one input term at a time.

### List of All Available Terms

Both the "All Terms" button and the "All Terms" link in the navigation bar link to the page that have all available terms grouped by their first letter.

User may click on any term to see the relevant studies.

