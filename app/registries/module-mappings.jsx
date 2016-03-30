import Foundations10Welcome from 'components/ModulesFoundations/Foundations10Welcome';
import Foundations11Overview from 'components/ModulesFoundations/Foundations11Overview';
import Foundations12Read from 'components/ModulesFoundations/Foundations12Read';
import Foundations13Watch from 'components/ModulesFoundations/Foundations13Watch';
import Foundations14Plan from 'components/ModulesFoundations/Foundations14Plan';

import English2A1Overview from 'components/ModulesEnglish/English2A1Overview';
import English2A2Time from 'components/ModulesEnglish/English2A2Time';
import English2A3Skipping from 'components/ModulesEnglish/English2A3Skipping';
import English2A4Bubbling from 'components/ModulesEnglish/English2A4Bubbling';

const modules = {
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

    '2A1': {
        component: English2A1Overview,
        next: '2A2'
    }
};

export default modules;
