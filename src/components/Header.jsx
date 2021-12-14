import React, { useState } from "react";
import Button from "./Button";
import FormPost from "./FormPost";
import Posts from "./Posts";
import Search from "./Search";
import Sort from "./Sort";

export default function Header(props) {
  const [show, setShow] = useState(false);

  const changeSetShow = () => {
    return setShow(false);
  };

  return (
    <div className="header__container">
      <h3>Task Tracker</h3>

      <Button clickShow={setShow} />

      <Search
        forSearchQuery={props.forSearchQuery}
        forSetSearchQuery={props.forSetSearchQuery}
      />

      <Sort
        defaultSortValue={props.defaultSortValue}
        options={props.options}
        selectedSort={props.selectedSort}
        fun={props.fun}
      />

      <FormPost
        createPost={props.createPost}
        show={show}
        clickShows={changeSetShow}
      />

      {props.tasks.map((task) => {
        return (
          <Posts
            task={task}
            key={task.id}
            deletePost={() => props.deletePost(task)}
          />
        );
      })}
    </div>
  );
}
