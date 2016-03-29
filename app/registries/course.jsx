const sections = [
{
    id: '1',
    name: 'ACT Foundations',
    modules: [
        { id: '1.0', name: 'Welcome, Instructions' },
        { id: '1.1', name: 'Overview/Format' },
        { id: '1.2', name: 'Read, Read, Read!' },
        { id: '1.3', name: 'Use a Digital Watch' },
        { id: '1.4', name: 'The Best ACT Prep Plan' }
    ]
},
{
    id: '2',
    name: 'ACT English',
    modules: [
        { id: '2.A', title: 'Introduction/Basics' },
        { id: '2.A.1', partialId: 'A.1', name: 'Overview/Format' },
        { id: '2.A.2', partialId: 'A.2', name: 'Managing Time' },
        { id: '2.A.3', partialId: 'A.3', name: 'Skipping/Marking Questions' },
        { id: '2.A.4', partialId: 'A.4', name: 'Bubbling' },
        { id: '2.B', title: 'Specific Strategies' },
        { id: '2.B.1', partialId: 'B.1', name: 'Memorize Grammar Rules' },
        { id: '2.B.2', partialId: 'B.2', name: 'Shorter is Usually Better' },
        { id: '2.B.3', partialId: 'B.3', name: 'Skim, then Look at Context' },
        { id: '2.B.4', partialId: 'B.4', name: 'Read "Out Loud"' },
        { id: '2.C', title: 'Practice Plan' },
        { id: '2.D', title: 'Grammar Rules to Know' }
    ]
},
{
    id: '3',
    name: 'ACT Math',
    modules: [
        { id: '3.A', title: 'Introduction/Basics' },
        { id: '3.A.1', partialId: 'A.1', name: 'Overview/Format' },
        { id: '3.A.2', partialId: 'A.2', name: 'Managing Time' },
        { id: '3.A.3', partialId: 'A.3', name: 'Skipping/Marking Questions' },
        { id: '3.A.4', partialId: 'A.4', name: 'Bubbling' },
        { id: '3.B', title: 'Specific Strategies' },
        { id: '3.C', title: 'Practice Plan' },
        { id: '3.D', title: 'Math Concepts to Know' }
    ]
},
{
    id: '4',
    name: 'ACT Reading',
    modules: [
        { id: '4.A', title: 'Introduction/Basics' },
        { id: '4.A.1', partialId: 'A.1', name: 'Overview/Format' },
        { id: '4.A.2', partialId: 'A.2', name: 'Managing Time' },
        { id: '4.A.3', partialId: 'A.3', name: 'Skipping/Marking Questions' },
        { id: '4.A.4', partialId: 'A.4', name: 'Bubbling' },
        { id: '4.B', title: 'Specific Strategies' },
        { id: '4.C', title: 'Practice Plan' }
    ]
},
{
    id: '5',
    name: 'ACT Science',
    modules: [
        { id: '5.A', title: 'Introduction/Basics' },
        { id: '5.A.1', partialId: 'A.1', name: 'Overview/Format' },
        { id: '5.A.2', partialId: 'A.2', name: 'Managing Time' },
        { id: '5.A.3', partialId: 'A.3', name: 'Skipping/Marking Questions' },
        { id: '5.A.4', partialId: 'A.4', name: 'Bubbling' },
        { id: '2.B', title: 'Specific Strategies' },
        { id: '2.C', title: 'Practice Plan' }
    ]
},
{
    id: '6',
    name: 'ACT Writing',
    modules: [
        { id: '6.A', title: 'Introduction/Basics' },
        { id: '6.A.1', partialId: 'A.1', name: 'Overview/Format' },
        { id: '6.A.2', partialId: 'A.2', name: 'Managing Time' },
        { id: '6.B', title: 'Specific Strategies' },
        { id: '6.C', title: 'Practice Plan' }
    ]
},
{
    id: '7',
    name: 'The Full ACT',
    modules: [
        { id: '7.1', name: 'Being Mentally Prepared' },
        { id: '7.2', name: 'Taking the Full ACT Test' }
    ]
}
];

export default sections;