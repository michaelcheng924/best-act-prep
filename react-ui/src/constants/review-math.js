import MULTIPLYING_DIVIDING_POWERS from 'app/constants/math-review/algebra-multiplying-dividing-powers';
import RAISING_POWERS_TO_POWERS from 'app/constants/math-review/raising-powers-to-powers';

const MATH_REVIEW_PDF = [
    {
        title: 'PDF - All math concepts',
        id: 'math-concepts-pdf',
        pdf: '/review-guides/review-guide-math.pdf',
        restricted: true
    },
    {
        title: 'Specific Review of Math Concepts',
        concepts: [
            MULTIPLYING_DIVIDING_POWERS,
            RAISING_POWERS_TO_POWERS
        ]
    }
];

export {
    MATH_REVIEW_PDF
};
