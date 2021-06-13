import React,{useState} from 'react'

const AddNotes = (props) => {
const {todo,handleChange,handleSubmit}=props
 return (
   <div className='addNotes '>
     <div class='input-group mx-auto mb-3 w-50'>
       <input
         type='text'
         class='form-control'
         placeholder='Add your task here...'
         aria-label='Add your task here...'
         aria-describedby='button-addon2'
         value={todo}
         onChange={handleChange}
       />
       <div class='input-group-append'>
         <button class='btn btn-primary' type='button' id='button-addon2' onClick={handleSubmit}>
           Add
         </button>
       </div>
     </div>
   </div>
 )
}

export default AddNotes
