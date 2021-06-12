import {React} from 'react'
import Navbar from './components/navbar';
import Header from './components/header';
import AddNotes from './form-add-notes';
import CompletedTask from './components/sec-completed-task';
import IncompleteTask from './components/incompleted-task';
function App() {
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

export default App;
