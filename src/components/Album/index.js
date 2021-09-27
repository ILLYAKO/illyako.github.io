import React from "react";
import Card from "./Card";
import Heading from "./Heading";
import { projectList } from "../../store/projectList";

const Album = () => {
  return (
    <>
      <Heading />
      <div class="album py-5">
        <div class="container">
          <div class="row">
            {projectList.map((project) => (
              <div class="col-md-4">
                <Card {...project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Album;
