import React from 'react'
import Display from './display-list'

const IncompleteTask = (props) => {
  const {list, editTask,deleteTask}=props;
 return (
   <div class='text-primary col-sm-6 mx'>
     <h3>Incompleted Tasks</h3>
     <Display list={list} editTask={editTask} deleteTask={deleteTask}></Display>
   </div>
 )
}

export default IncompleteTask
