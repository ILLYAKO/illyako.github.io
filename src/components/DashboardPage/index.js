import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { addProject } from "../../store/actions/projectAction";

const DashboardPage = (props) => {
  const [previewSource, setPreviewSource] = useState("");

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const previewFile = (file) => {
    try {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPreviewSource(reader.result);
      };
    } catch (error) {}
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries());
    props.addProject(formDataObj); // redux
  };

  return (
    <div className="container">
      <Form onSubmit={onFormSubmit} className="container">
        <h3>New project</h3>
        <Button variant="primary" type="submit">
          Add Project
        </Button>
        <Form.Group className="mb-3" controlId="formProjectTitle">
          <Form.Label>Project title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="Enter project title"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formProjectStack">
          <Form.Label>Project technical stack</Form.Label>
          <Form.Control
            type="text"
            name="stack"
            placeholder="Add project technical stack"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formProjectDescriptiom">
          <Form.Label>Project description</Form.Label>
          <Form.Control
            name="description"
            as="textarea"
            placeholder="Add project description here"
            style={{ height: "100px" }}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formProjectUrl">
          <Form.Label>Project demo link</Form.Label>
          <Form.Control
            type="text"
            name="url"
            placeholder="Enter project demo link"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formProjectGithubUrl">
          <Form.Label>Project Github repository</Form.Label>
          <Form.Control
            type="text"
            name="githuburl"
            placeholder="Add Github repository"
            required
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Project screenshot</Form.Label>
          <Form.Control
            type="file"
            name="image"
            onChange={handleFileInputChange}
            accept="image/*"
            required
          />
        </Form.Group>
      </Form>
      {previewSource && (
        <img src={previewSource} alt="chosen" style={{ height: "300px" }} />
      )}
    </div>
  );
};

export default connect(null, { addProject })(DashboardPage);
