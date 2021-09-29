import React, { useEffect } from "react";
import { connect } from "react-redux";
import Card from "./Card";
import Heading from "./Heading";
import { fetchProjects } from "../../store/actions/projectAction";

const Album = (props) => {
  const { projects } = props;

  useEffect(() => {
    props.fetchProjects();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <Heading />
      <div className="album py-5">
        <div className="row">
          {projects?.map((project) => (
            <div key={project.id} className="col-md-4">
              <Card {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  projects: state.projectReducer.items,
  newProject: state.projectReducer.item,
});

export default connect(mapStateToProps, { fetchProjects })(Album);
