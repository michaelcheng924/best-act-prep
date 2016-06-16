import Foundations10Welcome from 'components/ModulesFoundations/Foundations10Welcome';
import Foundations11Overview from 'components/ModulesFoundations/Foundations11Overview';
import Foundations12Read from 'components/ModulesFoundations/Foundations12Read';
import Foundations13Watch from 'components/ModulesFoundations/Foundations13Watch';
import Foundations14Plan from 'components/ModulesFoundations/Foundations14Plan';

import English2A1Overview from 'components/ModulesEnglish/English2A1Overview';
import English2A2Time from 'components/ModulesEnglish/English2A2Time';
import English2A3Skipping from 'components/ModulesEnglish/English2A3Skipping';
import English2A4Bubbling from 'components/ModulesEnglish/English2A4Bubbling';
import English2A5Score from 'components/ModulesEnglish/English2A5Score';
import English2B1Memorize from 'components/ModulesEnglish/English2B1Memorize';
import English2B2Shorter from 'components/ModulesEnglish/English2B2Shorter';
import English2B3Skim from 'components/ModulesEnglish/English2B3Skim';
import English2B4OutLoud from 'components/ModulesEnglish/English2B4OutLoud';
import English2C0Analyze from 'components/ModulesEnglish/English2C0Analyze';
import English2C1One from 'components/ModulesEnglish/English2C1One';
import English2C2TwoThree from 'components/ModulesEnglish/English2C2TwoThree';
import English2C3All from 'components/ModulesEnglish/English2C3All';
import English2D1PDF from 'components/ModulesEnglish/English2D1PDF';

import Math3A1Overview from 'components/ModulesMath/Math3A1Overview';
import Math3A2Time from 'components/ModulesMath/Math3A2Time';
import Math3A3Skipping from 'components/ModulesMath/Math3A3Skipping';
import Math3A4Bubbling from 'components/ModulesMath/Math3A4Bubbling';
import Math3A5Score from 'components/ModulesMath/Math3A5Score';
import Math3B1Memorize from 'components/ModulesMath/Math3B1Memorize';
import Math3B2Answers from 'components/ModulesMath/Math3B2Answers';
import Math3B3Plugging from 'components/ModulesMath/Math3B3Plugging';
import Math3B4Draw from 'components/ModulesMath/Math3B4Draw';
import Math3B5Calculator from 'components/ModulesMath/Math3B5Calculator';
import Math3C0Analyze from 'components/ModulesMath/Math3C0Analyze';
import Math3C1First30 from 'components/ModulesMath/Math3C1First30';
import Math3C2Last30 from 'components/ModulesMath/Math3C2Last30';
import Math3C3All from 'components/ModulesMath/Math3C3All';
import Math3D1PDF from 'components/ModulesMath/Math3D1PDF';

import Reading4A1Overview from 'components/ModulesReading/Reading4A1Overview';
import Reading4A2Time from 'components/ModulesReading/Reading4A2Time';
import Reading4A3Skipping from 'components/ModulesReading/Reading4A3Skipping';
import Reading4A4Bubbling from 'components/ModulesReading/Reading4A4Bubbling';
import Reading4A5Score from 'components/ModulesReading/Reading4A5Score';
import Reading4B1Prose from 'components/ModulesReading/Reading4B1Prose';
import Reading4B2Finger from 'components/ModulesReading/Reading4B2Finger';
import Reading4B3Main from 'components/ModulesReading/Reading4B3Main';
import Reading4B4Guess from 'components/ModulesReading/Reading4B4Guess';
import Reading4B5Narrow from 'components/ModulesReading/Reading4B5Narrow';
import Reading4C0Analyze from 'components/ModulesReading/Reading4C0Analyze';
import Reading4C1One from 'components/ModulesReading/Reading4C1One';
import Reading4C2Two from 'components/ModulesReading/Reading4C2Two';
import Reading4C3All from 'components/ModulesReading/Reading4C3All';

