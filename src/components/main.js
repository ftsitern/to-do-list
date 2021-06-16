import React, { useState } from "react";
import Navbar from "./navbar";
import Header from "./header";
import AddNotes from "./form-add-notes";
import shortid from "shortid";
import Display from "./display-list";

const Main = () => {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    isModified: false,
    defaultChecked: false,
  });
  const [list, setList] = useState([]);
  // for completed task
  const [comList, setComList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newList = list.filter((val) => val.isModified === false);
    const uniqueId = shortid.generate();
    if (todo.task !== "") {
      setList([...newList, { task: todo, id: uniqueId, isModified: false }]);
      console.log(list);
      setTodo({ id: "", task: "", isModified: false });
    }
  };
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const editTask = (e) => {
    // console.log(e.target.value);
    var val = list.find((item) => item.id === e.target.value);
    val.isModified = true;
    setTodo({ ...todo, task: val.task });
  };
  const deleteTask = (e) => {
    var newTask = list.filter((task) => {
      return task.id !== e.target.value;
    });
    setList(newTask);
  };

  const deleteCompletedTask = (e) => {
    var newTask = comList.filter((task) => {
      return task.id !== e.target.value;
    });
    setComList(newTask);
  };

  const toggleTask = (e) => {
    console.log("completeTask", e.target.value);
    // if task is in incomplete list and want to change it
    if (e.target.checked) {
      var comTodo = list.find((item) => item.id === e.target.value);
      var newTaskList = list.filter((task) => {
        return task.id !== e.target.value;
      });
      setComList([...comList, { ...comTodo, defaultChecked: true }]);
      setList(newTaskList);
    }else{
      // if task is in complete List and want to change it
      var taskComponent = comList.find((item) => item.id === e.target.value);
      var newTaskList = comList.filter((task) => {
        return task.id !== e.target.value;
      });
      setList([...list, { ...taskComponent, defaultChecked: false }]);
      setComList(newTaskList);
    }
  };

  return (
    <div className="main">
      <Navbar />
      <Header />
      {/* The input shows to add notes */}
      <AddNotes
        todo={todo}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      ></AddNotes>
      {/* Rest of the container items except navbar */}
      <div class="container ">
        <div class="row mx-auto my-8">
          {/*  Incomplete tasks */}
          <div class="text-primary col-sm-6 mx">
            <h3>Incomplete Tasks</h3>
            <Display
              list={list}
              editTask={editTask}
              deleteTask={deleteTask}
              toggleTask={toggleTask}
              css={{ color: "#000" }}
            />
          </div>

          {/* Section for completed tasks  */}
          <div class="text-primary col-sm-6">
            <h3>Completed Tasks</h3>
            <Display
              list={comList}
              deleteTask={deleteCompletedTask}
              toggleTask={toggleTask}
              css={{
                color: "rgba(0, 0, 0, 0.5)",
                "text-decoration": "line-through",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
