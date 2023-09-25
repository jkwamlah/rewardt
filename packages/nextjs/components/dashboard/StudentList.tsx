import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BigNumber } from "ethers";
import feather from "feather-icons";
import { useAccount } from "wagmi";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";
import { getErrorMessage } from "~~/plugins/common";

interface Student {
  id: number;
  name: string;
  address: string;
}

interface StudentListProps {
  students: Student[];
  sendToken: boolean;
  programId: number;
  taskId: number;
}

const StudentList: React.FC<StudentListProps> = ({ students, sendToken, programId, taskId }) => {
  useEffect(() => {
    feather.replace();
  }, []);

  const account = useAccount();
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [loader, setLoader] = useState(false);
  const [score, setScore] = useState(0);

  const contract = useScaffoldContractWrite({
    contractName: "ClassReward",
    functionName: "gradeSubmission",
    blockConfirmations: 1,
    args: [BigNumber.from(programId), BigNumber.from(taskId), account.address, BigNumber.from(score)],
    mode: undefined,
    onBlockConfirmation: txnReceipt => {
      setAlertType("info");
      setShowAlert(true);
      setAlertMessage(`Student graded! BlockHash: ${txnReceipt.blockHash}`);
      setLoader(false);
    },
    onError: error => {
      setAlertType("danger");
      setShowAlert(true);
      const message = getErrorMessage(error.message);
      message ? setAlertMessage(message) : setAlertMessage("An unknown error occurred. Please try again.");
      setLoader(false);
    },
  });

  const handleStudentGrading = async (address: string, grading: string) => {
    setLoader(true);
    const mark = grading === "pass" ? 100 : 0;
    setScore(mark);

    await contract.writeAsync({
      args: [BigNumber.from(programId), BigNumber.from(taskId), account.address, BigNumber.from(score)],
      value: undefined,
      overrides: undefined,
    });
    setLoader(false);
  };

  return (
    <>
      {showAlert && (
        <div
          className={`d-flex align-items-center alert alert-dismissible fade show text-capitalize bg-soft-primary
         ${alertType === "info" ? "bg-soft-primary" : "bg-soft-danger"}'`}
          role="alert"
        >
          <span> {alertMessage}</span>
          <button
            onClick={() => setShowAlert(false)}
            type="button"
            className="btn btn-soft btn-close d-flex align-items-center"
            data-bs-dismiss="alert"
            aria-label="Close"
          />
        </div>
      )}

      {loader && (
        <div id="preloader">
          <div id="status">
            <div className="spinner">
              <div className="double-bounce1" />
              <div className="double-bounce2" />
            </div>
          </div>
        </div>
      )}

      <div className="card">
        <div className="sidebar sticky-bar rounded shadow border-0">
          <div className="p-2 chat chat-list overflow-scroll" data-simplebar="true" style={{ maxHeight: "370px" }}>
            {students.map(student => (
              <div key={student.id} className="d-flex chat-list active p-2 my-2 rounded position-relative">
                <div className="position-relative">
                  <Image
                    src="/assets/images/account/bg.png"
                    className="avatar avatar-md-sm rounded-circle border shadow"
                    alt="..."
                    height={50}
                    width={50}
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
                        <button
                          onClick={() => handleStudentGrading(student.address, "fail")}
                          className="btn btn-icon btn-warning mx-1"
                        >
                          <i data-feather="x-circle" />
                        </button>
                        <button
                          onClick={() => handleStudentGrading(student.address, "pass")}
                          className="btn btn-icon btn-primary"
                        >
                          <i data-feather="check-circle" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentList;
