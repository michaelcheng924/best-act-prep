import {
    VIDEOS_GENERAL,
    VIDEOS_ENGLISH_STRATEGIES,
    VIDEOS_MATH_STRATEGIES,
    VIDEOS_READING_STRATEGIES,
    VIDEOS_SCIENCE_STRATEGIES
} from 'app/constants/videos-strategies';

import {
    VIDEOS_ENGLISH_PRACTICE,
    VIDEOS_MATH_PRACTICE,
    VIDEOS_READING_PRACTICE,
    VIDEOS_SCIENCE_PRACTICE
} from 'app/constants/videos-practice';

import {
    ENGLISH_REVIEW_PDF
} from 'app/constants/review-english';

import {
    MATH_REVIEW_PDF
} from 'app/constants/review-math';

export default {
    general: {
        key: 'general',
        title: 'General',
        icon: 'info-circle',
        strategies: VIDEOS_GENERAL
    },
    english: {
        key: 'english',
        title: 'ACT English',
        icon: 'pencil',
        strategies: VIDEOS_ENGLISH_STRATEGIES,
        review: ENGLISH_REVIEW_PDF,
        practice: VIDEOS_ENGLISH_PRACTICE
    },
    math: {
        key: 'math',
        title: 'ACT Math',
        icon: 'calculator',
        strategies: VIDEOS_MATH_STRATEGIES,
        review: MATH_REVIEW_PDF,
        practice: VIDEOS_MATH_PRACTICE
    },
    reading: {
        key: 'reading',
        title: 'ACT Reading',
        icon: 'book',
        strategies: VIDEOS_READING_STRATEGIES,
        practice: VIDEOS_READING_PRACTICE
    },
    science: {
        key: 'science',
        title: 'ACT Science',
        icon: 'flask',
        strategies: VIDEOS_SCIENCE_STRATEGIES,
        practice: VIDEOS_SCIENCE_PRACTICE
    },
    writing: {
        key: 'writing',
        title: 'ACT Writing',
        icon: 'file-text'
    }
}