import React,{useState} from 'react'
import Navbar from './navbar';
import Header from './header';
import AddNotes from './form-add-notes';
import CompletedTask from './sec-completed-task';
import IncompleteTask from './incompleted-task';
import shortid from 'shortid';
const Main = () => {
    const [todo, setTodo] = useState({id: '', task: '', isModified: false});
    const [list, setList] = useState([])
    const handleSubmit = (e) => {
      e.preventDefault();
      const newlist = list.filter((val) => val.isModified === false)
      const uniqueid = shortid.generate();
      setList([...newlist, {task: todo, id: uniqueid, isModified: false}]);
      console.log(list)
      setTodo({id: '', task: '', isModified: false})
    }
    const handleChange = (e) => {
      setTodo(e.target.value);
    }

    const editTask = (e) =>{
      // console.log(e.target.value);
      var val = list.find((item) => item.id === e.target.value);
      val.isModified = true;
      setTodo({...todo, task: val.task});
    }

 return (
   <div className='main'>
     <Navbar />
     <Header />
     {/* The input shows to add notes */}
     <AddNotes
       todo={todo}
       handleChange={handleChange}
       handleSubmit={handleSubmit}
     ></AddNotes>
     {/* Rest of the container items except nvabar */}
     <div class='container '>
       <div class='row mx-auto my-8'>
         {/* Section for completed tasks  */}
         <CompletedTask />

         {/*  Incompleted tasks */}
         <IncompleteTask list={list} editTask={editTask}/>
       </div>
     </div>
   </div>
 )
 }

export default Main
