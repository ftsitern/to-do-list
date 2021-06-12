import React from 'react'
import Navbar from './navbar';
import Header from './header';
import AddNotes from './form-add-notes';
import CompletedTask from './sec-completed-task';
import IncompleteTask from './incompleted-task';
const Main = () => {
 return (
  <div className="main">
      <Navbar/>
      <Header/>
      {/* The input shows to add notes */}
      <AddNotes/>
      {/* Rest of the container items except nvabar */}
      <div class="container ">
        <div class="row mx-auto my-8">
          {/* Section for completed tasks  */}
          <CompletedTask/>

          {/*  Incompleted tasks */}
          <IncompleteTask/>
        </div>
      </div>
    </div>
  );
 }

export default Main
