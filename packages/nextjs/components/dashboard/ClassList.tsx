import React from 'react';
import NoContentAvailable from "~~/components/dashboard/NoContentAvailable";

interface Room {
    title: string;
    tokens: number;
}

interface ClassListProps {
    classes: Room[];
}

const ClassList: React.FC<ClassListProps> = ({classes}) => {
    if (classes.length === 0) return <NoContentAvailable/>

    return (
        <div className="row">
            {classes.map((job, index) => (

                <div key={index} className="col-md-6 mt-4 pt-2">
                    <div
                        className="job-box job-primary d-md-flex align-items-center border-0 shadow rounded p-4 position-relative">
                        <img src="assets/images/job/Codepen.svg" className="avatar avatar-md-sm" alt=""/>

                        <div className="ms-md-4 mt-4 mt-sm-0">
                            <a href="job-detail-three.html" className="title text-dark h5">{job.title}</a>

                            <ul className="list-unstyled mb-0 mt-2">
                                <li className="d-lg-inline text-muted h6 mb-0 me-lg-2"><i
                                    className="uil uil-map-marker icons"/> <a href="javascript:void(0)"
                                                                              className="text-dark">Codepen</a>,
                                    San Francisco
                                </li>
                                <li className="d-lg-inline text-muted h6 mb-0 me-lg-2"><i
                                    className="uil uil-clock icons"/> 8hr/ Day
                                </li>
                                <li className="d-lg-inline text-muted h6 mb-0"><i
                                    className="uil uil-bill icons"/> 30k-35k
                                </li>
                            </ul>

                            <div className="mt-2">
                                <span className="badge text-bg-soft bg-soft-primary m-1">Ongoing</span>
                                <span className="badge bg-soft-warning">Completed</span>
                            </div>
                        </div>
                    </div>
                </div>


                // <div key={index} className="col-lg-4 col-md-6 col-12 mt-4 pt-2 min-h-16" style={{minHeight: 50}}>
                //     <a href="#">
                //         <div
                //             className="d-flex features feature-primary key-feature align-items-center p-3 rounded shadow">
                //             <img src="assets/images/job/Codepen.svg" className="avatar avatar-ex-sm" alt=""/>
                //             <div className="flex-1 ms-3">
                //                 <h4 className="title mb-0 text-dark">{job.title}</h4>
                //                 <p className="text-muted mb-0">{job.tokens}</p>
                //             </div>
                //         </div>
                //     </a>
                // </div>
            ))}
        </div>
    );
};

export default ClassList;
