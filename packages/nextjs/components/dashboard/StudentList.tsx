import React from "react";
import Image from "next/image";

interface Student {
  id: number;
  name: string;
  address: string;
}

interface StudentListProps {
  students: Student[];
  sendToken: boolean;
}

const StudentList: React.FC<StudentListProps> = (students, sendToken) => {
  return (
    <div className="card">
      <div className="sidebar sticky-bar rounded shadow border-0">
        <div className="p-2 chat chat-list overflow-scroll" data-simplebar="true" style={{ maxHeight: "370px" }}>
          {students.students.map(student => (
            <div key={student.id} className="d-flex chat-list active p-2 my-2 rounded position-relative">
              <div className="position-relative">
                <Image
                  src="assets/images/account/bg.png"
                  className="avatar avatar-md-sm rounded-circle border shadow"
                  alt="..."
                />
                <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom" />
              </div>
              <div className="flex-1 ms-2">
                <div className="overflow-hidden d-flex justify-content-between align-items-center">
                  <div className="text-dark mb-0 d-flex flex-column">
                    <span className="text-capitalize">{student.name}</span>
                    <span className="">
                      <small className="text-muted">{student.address}</small>
                    </span>
                  </div>
                  {sendToken && (
                    <div className="col-auto">
                      <a href="#" className="btn btn-icon btn-warning mx-1">
                        <i className="uil uil-times" />
                      </a>
                      <a href="#" className="btn btn-icon btn-primary">
                        <i className="uil uil-check" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentList;
