import Foundations10Welcome from 'components/ModulesFoundations/Foundations10Welcome';
import Foundations11Overview from 'components/ModulesFoundations/Foundations11Overview';
import Foundations12Read from 'components/ModulesFoundations/Foundations12Read';
import Foundations13Watch from 'components/ModulesFoundations/Foundations13Watch';
import Foundations14Plan from 'components/ModulesFoundations/Foundations14Plan';

import English2A1Overview from 'components/ModulesEnglish/English2A1Overview';
import English2A2Time from 'components/ModulesEnglish/English2A2Time';
import English2A3Skipping from 'components/ModulesEnglish/English2A3Skipping';
import English2A4Bubbling from 'components/ModulesEnglish/English2A4Bubbling';

import Math3A1Overview from 'components/ModulesMath/Math3A1Overview';
import Math3A2Time from 'components/ModulesMath/Math3A2Time';
import Math3A3Skipping from 'components/ModulesMath/Math3A3Skipping';
import Math3A4Bubbling from 'components/ModulesMath/Math3A4Bubbling';

import Reading4A1Overview from 'components/ModulesReading/Reading4A1Overview';
import Reading4A2Time from 'components/ModulesReading/Reading4A2Time';
import Reading4A3Skipping from 'components/ModulesReading/Reading4A3Skipping';
import Reading4A4Bubbling from 'components/ModulesReading/Reading4A4Bubbling';

import Science5A1Overview from 'components/ModulesScience/Science5A1Overview';
import Science5A2Time from 'components/ModulesScience/Science5A2Time';
import Science5A3Skipping from 'components/ModulesScience/Science5A3Skipping';
import Science5A4Bubbling from 'components/ModulesScience/Science5A4Bubbling';

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
        next: ''
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
        next: ''
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
        next: ''
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
        next: ''
    }
};

export default modules;
