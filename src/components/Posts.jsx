import React from "react";

export default function Posts(props) {
  return (
    <div className="task__container">
      <h4>{props.task.text}</h4>
      <span>{props.task.day}</span>
      <button className="delete__post" onClick={props.deletePost}>
        Delete
      </button>
    </div>
  );
}
