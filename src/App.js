import React, { useState, useMemo } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [tasks, setTask] = useState([
    {
      id: 1,
      text: "Doctor Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Apr 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shoping",
      day: "May 5th at 2:30pm",
      reminder: false,
    },
  ]);



  const [searchQuery, setsearchQuery] = useState("");
  const [selectedSort, setSelectedSort] = useState("");
  const defaultSortValue = "Сортировка";
  const options = [
    { value: "text", name: "Сортировка по названию" },
    { value: "day", name: "Сортировка по дату" },
  ];

  const fun = (sort) => {
    setSelectedSort(sort);
    setTask([...tasks].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...tasks].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return tasks;
  }, [selectedSort, tasks]);

  const sortedAndSearchedPosts = useMemo(() => {   			
  
    return sortedPosts.filter(post => post.text.toLowerCase().includes(searchQuery))   
  }, [searchQuery, sortedPosts])		

 

  const setRecivePost = (newPost) => {
    return setTask([...tasks, newPost]);
  };

  const deletePost = (task) => {
    setTask(tasks.filter((p) => p.id !== task.id));
  };

  return (
    <div className="App">
      <Header
        tasks={sortedAndSearchedPosts}  //  Олдин ичида tasks бор эди
        forSearchQuery={searchQuery}				
        forSetSearchQuery={setsearchQuery}		

        createPost={setRecivePost}
        deletePost={deletePost}
        defaultSortValue={defaultSortValue}
        options={options}
        selectedSort={selectedSort}
        fun={fun}
      />
    </div>
  );
}

export default App;
