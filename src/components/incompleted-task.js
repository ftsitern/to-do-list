import React from 'react'

const IncompleteTask = () => {
 return (
   <div class='text-primary col-sm-6 mx'>
     <h3>Incompleted Tasks</h3>
     <div class='row px-3 align-items-center todo-item rounded'>
       <div class='col-auto m-2  d-flex align-items-center'>
         <input
           class='form-check-input'
           type='checkbox'
           value=''
           id='flexCheckDefault'
         />
       </div>
       <div class='col px-1 m-1 d-flex align-items-center'>
         <input
           type='text'
           class='form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3'
           readonly
           value='Complete 2nd web task by 16th'
           title='Complete 2nd web task by 16th'
         />
       </div>
       <div class='col-auto m-1 p-0 px-3 d-none'></div>
       <div class='col-auto m-1 p-0 todo-actions'>
         <div class='row d-flex align-items-center justify-content-end'>
           <h5 class='m-0 p-0 px-2'>
             <i
               class='fa fa-pencil text-info btn m-0 p-0'
               data-toggle='tooltip'
               data-placement='bottom'
               title='Edit todo'
             ></i>
           </h5>
           <h5 class='m-0 p-0 px-2'>
             <i
               class='fa fa-trash-o text-danger btn m-0 p-0'
               data-toggle='tooltip'
               data-placement='bottom'
               title='Delete todo'
             ></i>
           </h5>
         </div>
       </div>
     </div>
   </div>
 )
}

export default IncompleteTask
