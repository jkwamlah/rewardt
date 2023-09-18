import React, {useState} from 'react';
import CourseList from "~~/components/dashboard/CourseList";
import ClassList from "~~/components/dashboard/ClassList";
import CourseRewardList from "~~/components/dashboard/CourseRewardList";

const ProfileContent: React.FC = () => {
    const assets = [{
        image: 'https://picsum.photos/200/200',
        title: 'Design your apps in your own way',
        likes: 33,
        comments: 8,
        description: 'What a beautiful Nefti. Design it your own way'
    }, {
        image: 'https://picsum.photos/200/200',
        title: 'How apps are changing the IT world',
        likes: 83,
        comments: 75,
        description: 'What a beautiful Nefti. Design it your own way'
    }];

    const classes = [
        {
            title: 'August 2023 Web3 Bootcamp',
            tokens: 5000
        },
        {
            title: 'October 2023 Incubator Program',
            tokens: 20000
        },
        {
            title: '2023 Accelerator Program',
            tokens: 10000
        },
    ];

    const courses = [
        {
            image: 'assets/images/course/1.jpg',
            teacherImage: 'assets/images/client/01.jpg',
            teacherName: 'Dung Lewis',
            teacherProfession: 'Professor',
            fee: 11,
            category: 'Design',
            title: 'Principles of Good Design',
            description:
                'The most well-known dummy text is the have originated in the 16th century.',
            rewards: 25,
            duration: '1h 30m',
            students: 3012,
        },
        {
            image: 'assets/images/course/3.jpg',
            teacherImage: 'assets/images/client/01.jpg',
            teacherName: 'Dung Lewis',
            teacherProfession: 'Professor',
            fee: 11,
            category: 'Development',
            title: 'Access to Higher Education',
            description:
                'The most well-known dummy text is the have originated in the 16th century.',
            rewards: 25,
            duration: '1h 30m',
            students: 3012,
        },
        {
            image: 'assets/images/course/2.jpg',
            teacherImage: 'assets/images/client/01.jpg',
            teacherName: 'Dung Lewis',
            teacherProfession: 'Professor',
            fee: 11,
            category: 'Software',
            title: 'Web 3.0 Development',
            description:
                'The most well-known dummy text is the have originated in the 16th century.',
            rewards: 25,
            duration: '1h 30m',
            students: 3012,
        },
        {
            image: 'assets/images/course/4.jpg',
            teacherImage: 'assets/images/client/01.jpg',
            teacherName: 'Dung Lewis',
            teacherProfession: 'Professor',
            fee: 11,
            category: 'Music',
            title: 'Introduction to Song Writing',
            description:
                'The most well-known dummy text is the have originated in the 16th century.',
            rewards: 25,
            duration: '1h 30m',
            students: 3012,
        },
    ];

    const [subMenu, setSubMenu] = useState('classes');
    const handleSubMenuClicked = (pageName: string) => {
        console.log('pageName', pageName)
        setSubMenu(pageName);
    }

    return (
        <section className="section mt-60">
            <div className="container mt-lg-3">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12 d-lg-block d-none">
                        <div className="sidebar sticky-bar p-4 rounded shadow">
                            <div className="widget pb-4 border-bottom">
                                <h5 className="widget-title">Community</h5>
                                <div className="row mt-4">
                                    <div className="col-6 text-center">
                                        <i data-feather="user-plus" className="fea icon-ex-md text-primary mb-1"/>
                                        <h5 className="mb-0">2588</h5>
                                        <p className="text-muted mb-0">Followers</p>
                                    </div>
                                    <div className="col-6 text-center">
                                        <i data-feather="users" className="fea icon-ex-md text-primary mb-1"/>
                                        <h5 className="mb-0">454</h5>
                                        <p className="text-muted mb-0">Following</p>
                                    </div>
                                </div>
                            </div>

                            <div className="widget mt-4">
                                <ul className="list-unstyled sidebar-nav mb-0" id="navmenu-nav">
                                    <li className="navbar-item account-menu px-0">
                                        <a onClick={e => {
                                            e.preventDefault()
                                            handleSubMenuClicked('classes')
                                        }} href="#"
                                           className="navbar-link d-flex rounded shadow align-items-center py-2 px-4">
                                            <span className="h4 mb-0"><i className="uil uil-transaction"/></span>
                                            <h6 className="mb-0 ms-2">Classes</h6>
                                        </a>
                                    </li>

                                    <li className="navbar-item account-menu px-0 mt-2">
                                        <a onClick={e => {
                                            e.preventDefault()
                                            handleSubMenuClicked('courses')
                                        }} href="#"
                                           className="navbar-link d-flex rounded shadow align-items-center py-2 px-4">
                                            <span className="h4 mb-0"><i className="uil uil-users-alt"/></span>
                                            <h6 className="mb-0 ms-2">Courses</h6>
                                        </a>
                                    </li>

                                    <li className="navbar-item account-menu px-0 mt-2">
                                        <a onClick={e => {
                                            e.preventDefault()
                                            handleSubMenuClicked('settings')
                                        }} href="#"
                                           className="navbar-link d-flex rounded shadow align-items-center py-2 px-4">
                                            <span className="h4 mb-0"><i className="uil uil-setting"/></span>
                                            <h6 className="mb-0 ms-2">Settings</h6>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-8 col-12">
                        <div className="border-bottom pb-2 d-flex justify-content-between align-items-center">
                            <h5 className="text-capitalize">{subMenu}</h5>

                            {subMenu === 'courses' && (<button
                                onClick={() => handleSubMenuClicked('course')}
                                className="btn btn-outline-primary text-capitalize">
                                add course
                            </button>)}

                            {subMenu === 'classes' && (<button
                                onClick={() => handleSubMenuClicked('class')}
                                className="btn btn-outline-primary text-capitalize">
                                add class
                            </button>)}
                        </div>

                        <div className="row">
                            {subMenu === 'classes' && (<ClassList classes={classes}/>)}
                            {subMenu === 'courses' && (<CourseList courses={courses}/>)}
                            {subMenu === 'rewards' && (
                                <CourseRewardList rewards={courses} updateSubMenu={handleSubMenuClicked}/>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileContent;
