import React from 'react'

const AddNotes = (props) => {
const {todo,handleChange,handleSubmit}=props
 return (
   <div className='addNotes'>
     <form onSubmit={handleSubmit} class="input-group mb-5" style={{width: "50%", margin: "auto"}}>
       <input
         type='text'
         className='form-control'
         placeholder='Add your task here...'
         aria-label='Add your task here...'
         value={todo.task}
         onChange={handleChange}
       />
       <div class='input-group-append'>
         <button class='btn btn-primary' type='submit' id='button-addon2'>
           Add
         </button>
       </div>
       </form>
   </div>
 )
}

export default AddNotes
