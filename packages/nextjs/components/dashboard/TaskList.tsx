import React from "react";
import { formatTimestamp } from "~~/plugins/common";

interface Task {
  id: number;
  name: string;
  typeId: number;
  criteria: string;
  timestamp: number;
}

interface TaskType {
  id: number;
  name: string;
}

interface TaskListProps {
  tasks: Task[];
  taskTypes: TaskType[];
  scoreStudents: () => void;
  submitAssignment: () => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, taskTypes, scoreStudents, submitAssignment }) => {
  const getRewardType = (typeId: number) => taskTypes.find(type => type.id === typeId)?.name;

  return (
    <div className="row">
      {tasks.map(task => (
        <div className="col-lg-6 mt-4 pt-2" key={task.id}>
          <div className="card event-schedule event-primary rounded border">
            <div className="card-body">
              <div className="d-flex">
                <div className="flex-1 content">
                  <h6 className="text-dark">
                    #{task.id} {task.name}
                  </h6>
                  <p className="text-muted location-time">
                    <span className="text-dark h6">Criteria:</span> {task.criteria}
                    <br />
                    <span className="text-dark h6">Time:</span> {formatTimestamp(task.timestamp)}
                    <br />
                    <div className="text-dark h6">
                      Type:
                      <span className="badge bg-soft-info text-capitalize ml-1">{getRewardType(task.typeId)}</span>
                    </div>
                  </p>
                  <div className="d-flex justify-content-between">
                    <a
                      onClick={event => {
                        event.preventDefault();
                        scoreStudents();
                      }}
                      className="btn btn-soft-primary btn-sm"
                    >
                      Score Students
                    </a>
                    <a
                      onClick={event => {
                        event.preventDefault();
                        submitAssignment();
                      }}
                      className="btn btn-soft-success btn-sm"
                    >
                      Turn In
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