import Science5A1Overview from 'components/ModulesScience/Science5A1Overview';
import Science5A2Time from 'components/ModulesScience/Science5A2Time';
import Science5A3Skipping from 'components/ModulesScience/Science5A3Skipping';
import Science5A4Bubbling from 'components/ModulesScience/Science5A4Bubbling';
import Science5A5Score from 'components/ModulesScience/Science5A5Score';
import Science5B1Conflicting from 'components/ModulesScience/Science5B1Conflicting';
import Science5B2Finger from 'components/ModulesScience/Science5B2Finger';
import Science5B3Charts from 'components/ModulesScience/Science5B3Charts';
import Science5C0Analyze from 'components/ModulesScience/Science5C0Analyze';
import Science5C1One from 'components/ModulesScience/Science5C1One';
import Science5C2ThreeThreeOne from 'components/ModulesScience/Science5C2ThreeThreeOne';
import Science5C3All from 'components/ModulesScience/Science5C3All';

import Full71Preparation from 'components/ModulesFull/Full71Preparation';
import Full72Test1 from 'components/ModulesFull/Full72Test1';
import Full73Test2 from 'components/ModulesFull/Full73Test2';

import OldCourse81Basics from 'components/ModulesOldCourse/OldCourse81Basics';
import OldCourse82EnglishStrategies from 'components/ModulesOldCourse/OldCourse82EnglishStrategies';
import OldCourse83EnglishGuidedPractice from 'components/ModulesOldCourse/OldCourse83EnglishGuidedPractice';
import OldCourse84MathStrategies from 'components/ModulesOldCourse/OldCourse84MathStrategies';
import OldCourse85MathGuidedPractice from 'components/ModulesOldCourse/OldCourse85MathGuidedPractice';
import OldCourse86ReadingStrategies from 'components/ModulesOldCourse/OldCourse86ReadingStrategies';
import OldCourse87ReadingGuidedPractice from 'components/ModulesOldCourse/OldCourse87ReadingGuidedPractice';
import OldCourse88ScienceStrategies from 'components/ModulesOldCourse/OldCourse88ScienceStrategies';
import OldCourse89ScienceGuidedPractice from 'components/ModulesOldCourse/OldCourse89ScienceGuidedPractice';

