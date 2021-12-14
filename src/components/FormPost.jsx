import React, { useState } from "react";

export default function FormPost(props) {
  const [post, setData] = useState({ text: "", day: "" });

  const submitPost = (e) => {
    e.preventDefault();
    const newPost = { ...post, id: Date.now(), reminder: true };
    props.createPost(newPost);
    setData({ text: "", day: "" });

    props.clickShows();
  };

  const classNam = ["form_container"];

  if (props.show === true) {
    classNam.push("active");
  }

  return (
    <div className={classNam.join(" ")} onClick={props.clickShows}>
      <form onClick={(e) => e.stopPropagation()}>
        <label htmlFor="">
          Text
          <input
            type="text"
            value={post.text}
            onChange={(e) => {
              setData({ ...post, text: e.target.value });
            }}
          />
        </label>
        <label htmlFor="">
          Day
          <input
            type="text"
            value={post.day}
            onChange={(e) => {
              setData({ ...post, day: e.target.value });
            }}
          />
        </label>
        <label htmlFor="">
          Reminder
          <input type="checkbox" />
        </label>
        <button type="submit" className="form__btn" onClick={submitPost}>
          Submit
        </button>
      </form>
    </div>
  );
}
