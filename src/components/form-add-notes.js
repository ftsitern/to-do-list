import React from 'react'

const AddNotes = () => {
 return (
   <div className='addNotes '>
     <div class='input-group mx-auto mb-3 w-50'>
       <input
         type='text'
         class='form-control'
         placeholder='Add your task here...'
         aria-label='Add your task here...'
         aria-describedby='button-addon2'
       />
       <div class='input-group-append'>
         <button class='btn btn-primary' type='button' id='button-addon2'>
           Add
         </button>
       </div>
     </div>
   </div>
 )
}

export default AddNotes
