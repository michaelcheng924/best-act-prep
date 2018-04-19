import SUBJECT_VERB_1 from './english-review/01-subject-verb-1';
import SUBJECT_VERB_2 from './english-review/02-subject-verb-2';

const ENGLISH_REVIEW = [
    {
        title: 'PDF - All grammar rules',
        id: 'english-grammar-pdf',
        pdf: '/review-guides/review-guide-grammar.pdf',
        restricted: true
    },
    {
        title: 'Specific Review of Grammar Rules',
        concepts: [
            SUBJECT_VERB_1,
            // SUBJECT_VERB_2
        ]
    }
];

export {
    ENGLISH_REVIEW
};
