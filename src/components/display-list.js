import React from "react";
import "./animation.css";

const Display = (props) => {
  const { list, editTask, deleteTask, toggleTask, css, defaultChecked } = props;

  return (
    <div>
      {list.map((Task) => {
        const { id, task, defaultChecked } = Task;
        return (
          <div
            className="row px-3 align-items-center todo-item rounded slide-in-blurred-top"
            key={id}
          >
            <div class="col-auto m-2  d-flex align-items-center">
              <input
                type="checkbox"
                value={id}
                onClick={toggleTask}
                defaultChecked={defaultChecked}
              />
            </div>
            <div class="col px-1 m-1 d-flex align-items-center">
              <input
                type="text"
                class="form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3"
                readonly
                value={task}
                title={task}
                style={css}
              />
            </div>
            <div class="col-auto m-1 p-0 px-3 d-none"></div>
            <div class="col-auto m-1 p-0 todo-actions">
              <button
                className="btn btn-outline-primary"
                value={id}
                onClick={editTask}
                style={{ margin: 10 }}
              >
                Edit
              </button>
              <button
                className="btn btn-primary btn-danger"
                value={id}
                onClick={deleteTask}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Display;
