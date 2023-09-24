import React, { useState } from "react";
import NoContentAvailable from "~~/components/dashboard/NoContentAvailable";

interface Program {
  id: number;
  name: string;
  description: string;
  status: string;
}

interface ProgramListProps {
  programs: Program[];
  programClicked: (id: number) => void;
  handleFilter: (filter: string) => void;
}

const getClassProgressStatus = (status: string) => {
  if (status === "completed") return "bg-soft-success";
  if (status === "ongoing") return "bg-soft-warning";
  return "bg-soft-primary";
};

const ProgramList: React.FC<ProgramListProps> = ({ programs, programClicked, handleFilter }) => {
  const filters = ["all", "personal", "others"];
  const [activeFilter, setActiveFilter] = useState("all");

  if (programs.length === 0) return <NoContentAvailable />;

  return (
    <div className="row">
      <div className="col-lg-12 col-md-6 mt-4 mt-sm-0 pt-sm-0">
        <div className="row">
          <div className="col-12 d-flex align-items-center justify-content-between">
            <div className="filters-group-wrap">
              <div className="filters-group">
                <ul className="container-filter list-inline mb-0 filter-options">
                  {filters.map((filter, index) => (
                    <li
                      key={index}
                      className={`list-inline-item categories-name border text-dark rounded text-capitalize ${
                        filter === activeFilter ? "active" : ""
                      }`}
                      onClick={() => {
                        setActiveFilter(filter);
                        handleFilter(filter);
                      }}
                    >
                      {filter}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <form className="ms-0">
                <input
                  type="text"
                  id="search"
                  name="search"
                  className="rounded-pill border px-2 shadow-xl"
                  placeholder="Search..."
                  style={{ height: "40px" }}
                />
              </form>
            </div>
          </div>
        </div>
      </div>

      {programs.map((program, index) => (
        <div key={index} className="col-md-6 mt-2">
          <div className="bg-white job-box job-primary d-md-flex align-items-center border-0 shadow rounded p-4 position-relative">
            <div className="ms-md-4 mt-4 mt-sm-0">
              <a
                onClick={event => {
                  event.preventDefault();
                  programClicked(program.id);
                }}
                href="#"
                className="title text-dark h5"
              >
                {program.name}
              </a>

              <ul className="list-unstyled mb-0 mt-2">
                <li className="d-lg-inline text-muted h6 mb-0 me-lg-2">
                  <i className="uil uil-bookmark icons" />
                  {program.description}
                </li>
              </ul>

              <div className="mt-2">
                <div className="mt-2 d-flex justify-content-between">
                  <span
                    className={`badge text-bg-soft d-flex align-items-center text-capitalize ${getClassProgressStatus(
                      program.status,
                    )}`}
                  >
                    {program.status}
                  </span>
                  {!["completed", "draft"].includes(program.status) && (
                    <a href="" className="text-primary p-1 px-2 shadow rounded me-3">
                      Join <i className="uil uil-angle-right-b" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgramList;
