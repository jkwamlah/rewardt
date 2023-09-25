import React, { useEffect, useState } from "react";
// import { BigNumber } from "ethers";
import feather from "feather-icons";
import { useAccount } from "wagmi";
import ProgramCreate from "~~/components/dashboard/ProgramCreate";
import ProgramDetail from "~~/components/dashboard/ProgramDetail";
import ProgramJoin from "~~/components/dashboard/ProgramJoin";
import ProgramList from "~~/components/dashboard/ProgramList";
import TaskCreate from "~~/components/dashboard/TaskCreate";
import TokenList from "~~/components/dashboard/TokenList";
import TokenRedeem from "~~/components/dashboard/TokenRedeem";
import { getProgramsCreated } from "~~/plugins/programs";

const ProfileContent: React.FC = () => {
  const account = useAccount();

  useEffect(() => {
    feather.replace();

    if (account && account.address) {
      getProgramsCreated(account.address).then(programs => {
        setCreatedPrograms(programs);
        return;
      });
    }
  }, [account]);

  const subMenus = [
    { name: "programs", icon: "uil-books" },
    { name: "tokens", icon: "uil-transaction" },
    { name: "redeem", icon: "uil-transaction" },
  ];

  const taskTypes = [
    { id: 1, name: "assignment" },
    { id: 2, name: "participation" },
    { id: 3, name: "project" },
    { id: 4, name: "behaviour" },
    { id: 5, name: "stipend" },
  ];

  const students = [
    { id: 1, name: "ben oduro", address: "0xF7e8D729c2724437209cDB24826b2a056B9fe84F", tokens: 800 },
    { id: 2, name: "kwami sefa", address: "0xe9aaD729c2724437209cDB24826b2a056B9fe84F", tokens: 200 },
    { id: 3, name: "angel yaw", address: "0xd78e8D729c2724437200cDB24826b2a056B9fe84F", tokens: 900 },
    { id: 4, name: "princess tyra", address: "0x099e8D729c2724437209cDB24826b2a056B9fe84F", tokens: 0 },
    { id: 5, name: "wendy shay", address: "0xc78e8D729c2724437200cDB24826b2a056B9fe84F", tokens: 900 },
    { id: 6, name: "gina fino", address: "0xad9e8D729c2724437209cDB24826b2a056B9fe84F", tokens: 0 },
    { id: 7, name: "baba raman", address: "0xea6e8D729c2724437209cDB24826b2a056B9fe84F", tokens: 800 },
  ];

  const [subMenu, setSubMenu] = useState("programs");
  const [createdPrograms, setCreatedPrograms] = useState([]);
  const [activeProgram, setActiveProgram] = useState({
    id: 0,
    name: "",
    description: "",
    status: "",
  });

  const handleSubMenuClicked = (pageName: string) => {
    setSubMenu(pageName);
    if (pageName === "programs" && account && account.address) {
      getProgramsCreated(account.address).then(programs => {
        setCreatedPrograms(programs);
        return;
      });
    }
  };

  const handleProgramClicked = (programId: number) => {
    if (createdPrograms.length > 0) {
      const program = createdPrograms.find(p => p.id === programId);
      if (program) {
        setActiveProgram({
          id: program.id,
          name: program.name,
          description: program.description,
          status: program.status,
        });
        setSubMenu("show program");
      } else {
        // Handle the case where no program with the given programId was found
      }
    }
  };
  const handleProgramsFilter = (filter: string) => {
    console.log(filter);
    // if (filter === "personal") return setPrograms(initialPrograms);
    // if (filter === "others") return setPrograms(filteredPrograms);
    // return setPrograms([]);
  };

  const handleResourceCreated = (type: string, blockHash: string) => {
    console.log(type);
    console.log(blockHash);
  };

  // const account = useAccount();

  return (
    <section className="section mt-60">
      <div className="container mt-lg-3">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 d-lg-block d-none">
            <div className="sidebar sticky-bar p-4 rounded shadow-md">
              <div className="widget pb-4 border-bottom">
                <h5 className="widget-title">Welcome!</h5>
                <div className="row mt-4">
                  <div className="col-6 text-center">
                    <i data-feather="book-open" className="fea icon-ex-md text-primary mb-1" />
                    <h5 className="mb-0">{createdPrograms.length}</h5>
                    <p className="text-muted mb-0">Programs</p>
                  </div>
                  <div className="col-6 text-center">
                    <i data-feather="circle" className="fea icon-ex-md text-primary mb-1" />
                    <h5 className="mb-0">0</h5>
                    <p className="text-muted mb-0">Tokens</p>
                  </div>
                </div>
              </div>

              <div className="widget mt-4">
                <ul className="list-unstyled sidebar-nav mb-0" id="navmenu-nav">
                  {subMenus.map((menu, index) => (
                    <li
                      key={index}
                      className={`navbar-item account-menu px-0 ${subMenu === menu.name ? "active" : ""}`}
                    >
                      <a
                        onClick={e => {
                          e.preventDefault();
                          handleSubMenuClicked(menu.name);
                        }}
                        href="#"
                        className="navbar-link d-flex rounded shadow align-items-center py-2 px-4"
                      >
                        <span className="h4 mb-0">
                          <i className={`uil ${menu.icon}`} />
                        </span>
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

              {subMenu === "programs" && (
                <div className="d-flex justify-content-center pt-2">
                  <button
                    onClick={() => handleSubMenuClicked("join program")}
                    className="btn btn-primary text-capitalize mx-2"
                  >
                    join program
                  </button>

                  <button
                    onClick={() => handleSubMenuClicked("create program")}
                    className="btn btn-outline-primary text-capitalize"
                  >
                    add program
                  </button>
                </div>
              )}
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="sidebar sticky-bar p-4 rounded shadow">
                  {subMenu === "programs" && (
                    <ProgramList
                      programs={createdPrograms}
                      programClicked={handleProgramClicked}
                      handleFilter={handleProgramsFilter}
                    />
                  )}
                  {subMenu === "tokens" && <TokenList />}
                  {subMenu === "redeem" && <TokenRedeem />}

                  {subMenu === "create program" && <ProgramCreate />}
                  {subMenu === "join program" && <ProgramJoin resourceCreated={handleResourceCreated} />}
                  {subMenu === "create reward" && <TaskCreate programId={1} rewardTypes={taskTypes} />}

                  {subMenu === "show program" && (
                    <ProgramDetail students={students} taskTypes={taskTypes} program={activeProgram} />
                  )}
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
