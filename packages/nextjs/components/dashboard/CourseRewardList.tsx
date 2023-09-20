import React from 'react';
import NoContentAvailable from "~~/components/dashboard/NoContentAvailable";

interface Reward {
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

interface CourseRewardListProps {
    rewards: Reward[],
}

const CourseRewardList = ({rewards}: CourseRewardListProps) => {
    if (!rewards.length) return <NoContentAvailable/>

    return (
        <div className="row">
            {rewards.map((reward: Reward, index: number) => (
                <div key={index} className="col-lg-6 col-md-6 col-sm-6 mt-4 pt-2">
                    <div className="card blog blog-primary rounded border-0 shadow overflow-hidden">
                        <div className="position-relative">
                            <img src={reward.image} className="card-img-top" alt="..."/>
                            <div className="overlay"/>
                            <button className="btn btn-primary h6 preview bottom-0 end-0 me-4 mb-3">
                                Rewards <i className="uil uil-angle-right-b align-middle"/>
                            </button>
                        </div>
                        <div className="card-body content">
                            <h6>
                                <a href="#" className="text-primary">{reward.category}</a>
                            </h6>
                            <a href="#" className="title text-dark h5">{reward.title}</a>
                            <p className="text-muted mt-2">{reward.description}</p>
                            <ul className="list-unstyled d-flex justify-content-between border-top mt-3 pt-3 mb-0">
                                <li className="text-muted small">
                                    <i className="uil uil-coins text-info"/> {reward.rewards} Rewards
                                </li>
                                <li className="text-muted small ms-3">
                                    <i className="uil uil-clock text-warning"/> {reward.duration}
                                </li>
                                <li className="text-muted small ms-3">
                                    <i className="uil uil-users-alt text-primary"/> {reward.students}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CourseRewardList;
