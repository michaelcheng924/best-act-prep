import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import PRACTICE_TESTS from 'app/constants/practice-tests';
import COURSE_MAPPINGS from 'app/constants/course-mappings';
import Video from 'app/components/Course/Video';

class CourseCategory extends Component {
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
                    Practice with real ACT practice tests
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
        const categoryData = COURSE_MAPPINGS[category];

        if (category === 'general') {
            return this.renderGeneral();
        }

        return (
            <div className="Course__category">
                <Tabs>
                    <TabList>
                        {
                            categoryData.strategies
                                ? <Tab>Strategies</Tab>
                                : null
                        }
                        {
                            categoryData.review
                                ? <Tab>Review</Tab>
                                : null
                        }
                        {
                            categoryData.practice
                                ? <Tab>Practice</Tab>
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
