import React from "react";

const Footer = () => {
  return (
    <>
      {/* <!-- Footer --> */}
      <footer className="bg-light text-center text-lg-start">
        {/* <!-- Grid container --> */}
        <div className="container p-4">
          {/* <!--Grid row-->/ */}
          <div className="row">
            {/* <!--Grid column--> */}
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase">Footer Content</h5>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                atque ea quis molestias. Fugiat pariatur maxime quis culpa
                corporis vitae repudiandae aliquam voluptatem veniam, est atque
                cumque eum delectus sint!
              </p>
            </div>
            {/* <!--Grid column--> */}

            {/* <!--Grid column--> */}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-dark">
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    Link 2
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    Link 3
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>
            {/* <!--Grid column-->

      <!--Grid column--> */}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-0">Links</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!" className="text-dark">
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    Link 2
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    Link 3
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>
            {/* <!--Grid column--> */}
          </div>
          {/* <!--Grid row--> */}
        </div>
        {/* <!-- Grid container --> */}

        {/* <!-- Copyright --> */}
        <div
          className="text-center p-3"
          // style="background-color: rgba(0, 0, 0, 0.2);"
        >
          © 2021 Copyright:
          <a className="text-dark" href="https://illyako.github.io/">
            ILLYA
          </a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
      {/* <!-- Footer --> */}
    </>
  );
};

export default Footer;
