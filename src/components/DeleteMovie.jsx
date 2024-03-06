import React from "react";
import Navi from "./Navi";

const DeleteMovie = () => {
  return (
    <div>
      <Navi />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" />
          <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <div class="card text-center colored-card">
                <div class="card-body">
                  <p class="card-text">
                    <label htmlFor="" className="form-label colored-label">
                      Movie Name
                    </label>
                    <input type="text" className="form-control" />
                  </p>
                  <button className="btn btn-success">Delete</button>
                </div>
              </div>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <div class="card text-center colored-card">
                <div class="card-body">
                  <p class="card-text">
                    <label htmlFor="" className="form-label colored-label">
                      Time slot
                    </label>
                    <input type="text" className="form-control" />
                  </p>
                  <button className="btn btn-success">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteMovie;
