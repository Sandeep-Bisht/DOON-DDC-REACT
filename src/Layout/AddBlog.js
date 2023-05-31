import React from "react";
import { Formik, Form, Field } from "formik";
import { Table, Input, Space, Popconfirm, Typography } from "antd";
import { MdPlaylistAdd } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import JoditEditor from "jodit-react";
import { useMutation } from "react-query";
import axios from "axios";
import { url } from "../Util/url";
import { Row, Col } from "react-bootstrap";
import slugify from "react-slugify";
import { useState } from "react";
import { useEffect } from "react";
import "../Css/AddBlog.css"

const AddBlog = () => {
  const [allBlogs, setAllBlogs] = useState(undefined);
  const [searchVal, setSearchVal] = useState();
  const [addBlog, setAddBlog] = useState(false);

  useEffect(() => {
    getAllBlogs();
  }, []);

  const getAllBlogs = async () => {
    const response = await axios.get(`${url}/blog/find_all_blog`);
    setAllBlogs(response.data);
  };

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

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "tile",
    },

    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Image",
      dataIndex: "featuredImage[0].path",
      key: "featuredImage",
      // width: 20,
      // maxWidth: 20,
      render: (t, r) => (
        <img className="w-25" src={`${url}/${r.featuredImage.path}`} />
      ),
    },
    {
      title: "Action",
      dataIndex: "Action",
      width: "20%",
      render: (_, record) =>
        allBlogs.length >= 1 ? (
          <Space size="middle">
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => handleDelete(record._id)}
            >
              <a
                className="delete-icon-wrap"
                title="Delete"
                style={{ color: "blue" }}
              >
                <BsTrash className="text-danger" />
              </a>
            </Popconfirm>
          </Space>
        ) : null,
    },
  ];

  const searchHandler = () => {
    const filteredData = allBlogs.filter((value) => {
      return value.title.toLowerCase().includes(searchVal.toLowerCase());
    });
    setAllBlogs(filteredData);
  };

  const onChangeHandler = (e) => {
    setSearchVal(e.target.value);
    if (e.target.value === "") {
      setAllBlogs();
    }
  };

  const handleDelete = async (_id) => {
    try {
      //const DeletedData=await axios.delete(`${baseUrl}/api/blogs/delete_slug_by_id`,{data : {_id:_id}});
      getAllBlogs();
    } catch (error) {}
  };

  return (
    <section className="container-fluid pt-5">
      {addBlog ? (
        <>
          <div className="row">
            <div className="col-md-12">
              <h1 className="common-heading d-flex align-items-center justify-content-center mb-4">
                <span className="bar one"></span>Create Blogs
                <span className="bar two"></span>
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Formik
                initialValues={{
                  title: "",
                  description: "",
                  image: "",
                  content: "",
                }}
                onSubmit={mutation.mutate}
              >
                {({ values, setFieldValue }) => (
                  <Form>
                    <Row>
                      <Col md={6}>
                        <div className="form-group">
                          <label htmlFor="title">Title:</label>
                          <Field
                            className="form-control"
                            type="text"
                            id="title"
                            name="title"
                          />
                        </div>
                      </Col>

                      <Col md={6}>
                        <div className="form-group">
                          <label htmlFor="description">Description:</label>
                          <Field
                            className="form-control"
                            type="text"
                            id="description"
                            name="description"
                          />
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
                              setFieldValue(
                                "image",
                                event.currentTarget.files[0]
                              );
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

                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={mutation.isLoading}
                    >
                      {mutation.isLoading ? "Submitting..." : "Submit"}
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="row">
            <div className="col-md-12">
              <h1 className="common-heading d-flex align-items-center justify-content-center mb-4">
                <span className="bar one"></span>All Blogs
                <span className="bar two"></span>
              </h1>
            </div>
          </div>
            <div className="row px-0 dashboard-container">
              <div className="col-md-12">
                <div className="all-products-details-section">
                  <div className="blog-header">
                    <div>
                    <button
                      className="btn btn-primary"
                      onClick={() => setAddBlog(true)}
                    >
                      <MdPlaylistAdd />
                      Add
                    </button>
                    </div>

                    <div>                  
                    
                    <input
                      type="text"
                      onChange={(e) => onChangeHandler(e)}
                      onKeyUp={searchHandler}
                      placeholder="Search.."
                      enterButton
                      style={{ position: "sticky", top: "0", left: "0" }}
                    />
                    <button type="button" className="">
                      <BiSearchAlt />
                    </button>
                    </div>
                  </div>
                </div>
                <Table
                  rowKey="name"
                  dataSource={allBlogs && allBlogs.length ? allBlogs : ""}
                  columns={columns}
                  pagination={false}
                />
              </div>
            </div>
          
        </>
      )}
    </section>
  );
};

export default AddBlog;
