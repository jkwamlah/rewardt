import React, { useState } from "react";
import NoContentAvailable from "~~/components/dashboard/NoContentAvailable";
import StudentList from "~~/components/dashboard/StudentList";
import TaskCreate from "~~/components/dashboard/TaskCreate";
import TaskList from "~~/components/dashboard/TaskList";
import TaskSubmit from "~~/components/dashboard/TaskSubmit";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth/useScaffoldContractRead";

interface Program {
  id: number;
  name: string;
  description: string;
  status: string;
}

interface Student {
  id: number;
  address: string;
  name: string;
}

interface TaskType {
  id: number;
  name: string;
}

interface ProgramDetailProps {
  program: Program;
  students: Student[];
  taskTypes: TaskType[];
}

const tasks = [
  {
    id: 1,
    name: "Digital Conference Event Intro",
    typeId: 1,
    criteria: "Hall 3, Sinchang-dong, Kwangju, South Korea",
    timestamp: 1695607883,
  },
  {
    id: 2,
    name: "Conference On User Interface",
    typeId: 1,
    criteria: "Hall 3, Sinchang-dong, Kwangju, South Korea",
    timestamp: 1695607883,
  },
  {
    id: 3,
    name: "Business World Event Intro",
    typeId: 1,
    criteria: "Hall 3, Sinchang-dong, Kwangju, South Korea",
    timestamp: 1695607883,
  },
  {
    id: 4,
    name: "Business Conference for all",
    typeId: 1,
    criteria: "Hall 3, Sinchang-dong, Kwangju, South Korea",
    timestamp: 1695607883,
  },
];

const ProgramDetail: React.FC<ProgramDetailProps> = ({ program, students, taskTypes }) => {
  const [showTasks, setShowTasks] = useState(true);
  const [rewardStudents, setRewardStudents] = useState(false);
  const [titleText, setTitleText] = useState("tasks");
  const [taskButtonText, setTaskButtonText] = useState("+ task");
  const scoreStudents = (shouldScoreStudents: boolean) => {
    setTitleText("students");
    setShowTasks(!showTasks);
    setTaskButtonText("list tasks");
    setRewardStudents(shouldScoreStudents);
  };
  const submitAssignment = () => {
    setTitleText("submissions");
    setShowTasks(!showTasks);
    setTaskButtonText("Tasks");
  };

  if (!program) return <NoContentAvailable />;

  return (
    <div className="row">
      <div className="section-title mt-2">
        <h5 className="mb-0">Description</h5>
        <div className="card card-body my-2">
          <p className="text-muted">{program.description}</p>
        </div>

        <div className="row">
          <div className="col-md-12 mt-4">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="mb-0 text-capitalize">{titleText}</h5>

              {titleText === "tasks" && (
                <button
                  className="btn btn-soft-primary btn-md text-capitalize"
                  onClick={() => {
                    setShowTasks(!showTasks);
                    setTaskButtonText(taskButtonText === "list tasks" ? "+ task" : "list tasks");
                  }}
                >
                  {taskButtonText}
                </button>
              )}

              {titleText === "students" && (
                <button
                  className="btn btn-soft-primary btn-md text-capitalize"
                  onClick={() => {
                    setRewardStudents(false);
                    setShowTasks(true);
                    setTitleText("tasks");
                    setTaskButtonText(taskButtonText === "list tasks" ? "+ task" : "list tasks");
                  }}
                >
                  {taskButtonText}
                </button>
              )}
            </div>

            {showTasks && titleText === "tasks" && (
              <TaskList
                tasks={tasks}
                taskTypes={taskTypes}
                scoreStudents={() => scoreStudents(true)}
                submitAssignment={submitAssignment}
              />
            )}

            {titleText === "submissions" && <TaskSubmit programId={1} taskId={1}  criteria=""/>}


            {!showTasks && !["submissions", "students"].includes(titleText) && <TaskCreate programId={program.id} rewardTypes={taskTypes} />}


            {rewardStudents && (
              <div className="col-md-12 mt-2">
                <StudentList programId={1} taskId={1} students={students} sendToken={true} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetail;
