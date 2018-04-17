import {
    VIDEOS_GENERAL,
    VIDEOS_ENGLISH_STRATEGIES,
    VIDEOS_MATH_STRATEGIES,
    VIDEOS_READING_STRATEGIES,
    VIDEOS_SCIENCE_STRATEGIES
} from 'app/constants/videos-strategies';

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
        // learn: VIDEOS_ENGLISH_LEARN,
        // practice: VIDEOS_ENGLISH_PRACTICE
    },
    math: {
        key: 'math',
        title: 'ACT Math',
        icon: 'calculator',
        strategies: VIDEOS_MATH_STRATEGIES,
        // learn: VIDEOS_MATH_LEARN,
        // practice: VIDEOS_MATH_PRACTICE
    },
    reading: {
        key: 'reading',
        title: 'ACT Reading',
        icon: 'book',
        strategies: VIDEOS_READING_STRATEGIES,
        // practice: VIDEOS_READING_PRACTICE
    },
    science: {
        key: 'science',
        title: 'ACT Science',
        icon: 'flask',
        strategies: VIDEOS_SCIENCE_STRATEGIES,
        // practice: VIDEOS_SCIENCE_PRACTICE
    },
    writing: {
        key: 'writing',
        title: 'ACT Writing',
        icon: 'file-text'
    }
}