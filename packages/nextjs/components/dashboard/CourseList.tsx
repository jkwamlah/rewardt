import React from 'react';
import NoContentAvailable from "~~/components/dashboard/NoContentAvailable";

interface Course {
    image: string;
    teacherImage: string;
    teacherName: string;
    teacherProfession: string;
    fee: number;
    category: string;
    title: string;
    description: string;
    rewards: number;
    duration: string;
    students: number;
}

interface CourseListProps {
    courses: Course[];
}

const CourseCard: React.FC<{ course: Course }> = ({course}) => (
    <div className="col-lg-6 col-md-6  col-sm-6 mt-4 pt-2">
        <div className="card blog blog-primary rounded border-0 shadow overflow-hidden">
            <div className="position-relative">
                <img src={course.image} className="card-img-top" alt="..."/>
                <div className="overlay"/>
                <a href="#" className="h6 preview bottom-0 end-0 me-4 mb-3">
                    Rewards <i className="uil uil-angle-right-b align-middle"/>
                </a>
            </div>
            <div className="card-body content">
                <h6>
                    <a href="course-detail.html" className="text-primary">
                        {course.category}
                    </a>
                </h6>
                <a href="course-detail.html" className="title text-dark h5">
                    {course.title}
                </a>
                <p className="text-muted mt-2">{course.description}</p>
                <ul className="list-unstyled d-flex justify-content-between border-top mt-3 pt-3 mb-0">
                    <li className="text-muted small">
                        <i className="uil uil-coins text-info"/> {course.rewards} Rewards
                    </li>
                    <li className="text-muted small ms-3">
                        <i className="uil uil-clock text-warning"/> {course.duration}
                    </li>
                    <li className="text-muted small ms-3">
                        <i className="uil uil-users-alt text-primary"/> {course.students}
                    </li>
                </ul>
            </div>
        </div>
    </div>
);

const CourseList: React.FC<CourseListProps> = ({courses}) => {
    if (!courses.length) return <NoContentAvailable/>

    return (
        <div className="row">
            {courses.map((course, index) => (
                <CourseCard key={index} course={course}/>
            ))}
        </div>
    );
};

export default CourseList;
