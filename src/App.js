function App() {
  return (
    <div className="main">
      <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark ">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a
            class="navbar-brand"
            href="https://www.linkedin.com/company/fts-failure-to-success/mycompany/"
          >
            FTS
          </a>
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
          </ul>
          <ul class="navbar-nav">
            <form class="form-inline">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search your task here"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-primary my-2 my-sm-0"
                type="submit"
              >
                <i class="fa fa-search"></i>
              </button>
            </form>
          </ul>
        </div>
      </nav>

      <div class="row m-1 p-4">
        <div class="col">
          <div class="p-1 h1 text-primary text-center mx-auto display-inline-block">
            <i class="fa fa-check bg-primary text-white rounded p-2"></i>
            <span/>
            My To-Do-List
          </div>
        </div>
      </div>
      {/* The input shows to add notes */}
      <div className="addNotes ">
        <div class="input-group mx-auto mb-3 w-50">
          <input
            type="text"
            class="form-control"
            placeholder="Add your task here..."
            aria-label="Add your task here..."
            aria-describedby="button-addon2"
          />
          <div class="input-group-append">
            <button class="btn btn-primary" type="button" id="button-addon2">
              Add
            </button>
          </div>
        </div>
      </div>

      {/* Rest of the container items except nvabar */}
      <div class="container ">
        <div class="row mx-auto my-8">
          {/* Section for completed tasks  */}
          <div class="text-primary col-sm-6">
            <h3>Completed Tasks</h3>
            <div class="row px-3 align-items-center todo-item rounded">
              <div class="col-auto m-2  d-flex align-items-center">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </div>
              <div class="col px-1 m-1 d-flex align-items-center">
                <input
                  type="text"
                  class="form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3"
                  readonly
                  value="1st web task completed on 9th"
                  title="1st web task completed on 9th"
                />
              </div>
              <div class="col-auto m-1 p-0 px-3 d-none"></div>
              <div class="col-auto m-1 p-0 todo-actions">
                <div class="row d-flex align-items-center justify-content-end">
                  <h5 class="m-0 p-0 px-2">
                    <i
                      class="fa fa-pencil text-info btn m-0 p-0"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Edit todo"
                    ></i>
                  </h5>
                  <h5 class="m-0 p-0 px-2">
                    <i
                      class="fa fa-trash-o text-danger btn m-0 p-0"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Delete todo"
                    ></i>
                  </h5>
                </div>
              </div>
            </div>
          </div>

          {/*  Incompleted tasks */}
          <div class="text-primary col-sm-6 mx">
            <h3>Incompleted Tasks</h3>
            <div class="row px-3 align-items-center todo-item rounded">
              <div class="col-auto m-2  d-flex align-items-center">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </div>
              <div class="col px-1 m-1 d-flex align-items-center">
                <input
                  type="text"
                  class="form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3"
                  readonly
                  value="Complete 2nd web task by 16th"
                  title="Complete 2nd web task by 16th"
                />
              </div>
              <div class="col-auto m-1 p-0 px-3 d-none"></div>
              <div class="col-auto m-1 p-0 todo-actions">
                <div class="row d-flex align-items-center justify-content-end">
                  <h5 class="m-0 p-0 px-2">
                    <i
                      class="fa fa-pencil text-info btn m-0 p-0"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Edit todo"
                    ></i>
                  </h5>
                  <h5 class="m-0 p-0 px-2">
                    <i
                      class="fa fa-trash-o text-danger btn m-0 p-0"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Delete todo"
                    ></i>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
