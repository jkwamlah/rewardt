import React, {useEffect, useState} from 'react';
import CourseList from "~~/components/dashboard/CourseList";
import ProgramList from "~~/components/dashboard/ProgramList";
import CourseRewardList from "~~/components/dashboard/CourseRewardList";
import CourseCreate from "~~/components/dashboard/CourseCreate";
import ProgramCreate from "~~/components/dashboard/ProgramCreate";
import feather from "feather-icons";
import TaskCreate from "~~/components/dashboard/TaskCreate";
import TokenList from "~~/components/dashboard/TokenList";
import ProgramDetail from "~~/components/dashboard/ProgramDetail";

const ProfileContent: React.FC = () => {
    useEffect(() => {
        feather.replace()
    }, []);

    const initialPrograms = [
        {
            id: 1,
            name: 'July 2023 ABSA Web3 Bootcamp',
            description: 'A web3 bootcamp organized by ABSA and designed for young ones to develop innovative web3 solutions.',
            status: 'completed'
        },
        {
            id: 2,
            name: 'August 2023 Web3 Bootcamp',
            description: 'An interactive web3 bootcamp designed for young ones to explore, learn and develop innovative solutions.',
            status: 'ongoing',
            students: ['0xF9e8D729c2724437209cDB24826b2a056B9fe84F', '0xF9e8D729c2724437209cDB24826b2a056B9fe84F', '0xF9e8D729c2724437209cDB24826b2a056B9fe84F']
        },
        {
            id: 3,
            name: 'October 2023 Incubator Program',
            description: 'A Mastercard sponsored program designed for young entrepreneurs to grow their ideas in solving problems in Africa.',
            status: 'draft',
            students: ['0xF9e8D729c2724437209cDB24826b2a056B9fe84F', '0xF9e8D729c2724437209cDB24826b2a056B9fe84F', '0xF9e8D729c2724437209cDB24826b2a056B9fe84F']
        },
        {
            id: 4,
            name: 'November 2023 Accelerator Program',
            description: 'A MEST sponsored accelerator program designed for budding businesses to grow and flourish in Ghana.',
            status: 'draft',
            students: ['0xF9e8D729c2724437209cDB24826b2a056B9fe84F', '0xF9e8D729c2724437209cDB24826b2a056B9fe84F', '0xF9e8D729c2724437209cDB24826b2a056B9fe84F']
        },
    ];

    const subMenus = [
        {name: 'programs', icon: 'uil-books'},
        {name: 'students', icon: 'uil-users-alt'},
        {name: 'tokens', icon: 'uil-transaction'},
        {name: 'courses', icon: 'uil-transaction'},
    ]
    const taskTypes = [
        {id: 1, name: 'assignment'},
        {id: 2, name: 'participation'},
        {id: 3, name: 'project'},
        {id: 4, name: 'behaviour'},
        {id: 5, name: 'stipend'},
    ]

    const students = [
        {id: 1, address: '0xF7e8D729c2724437209cDB24826b2a056B9fe84F', tokens: 800},
        {id: 2, address: '0xe9aaD729c2724437209cDB24826b2a056B9fe84F', tokens: 200},
        {id: 3, address: '0xd78e8D729c2724437200cDB24826b2a056B9fe84F', tokens: 900},
        {id: 4, address: '0x099e8D729c2724437209cDB24826b2a056B9fe84F', tokens: 0},
        {id: 3, address: '0xc78e8D729c2724437200cDB24826b2a056B9fe84F', tokens: 900},
        {id: 4, address: '0xad9e8D729c2724437209cDB24826b2a056B9fe84F', tokens: 0},
        {id: 5, address: '0xea6e8D729c2724437209cDB24826b2a056B9fe84F', tokens: 800},
    ]

    const [subMenu, setSubMenu] = useState('programs');
    const [programs, setPrograms] = useState(initialPrograms);
    const [activeProgram, setActiveProgram] = useState({
        id: 0,
        name: '',
        description: '',
        status: ''
    });

    const handleSubMenuClicked = (pageName: string) => {
        setSubMenu(pageName);
    }

    const handleProgramClicked = (programId: number) => {
        const program = programs.find((p) => p.id === programId);

        if (program) {
            setActiveProgram({
                id: program.id,
                name: program.name,
                description: program.description,
                status: program.status
            });
        } else {
            setActiveProgram({
                id: 0,
                name: '',
                description: '',
                status: ''
            });
        }
        setSubMenu('show program')
    }
    const handleProgramsFilter = (filter: string) => {
        if (filter === 'all') return setPrograms(initialPrograms)

        const filteredPrograms = initialPrograms.filter(item => item.status === filter);
        return setPrograms(filteredPrograms);
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
                                    {subMenus.map((menu, index) => (
                                        <li
                                            key={index}
                                            className={`navbar-item account-menu px-0 ${(subMenu === menu.name) ? 'active' : ''}`}
                                        >
                                            <a
                                                onClick={e => {
                                                    e.preventDefault();
                                                    handleSubMenuClicked(menu.name);
                                                }}
                                                href="#"
                                                className="navbar-link d-flex rounded shadow align-items-center py-2 px-4"
                                            >
                                                <span className="h4 mb-0"><i className={`uil ${menu.icon}`}/></span>
                                                <h6 className="mb-0 ms-2 text-capitalize">{menu.name}</h6>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8 col-12">
                        <div className="border-bottom pb-2 d-flex justify-content-between align-items-center">
                            <h5 className="text-capitalize">{subMenu}</h5>

                            {subMenu === 'programs' && (<button
                                onClick={() => handleSubMenuClicked('create program')}
                                className="btn btn-outline-primary text-capitalize">
                                add program
                            </button>)}

                            {subMenu === 'courses' && (<button
                                onClick={() => handleSubMenuClicked('create course')}
                                className="btn btn-outline-primary text-capitalize">
                                add course
                            </button>)}

                            {subMenu === 'rewards' && (<button
                                onClick={() => handleSubMenuClicked('create reward')}
                                className="btn btn-outline-primary text-capitalize">
                                add reward
                            </button>)}

                            {subMenu === 'students' && (
                                <div className="d-flex justify-content-center pt-2">
                                    <div className="col-lg-12 col-md-10">
                                        <div className="subcribe-form">
                                            <form className="ms-0">
                                                <input type="text" id="search" name="search"
                                                       className="rounded-pill border" placeholder="Search..."
                                                       style={{height: '40px'}}/>
                                            </form>
                                        </div>
                                    </div>
                                </div>)}
                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="sidebar sticky-bar p-4 rounded shadow">
                                    {subMenu === 'programs' && (
                                        <ProgramList programs={programs} programClicked={handleProgramClicked} handleFilter={handleProgramsFilter}/>)
                                    }
                                    {subMenu === 'rewards' && (<CourseRewardList rewards={[]}/>)}
                                    {subMenu === 'tokens' && (<TokenList tokens={[]}/>)}

                                    {subMenu === 'create program' && (<ProgramCreate/>)}
                                    {subMenu === 'create course' && (<CourseCreate/>)}
                                    {subMenu === 'create reward' && (<TaskCreate rewardTypes={taskTypes}/>)}

                                    {subMenu === 'show program' && (<ProgramDetail
                                        students={students} taskTypes={taskTypes} program={activeProgram}/>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileContent;