const modules = {
    // FOUNDATIONS
    '10': {
        component: Foundations10Welcome,
        next: '11'
    },
    '11': {
        component: Foundations11Overview,
        next: '12'
    },
    '12': {
        component: Foundations12Read,
        next: '13'
    },
    '13': {
        component: Foundations13Watch,
        next: '14'
    },
    '14': {
        component: Foundations14Plan,
        next: '2A1'
    },

    // ENGLISH
    '2A1': {
        component: English2A1Overview,
        next: '2A2'
    },
    '2A2': {
        component: English2A2Time,
        next: '2A3'
    },
    '2A3': {
        component: English2A3Skipping,
        next: '2A4'
    },
    '2A4': {
        component: English2A4Bubbling,
        next: '2A5'
    },
    '2A5': {
        component: English2A5Score,
        next: '2B1'
    },
    '2B1': {
        component: English2B1Memorize,
        next: '2B2'
    },
    '2B2': {
        component: English2B2Shorter,
        next: '2B3'
    },
    '2B3': {
        component: English2B3Skim,
        next: '2B4'
    },
    '2B4': {
        component: English2B4OutLoud,
        next: '2C0'
    },
    '2C0': {
        component: English2C0Analyze,
        next: '2C1'
    },
    '2C1': {
        component: English2C1One,
        next: '2C2'
    },
    '2C2': {
        component: English2C2TwoThree,
        next: '2C3'
    },
    '2C3': {
        component: English2C3All,
        next: '2D1'
    },
    '2D1': {
        component: English2D1PDF,
        next: '3A1'
    },

    // MATH
    '3A1': {
        component: Math3A1Overview,
        next: '3A2'
    },
    '3A2': {
        component: Math3A2Time,
        next: '3A3'
    },
    '3A3': {
        component: Math3A3Skipping,
        next: '3A4'
    },
    '3A4': {
        component: Math3A4Bubbling,
        next: '3A5'
    },
    '3A5': {
        component: Math3A5Score,
        next: '3B1'
    },
    '3B1': {
        component: Math3B1Memorize,
        next: '3B2'
    },
    '3B2': {
        component: Math3B2Answers,
        next: '3B3'
    },
    '3B3': {
        component: Math3B3Plugging,
        next: '3B4'
    },
    '3B4': {
        component: Math3B4Draw,
        next: '3B5'
    },
    '3B5': {
        component: Math3B5Calculator,
        next: '3C0'
    },
    '3C0': {
        component: Math3C0Analyze,
        next: '3C1'
    },
    '3C1': {
        component: Math3C1First30,
        next: '3C2'
    },
    '3C2': {
        component: Math3C2Last30,
        next: '3C3'
    },
    '3C3': {
        component: Math3C3All,
        next: '3D1'
    },
    '3D1': {
        component: Math3D1PDF,
        next: '4A1'
    },

    // READING
    '4A1': {
        component: Reading4A1Overview,
        next: '4A2'
    },
    '4A2': {
        component: Reading4A2Time,
        next: '4A3'
    },
    '4A3': {
        component: Reading4A3Skipping,
        next: '4A4'
    },
    '4A4': {
        component: Reading4A4Bubbling,
        next: '4A5'
    },
    '4A5': {
        component: Reading4A5Score,
        next: '4B1'
    },
    '4B1': {
        component: Reading4B1Prose,
        next: '4B2'
    },
    '4B2': {
        component: Reading4B2Finger,
        next: '4B3'
    },
    '4B3': {
        component: Reading4B3Main,
        next: '4B4'
    },
    '4B4': {
        component: Reading4B4Guess,
        next: '4B5'
    },
    '4B5': {
        component: Reading4B5Narrow,
        next: '4C0'
    },
    '4C0': {
        component: Reading4C0Analyze,
        next: '4C1'
    },
    '4C1': {
        component: Reading4C1One,
        next: '4C2'
    },
    '4C2': {
        component: Reading4C2Two,
        next: '4C3'
    },
    '4C3': {
        component: Reading4C3All,
        next: '5A1'
    },

    // SCIENCE
    '5A1': {
        component: Science5A1Overview,
        next: '5A2'
    },
    '5A2': {
        component: Science5A2Time,
        next: '5A3'
    },
    '5A3': {
        component: Science5A3Skipping,
        next: '5A4'
    },
    '5A4': {
        component: Science5A4Bubbling,
        next: '5A5'
    },
    '5A5': {
        component: Science5A5Score,
        next: '5B1'
    },
    '5B1': {
        component: Science5B1Conflicting,
        next: '5B2'
    },
    '5B2': {
        component: Science5B2Finger,
        next: '5B3'
    },
    '5B3': {
        component: Science5B3Charts,
        next: '5C0'
    },
    '5C0': {
        component: Science5C0Analyze,
        next: '5C1'
    },
    '5C1': {
        component: Science5C1One,
        next: '5C2'
    },
    '5C2': {
        component: Science5C2ThreeThreeOne,
        next: '5C3'
    },
    '5C3': {
        component: Science5C3All,
        next: '71'
    },

    // FULL
    '71': {
        component: Full71Preparation,
        next: '72'
    },
    '72': {
        component: Full72Test1,
        next: '73'
    },
    '73': {
        component: Full73Test2,
        next: 'A1'
    },

    // Miscellaneous
    'Z1': {
        component: OldCourse81Basics,
        next: 'Z2'
    },
    'Z2': {
        component: OldCourse82EnglishStrategies,
        next: 'Z3'
    },
    'Z3': {
        component: OldCourse83EnglishGuidedPractice,
        next: 'Z4'
    },
    'Z4': {
        component: OldCourse84MathStrategies,
        next: 'Z5'
    },
    'Z5': {
        component: OldCourse85MathGuidedPractice,
        next: 'Z6'
    },
    'Z6': {
        component: OldCourse86ReadingStrategies,
        next: 'Z7'
    },
    'Z7': {
        component: OldCourse87ReadingGuidedPractice,
        next: 'Z8'
    },
    'Z8': {
        component: OldCourse88ScienceStrategies,
        next: 'Z9'
    },
    'Z9': {
        component: OldCourse89ScienceGuidedPractice,
        next: 'Z9'
    }
};

export default modules;
