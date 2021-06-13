import React from 'react'

const AddNotes = (props) => {
const {todo,handleChange,handleSubmit}=props
 return (
   <div className='addNotes'>
     <div class='input-group mx-auto mb-3 w-50'>
     <form onSubmit={handleSubmit}>
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
   </div>
 )
}

export default AddNotes
