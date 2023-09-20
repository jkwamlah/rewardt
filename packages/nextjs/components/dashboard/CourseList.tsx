import React, {useState} from 'react';
import NoContentAvailable from "~~/components/dashboard/NoContentAvailable";
import {array} from "zod";

interface Reward {
    name: string;
    description: string;
}

interface Course {
    image: string;
    teacherImage: string;
    teacherName: string;
    teacherProfession: string;
    fee: number;
    category: string;
    title: string;
    description: string;
    rewards: Reward[];
    students: number;
}

interface CourseListProps {
    courses: Course[]
    updateSubMenu: (pageName: string) => void
    handleFilter: (filter: string) => void
}

interface CourseCardProps {
    course: Course;
    updateSubMenu: (pageName: string) => void
}

const filters = ['all', 'personal', 'others']


const CourseCard: React.FC<CourseCardProps> = ({course, updateSubMenu}) => (
    <div className="col-lg-6 col-md-6  col-sm-6 mt-4 pt-2">
        <div className="card blog blog-primary rounded border-0 shadow overflow-hidden">
            <div className="position-relative">
                <img src={course.image} className="card-img-top" alt="..."/>
                <div className="overlay"/>
                <a href="#" className="h6 preview bottom-0 end-0 me-4 mb-3"
                   onClick={event => {
                       event.preventDefault()
                       updateSubMenu('rewards')
                   }}>
                    Rewards <i className="uil uil-angle-right-b align-middle"/>
                </a>
            </div>
            <div className="card-body content">
                <h6>
                    <a href="#" className="text-primary">
                        {course.category}
                    </a>
                </h6>
                <a href="#" className="title text-dark h5">
                    {course.title}
                </a>
                <p className="text-muted mt-2">{course.description}</p>
                <ul className="list-unstyled d-flex justify-content-between border-top mt-3 pt-3 mb-0">
                    <li className="text-muted small">
                        <i className="uil uil-coins text-info"/> {course.rewards.length} Rewards
                    </li>
                    <li className="text-muted small ms-3">
                        <i className="uil uil-users-alt text-primary"/> {course.students}
                    </li>
                </ul>
            </div>
        </div>
    </div>
);


const CourseList: React.FC<CourseListProps> = ({courses, updateSubMenu, handleFilter}) => {
    const [activeFilter, setActiveFilter] = useState('all');

    return (
        <div className="row">
            <div className="col-lg-8 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div className="row">
                    <div className="col-12 filters-group-wrap">
                        <div className="filters-group">
                            <ul className="container-filter list-inline mb-0 filter-options">
                                {filters.map((filter, index) => (
                                    <li key={index}
                                        className={`list-inline-item categories-name border text-dark rounded text-capitalize ${
                                            filter === activeFilter ? 'active' : ''
                                        }`}
                                        onClick={((event) => {
                                            setActiveFilter(filter)
                                            handleFilter(filter)
                                        })}
                                    >{filter}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {!courses.length ? <NoContentAvailable/> :
                courses.map((course, index) => (
                    <CourseCard key={index} course={course} updateSubMenu={updateSubMenu}/>
                ))}
        </div>
    );
};

export default CourseList;
