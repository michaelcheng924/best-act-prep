import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { partial } from 'lodash';

import PRACTICE_TESTS from 'app/constants/practice-tests';
import COURSE_MAPPINGS from 'app/constants/course-mappings';
import Video from 'app/components/Course/Video';

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
            this.setState({ subCategory: 'strategies' });
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

        return (
            <div className="Course__category">
                <div className="Course__section-title">
                    General strategies for the ACT
                </div>
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

        return (
            <div className="Course__category">
                <div className="Course__section-title">
                    Specific strategies for the ACT English test
                </div>
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
            <div className="Course__category">
                <div className="Course__section-title">
                    Review concepts that the {categoryData.title} test covers
                </div>
                <div className="Course__videos-container">
                    {
                        categoryData.review.map(item => {
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

    renderPractice() {
        const { category, email } = this.props;

        const categoryData = COURSE_MAPPINGS[category];

        return (
            <div className="Course__category">
                <div className="Course__section-title">
                    Practice with real {categoryData.title} practice tests
                </div>
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

    render() {
        const { category } = this.props;
        const { tabIndex } = this.state;
        const categoryData = COURSE_MAPPINGS[category];

        if (category === 'general') {
            return this.renderGeneral();
        }

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
                                            Review
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
                                            Practice
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
