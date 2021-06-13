import React from 'react'

const Display = (props) => {
   const {list, editTask}=props

 return (
  <div>
   {list.map((Task)=>{
    const {id,task}=Task
    return (
        <div class='row px-3 align-items-center todo-item rounded' key={id}>
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
              value={task}
              title={task}
            />
          </div>
          <div class='col-auto m-1 p-0 px-3 d-none'></div>
          <div class='col-auto m-1 p-0 todo-actions'>
              <button className="btn btn-outline-primary" value={id} onClick={editTask} style={{margin: 10}}>
                Edit
              </button>
              <button className="btn btn-primary btn-danger">
                Delete
              </button>
          </div>
        </div>
      
    )
})}
  </div>
 )
}

export default Display
