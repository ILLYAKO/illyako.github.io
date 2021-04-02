import React from "react";

const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-4 text-center">My portfolio</h1>
      <hr></hr>
      <img
        className="img-fluid d-md-block d-sm-none"
        src="https://drive.google.com/uc?export=view&id=1672nK88wqJnM6nkCUPfzQBYF1bl3ojvX"
        alt="Jumbotron"
      ></img>
      <p className="lead">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      {/* <hr className="my-4" /> */}
      {/* <p>
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p> */}
      {/* <p className="lead">
        <a className="btn btn-primary btn-lg" href="/" role="button">
          Learn more
        </a>
      </p> */}
    </div>
  );
};

export default Jumbotron;
