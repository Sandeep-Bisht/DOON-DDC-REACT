import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { BiSearchAlt } from "react-icons/bi";
import axios from "axios";
import { url } from "../Util/url";

const People = () => {
  const [patientList, setPatientList] = useState("");
  const [searchVal, setSearchVal] = useState();

  useEffect(() => {
    getAllPatients();
  }, []);


  const getAllPatients = async () => {
    const response = await axios.get(`${url}/patient/get_patient`);
    setPatientList(response.data.data)
  }

  console.log(patientList, "patientListpatientList")

  const onChangeHandler = (e) => {
    setSearchVal(e.target.value);
    if (e.target.value === "") {
      getAllPatients();
    }
  };

  const searchHandler = () => {
    const filteredData = patientList.filter((value) => {
      return value.name.toLowerCase().includes(searchVal.toLowerCase());
    });
    setPatientList(filteredData);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "ContactNo",
      dataIndex: "contactNo",
      key: "contactNo",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
   
  ];

  return (
    <>
      <section id="body-pd">
        <div className="row">
          <div className="col-md-12">
            <h1 className="common-heading d-flex align-items-center justify-content-center mb-4">
              <span className="bar one"></span>All Patient
              <span className="bar two"></span>
            </h1>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row px-0 dashboard-container">
            <div className="col-xl-10 col-lg-9 col-md-9 col-sm-8 col-8 mt-2">
              <div className="all-products-details-section">
                <div className="all-products-search-wrap">
                  <input
                    type="text"
                    onChange={(e) => onChangeHandler(e)}
                    onKeyUp={searchHandler}
                    placeholder="Search.."
                    enterButton
                    style={{ position: "sticky", top: "0", left: "0" }}
                  />
                  <button type="button" className="dashboard-search-btn">
                    <BiSearchAlt />
                  </button>
                </div>
              </div>
              <Table
                rowKey="name"
                dataSource={patientList && patientList.length ? patientList : ""}
                columns={columns}
                pagination={false}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default People;
