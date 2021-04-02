import React from "react";

const WorkList = () => {
  return (
    <div class="container-fluid bg-3 text-center">
      <h3>Some of my Work</h3>
      <hr></hr>
      <div class="row">
        <div class="col-lg-3 col-md-4 col-sm-6">
          <p>Movie Search</p>
          <img
            className="img-fluid d-md-block d-sm-none"
            src="https://drive.google.com/uc?export=view&id=13gHAPfiMLUGIxQEAuZwCcDZWR_J2VBfm"
            // class="img-responsive"
            // style={{"width":"100%"}}
            alt="WorkImage12"
          />
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6">
          <p>Some text..</p>
          <img
            src="/"
            class="img-responsive"
            // style="width:100%"
            alt="WorkImage"
          />
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6">
          <p>Some text..</p>
          <img
            src="/"
            class="img-responsive"
            // style="width:100%"
            alt="WorkImage"
          />
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6">
          <p>Some text..</p>
          <img
            src="/"
            class="img-responsive"
            // style="width:100%"
            alt="WorkImage"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkList;
