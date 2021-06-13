import React,{useState} from 'react'
import Navbar from './navbar';
import Header from './header';
import AddNotes from './form-add-notes';
import CompletedTask from './sec-completed-task';
import IncompleteTask from './incompleted-task';
const Main = () => {
    const [todo, setTodo] = useState('')
    const [list, setList] = useState([])
    const handleSubmit = (e) => {
      e.preventDefault()
      const task = { id: new Date().getTime().toString(), todo }
      setList([...list, task])
      console.log(list)
      setTodo('')
    }
    const handleChange = (e) => {
      setTodo(e.target.value)
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
         <IncompleteTask list={list}/>
       </div>
     </div>
   </div>
 )
 }

export default Main
