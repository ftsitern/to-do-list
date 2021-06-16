import React from "react";

const Navbar = () => {
  return (
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
            <a
              class="nav-link"
              href="#"
            >
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
            <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">
              <i class="fa fa-search"></i>
            </button>
          </form>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
