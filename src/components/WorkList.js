import React from "react";

const WorkList = () => {
  return (
    <div class="container-fluid bg-3 text-center">
      <h3>Projects</h3>
      <hr></hr>
      <div class="row">
        <div className="col-lg-4 col-md-4 col-sm-6">
          <a href="https://illyako.github.io/shoppies-omdb-api/">
            <p>Movie Search</p>
            <img
              className="img-fluid d-none d-lg-block"
              src="https://drive.google.com/uc?export=view&id=13gHAPfiMLUGIxQEAuZwCcDZWR_J2VBfm"
              alt="WorkImage1"
            />
          </a>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-6">
          <p>Bakery</p>
          <img
            className="img-fluid d-none d-lg-block"
            src="https://drive.google.com/uc?export=view&id=1gbsEjsLnKqO0UC8rb1y_3VKqB6rcOKUx"
            alt="WorkImage2"
          />
        </div>
        <div class="col-lg-4 col-md-4 col-sm-6">
          <p>E-Store</p>
          <img
            className="img-fluid d-none d-lg-block"
            src="https://drive.google.com/uc?export=view&id=1xYsgAwfVk1MB3g0L-3x6M72Aup5q_TlC"
            alt="WorkImage3"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkList;
