import React from "react";
import { Formik, Form, Field } from "formik";
import JoditEditor from "jodit-react";
import { useMutation } from "react-query";
import axios from "axios";
import { url } from "../Util/url";
import { Row, Col } from "react-bootstrap";
import slugify from "react-slugify";

const AddBlog = () => {
  const createData = async (data) => {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("image", data.image);
      formData.append("content", data.content);
      formData.append("slug", slugify(data.title));
      const response = await axios.post(`${url}/blog/add_blog`, formData);
      return response;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  };

  const mutation = useMutation(createData);

  return (
    <section className="continer pt-5">
      <div className="row">
        <div className="col-md-12">        
        <Formik
          initialValues={{ title: "", description: "", image: "", content: "" }}
          onSubmit={mutation.mutate}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <Row>
              <Col md={6}>
                <div className="form-group">
                <label htmlFor="title">Title:</label>
                <Field className="form-control" type="text" id="title" name="title" />
              </div>
              </Col>

              <Col md={6}>
              <div className="form-group">
                <label htmlFor="description">Description:</label>
                <Field className="form-control" type="text" id="description" name="description" />
              </div>
              </Col>
              </Row>

              <Row>
              <Col md={12}>
              <div className="form-group">
                <label htmlFor="image">Image:</label>
                <input
                className="form-control"
                  type="file"
                  id="image"
                  name="image"
                  onChange={(event) => {
                    setFieldValue("image", event.currentTarget.files[0]);
                  }}
                />
              </div>
              </Col>
              </Row>

              <div className="col-md-12">
                <label htmlFor="content">Content:</label>
                <JoditEditor
                  id="content"
                  name="content"
                  value={values.content}
                  onChange={(value) => setFieldValue("content", value)}
                />
              </div>

              <button type="submit" className="btn btn-primary" disabled={mutation.isLoading}>
                {mutation.isLoading ? "Submitting..." : "Submit"}
              </button>
            </Form>
          )}
        </Formik>
        </div>
      </div>
    </section>
  );
};

export default AddBlog;
