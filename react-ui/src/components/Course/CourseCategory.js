import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { partial } from 'lodash';

import PRACTICE_TESTS from 'app/constants/practice-tests';
import COURSE_MAPPINGS from 'app/constants/course-mappings';
import Video from 'app/components/Course/Video';
import CourseConcepts from 'app/components/Course/CourseConcepts';

const TAB_INDEX_MAPPING = {
    english: {
        strategies: 0,
        review: 1,
        practice: 2
    },
    math: {
        strategies: 0,
        review: 1,
        practice: 2
    },
    reading: {
        strategies: 0,
        practice: 1
    },
    science: {
        strategies: 0,
        practice: 1
    }
};

class CourseCategory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            subCategory: 'strategies',
            tabIndex: 0
        };
    }

    componentDidMount() {
        const { category } = this.props;

        const pathname = window.location.pathname;
        const splitPathname = pathname.split('/');

        const subCategory = splitPathname[3];

        if (TAB_INDEX_MAPPING[category] && TAB_INDEX_MAPPING[category][subCategory]) {
            this.setState({
                subCategory,
                tabIndex: TAB_INDEX_MAPPING[category][subCategory]
            });
        } else if (pathname !== `/course/${category}`) {
            window.location.pathname = `/course/${category}`;
        }
    }

    componentWillUpdate(nextProps) {
        if (this.props.category !== nextProps.category) {
            this.setState({
                subCategory: 'strategies',
                tabIndex: 0
            });
        }
    }

    setTabIndex = tabIndex => {
        this.setState({ tabIndex });
    };

    setSubCategory = subCategory => {
        this.setState({ subCategory });
    };

    renderGeneral() {
        const { category, email } = this.props;

        const categoryData = COURSE_MAPPINGS[category];

        const numberFree = categoryData.strategies.reduce((result, item) => {
            if (!item.restricted) {
                result++;
            }

            return result;
        }, 0);
        const numberRestricted = categoryData.strategies.length - numberFree;
        const videosText = numberFree > 1 ? 'videos' : 'video';

        return (
            <div className="Course__category">
                <div className="Course__section-title">
                    General strategies for the ACT
                </div>
                {
                    email
                        ? null
                        : (
                            <div className="Course__section-stats">
                                <div>
                                    <strong>{`${numberFree}`}</strong> free {videosText}
                                </div>
                                <div className="Course__section-stat--premium">
                                    <strong>{numberRestricted}</strong> premium videos
                                </div>
                            </div>
                        )
                }
                <div className="Course__videos-container">
                    {
                        categoryData.strategies.map(item => {
                            if (!item.id) { return null; }

                            return (
                                <Video
                                    {...item}
                                    category={category}
                                    key={item.id}
                                    restricted={!email && item.restricted}
                                />
                            );
                        })
                    }
                </div>
            </div>
        );
    }

    renderStrategies() {
        const { category, email } = this.props;

        const categoryData = COURSE_MAPPINGS[category];

        const numberFree = categoryData.strategies.reduce((result, item) => {
            if (!item.restricted) {
                result++;
            }

            return result;
        }, 0);
        const numberRestricted = categoryData.strategies.length - numberFree;
        const videosText = numberFree > 1 ? 'videos' : 'video';

        return (
            <div className="Course__category">
                <div className="Course__section-title">
                    Specific strategies for the ACT English test
                </div>
                {
                    email
                        ? null
                        : (
                            <div className="Course__section-stats">
                                <div>
                                    <strong>{`${numberFree}`}</strong> free {videosText}
                                </div>
                                <div className="Course__section-stat--premium">
                                    <strong>{numberRestricted}</strong> premium videos
                                </div>
                            </div>
                        )
                }
                <div className="Course__videos-container">
                    {
                        categoryData.strategies.map(item => {
                            if (!item.id) { return null; }

                            return (
                                <Video
                                    {...item}
                                    category={category}
                                    key={item.id}
                                    restricted={!email && item.restricted}
                                />
                            );
                        })
                    }
                </div>
            </div>
        );
    }

    renderReview() {
        const { category, email } = this.props;

        const categoryData = COURSE_MAPPINGS[category];

        return (
            <CourseConcepts
                category={category}
                categoryData={categoryData}
                email={email}
            />
        );
    }

    renderPractice() {
        const { category, email } = this.props;

        const categoryData = COURSE_MAPPINGS[category];

        return (
            <div className="Course__category">
                <div className="Course__section-title">
                    Practice with real {categoryData.title} practice tests
                </div>
                {
                    email
                        ? null
                        : (
                            <div className="Course__section-stats">
                                <div className="Course__section-stat--premium">
                                    <strong>1</strong> premium PDF
                                </div>
                                <div className="Course__section-stat--premium">
                                    <strong>{categoryData.practice.length}</strong> premium videos
                                </div>
                            </div>
                        )
                }
                <div className="Course__practice-tests">
                    {
                        PRACTICE_TESTS.map(item => {
                            return (
                                <a href={item.href} key={item.href} target="_blank">
                                    <button className="Button Button--pdf">
                                        {item.name}
                                    </button>
                                </a>
                            );
                        })
                    }
                </div>
                <div className="Course__videos-container">
                    {
                        categoryData.practice.map(item => {
                            if (!item.id) { return null; }

                            return (
                                <Video
                                    {...item}
                                    category={category}
                                    key={item.id}
                                    restricted={!email && item.restricted}
                                />
                            );
                        })
                    }
                </div>
            </div>
        );
    }

    renderWriting() {
        return (
            <div className="Course__writing-coming-soon">
                Coming soon!
            </div>
        );
    }

    render() {
        const { category } = this.props;
        const { tabIndex } = this.state;
        const categoryData = COURSE_MAPPINGS[category];

        if (category === 'general') {
            return this.renderGeneral();
        }

        if (category === 'writing') {
            return this.renderWriting();
        }

        const reviewTitle = category === 'english' ? 'Grammar Rules' : 'Math Concepts';

        return (
            <div className="Course__category">
                <Tabs
                    onSelect={this.setTabIndex}
                    selectedIndex={tabIndex}
                >
                    <TabList>
                        {
                            categoryData.strategies
                                ? (
                                    <Tab>
                                        <Link
                                            to={`/course/${category}/strategies`}
                                            onClick={partial(this.setSubCategory, 'strategies')}
                                        >
                                            Strategies
                                        </Link>
                                    </Tab>
                                )
                                : null
                        }
                        {
                            categoryData.review
                                ? (
                                    <Tab>
                                        <Link
                                            to={`/course/${category}/review`}
                                            onClick={partial(this.setSubCategory, 'review')}
                                        >
                                            {reviewTitle}
                                        </Link>
                                    </Tab>
                                )
                                : null
                        }
                        {
                            categoryData.practice
                                ? (
                                    <Tab>
                                        <Link
                                            to={`/course/${category}/practice`}
                                            onClick={partial(this.setSubCategory, 'practice')}
                                        >
                                            Practice Tests
                                        </Link>
                                    </Tab>
                                )
                                : null
                        }
                    </TabList>

                    {
                        categoryData.strategies
                            ? (
                                <TabPanel>
                                    {this.renderStrategies()}
                                </TabPanel>
                            )
                            : null
                    }
                    {
                        categoryData.review
                            ? (
                                <TabPanel>
                                    {this.renderReview()}
                                </TabPanel>
                            )
                            : null
                    }
                    {
                        categoryData.practice
                            ? (
                                <TabPanel>
                                    {this.renderPractice()}
                                </TabPanel>
                            )
                            : null
                    }
                  </Tabs>
            </div>
        );
    }
}

export default CourseCategory;
