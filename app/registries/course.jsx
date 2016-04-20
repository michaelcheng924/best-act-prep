const sections = [
{
    id: '1',
    name: 'ACT Foundations',
    modules: [
        { id: '10', displayId: '1.0', name: 'Welcome, Instructions' },
        { id: '11', displayId: '1.1', name: 'ACT Overview/Format' },
        { id: '12', displayId: '1.2', name: 'Read, Read, Read!' },
        { id: '13', displayId: '1.3', name: 'Digital Watch Not Optional!' },
        { id: '14', displayId: '1.4', name: 'The Best ACT Prep Plan' }
    ]
},
{
    id: '2',
    name: 'ACT English',
    modules: [
        { id: '2A', displayId: '2.A', title: 'Basics' },
        { id: '2A1', displayId: 'A.1', name: 'Overview/Format' },
        { id: '2A2', displayId: 'A.2', name: 'Managing Time' },
        { id: '2A3', displayId: 'A.3', name: 'Skipping/Marking Questions' },
        { id: '2A4', displayId: 'A.4', name: 'Bubbling' },
        { id: '2A5', displayId: 'A.5', name: 'Sample Score Chart' },
        { id: '2B', displayId: '2.B', title: 'Specific Strategies' },
        { id: '2B1', displayId: 'B.1', name: 'Memorize Grammar Rules' },
        { id: '2B2', displayId: 'B.2', name: 'Shorter is Usually Better' },
        { id: '2B3', displayId: 'B.3', name: 'Skim and Look Above/Below' },
        { id: '2B4', displayId: 'B.4', name: 'Read "Out Loud"' },
        { id: '2C', displayId: '2.C', title: 'Practice Plan' },
        { id: '2C1', displayId: 'C.1', name: 'One Passage at a Time' },
        { id: '2C2', displayId: 'C.2', name: 'Two/Three Passages Together' },
        { id: '2C3', displayId: 'C.3', name: 'All Five Passages' },
        { id: '2D', displayId: '2.D', title: 'Grammar Rules to Know' },
        { id: '2D1', displayId: 'D.1', name: 'All Grammar Rules PDF' }
    ]
},
{
    id: '3',
    name: 'ACT Math',
    modules: [
        { id: '3A', displayId: '3.A', title: 'Basics' },
        { id: '3A1', displayId: 'A.1', name: 'Overview/Format' },
        { id: '3A2', displayId: 'A.2', name: 'Managing Time' },
        { id: '3A3', displayId: 'A.3', name: 'Skipping/Marking Questions' },
        { id: '3A4', displayId: 'A.4', name: 'Bubbling' },
        { id: '3A5', displayId: 'A.5', name: 'Sample Score Chart' },
        { id: '3B', displayId: '3.B', title: 'Specific Strategies' },
        { id: '3B1', displayId: 'B.1', name: 'Memorize Math Concepts' },
        { id: '3B2', displayId: 'B.2', name: '"Cheat" Using the Answers' },
        { id: '3B3', displayId: 'B.3', name: '"Cheat" by Plugging in Numbers' },
        { id: '3B4', displayId: 'B.4', name: 'Draw the Problem' },
        { id: '3B5', displayId: 'B.5', name: 'Use a Graphing Calculator' },
        { id: '3C', displayId: '3.C', title: 'Practice Plan' },
        { id: '3C1', displayId: 'C.1', name: 'First 30 Questions' },
        { id: '3C2', displayId: 'C.2', name: 'Last 30 Questions' },
        { id: '3C3', displayId: 'C.3', name: 'All 60 Questions' },
        { id: '3D', displayId: '3.D', title: 'Math Concepts to Know' },
        { id: '3D1', displayId: 'D.1', name: 'All Math Concepts PDF' }
    ]
},
{
    id: '4',
    name: 'ACT Reading',
    modules: [
        { id: '4A', displayId: '4.A', title: 'Basics' },
        { id: '4A1', displayId: 'A.1', name: 'Overview/Format' },
        { id: '4A2', displayId: 'A.2', name: 'Managing Time' },
        { id: '4A3', displayId: 'A.3', name: 'Skipping/Marking Questions' },
        { id: '4A4', displayId: 'A.4', name: 'Bubbling' },
        { id: '4A5', displayId: 'A.5', name: 'Sample Score Chart' },
        { id: '4B', displayId: '4.B', title: 'Specific Strategies' },
        { id: '4B1', displayId: 'B.1', name: 'Do the Prose Passage Last' },
        { id: '4B2', displayId: 'B.2', name: 'Use Your Finger(s)' },
        { id: '4B3', displayId: 'B.3', name: 'What\'s the Main Idea/Message?' },
        { id: '4B4', displayId: 'B.4', name: 'Guess the Answer First' },
        { id: '4B5', displayId: 'B.5', name: 'Narrowing Down the Choices' },
        { id: '4C', displayId: '4.C', title: 'Practice Plan' },
        { id: '4C1', displayId: 'C.1', name: 'One Passage at a Time' },
        { id: '4C2', displayId: 'C.2', name: 'Two Passages Together' },
        { id: '4C3', displayId: 'C.3', name: 'All Four Passages' }
    ]
},
{
    id: '5',
    name: 'ACT Science',
    modules: [
        { id: '5A', displayId: '5.A', title: 'Basics' },
        { id: '5A1', displayId: 'A.1', name: 'Overview/Format' },
        { id: '5A2', displayId: 'A.2', name: 'Managing Time' },
        { id: '5A3', displayId: 'A.3', name: 'Skipping/Marking Questions' },
        { id: '5A4', displayId: 'A.4', name: 'Bubbling' },
        { id: '5A5', displayId: 'A.5', name: 'Sample Score Chart' },
        { id: '5B', displayId: '5.B', title: 'Specific Strategies' },
        { id: '5B1', displayId: 'B.1', name: 'Conflicting Viewpoints Strategy' },
        { id: '5B2', displayId: 'B.2', name: 'Use Your Finger(s)' },
        { id: '5B3', displayId: 'B.3', name: 'Reading Charts Faster' },
        { id: '5C', displayId: '5.C', title: 'Practice Plan' },
        { id: '5C1', displayId: 'C.1', name: 'One Passage at a Time' },
        { id: '5C2', displayId: 'C.2', name: 'Three, Three, One' },
        { id: '5C3', displayId: 'C.3', name: 'All Seven Passages' }
    ]
},
{
    id: '6',
    name: 'ACT Writing',
    modules: [
        { id: '6A', displayId: '6.A', title: 'In Progress' }
        // { id: '6A', title: 'Basics' },
        // { id: '6A1', partialId: 'A1', name: 'Overview/Format' },
        // { id: '6A2', partialId: 'A2', name: 'Managing Time' },
        // { id: '6B', title: 'Specific Strategies' },
        // { id: '6C', title: 'Practice Plan' }
    ]
},
{
    id: '7',
    name: 'The Full ACT',
    modules: [
        { id: '71', displayId: '7.1', name: 'Full ACT Test Preparation' },
        { id: '72', displayId: '7.2', name: 'Full ACT Practice Test #1' },
        { id: '73', displayId: '7.3', name: 'Full ACT Practice Test #2' }
    ]
},
{
    id: 'Z',
    name: 'Old Course Videos',
    modules: [
        { id: 'Z1', displayId: 'Z.1', name: 'ACT Basics' },
        { id: 'Z2', displayId: 'Z.2', name: 'English Strategies' },
        { id: 'Z3', displayId: 'Z.3', name: 'English Guided Practice' },
        { id: 'Z4', displayId: 'Z.4', name: 'Math Strategies' },
        { id: 'Z5', displayId: 'Z.5', name: 'Math Guided Practice' },
        { id: 'Z6', displayId: 'Z.6', name: 'Reading Strategies' },
        { id: 'Z7', displayId: 'Z.7', name: 'Reading Guided Practice' },
        { id: 'Z8', displayId: 'Z.8', name: 'Science Strategies' },
        { id: 'Z9', displayId: 'Z.9', name: 'Science Guided Practice' },
    ]
}
];

export default sections;