import React, { useState, useEffect } from "react";
import Layout from "./layout";
import { useCoursesContext } from "../context/courses_context";
import { Link } from "react-router-dom";
import { Oval } from "react-loader-spinner";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  // MDBIcon,
  // MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";

function Training() {
  const { courses } = useCoursesContext();
  const [loading, setLoading] = useState(true);
  // console.log('coursess:', courses)
  // if (!courses || courses.length === 0) {
  //   return <p>No courses available.</p>;
  // }

  // Now it's safe to access the first course
  // const { id, name } = courses
  // console.log("id:", id, name);

  useEffect(() => {
    if (courses && courses.length > 0) {
      setLoading(false);
    }
  }, [courses]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Oval
          height={50}
          width={50}
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    );
  }

  return (
    <Layout>
      <MDBContainer fluid>
        {courses?.map((course) => (
          <MDBRow
            className="justify-content-center mb-3"
            key={course?.courseID}
          >
            <MDBCol md="12" xl="10">
              <MDBCard className="shadow-0 border rounded-3">
                <MDBCardBody>
                  <MDBRow>
                    {/* <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                      <MDBRipple
                        rippleColor="light"
                        rippleTag="div"
                        className="bg-image rounded hover-zoom hover-overlay"
                      >
                        <MDBCardImage
                          src={product.imageSrc}
                          fluid
                          className="w-100"
                        />
                        <a href={product.detailsLink}>
                          <div
                            className="mask"
                            style={{
                              backgroundColor: "rgba(251, 251, 251, 0.15)",
                            }}
                          ></div>
                        </a>
                      </MDBRipple>
                    </MDBCol> */}
                    <MDBCol
                      md="12"
                      lg="3"
                      className="mb-4 mb-lg-0 d-flex align-items-center justify-content-center"
                    >
                      <MDBRipple
                        rippleColor="light"
                        rippleTag="div"
                        className="bg-image rounded hover-zoom hover-overlay"
                      >
                        <MDBCardImage
                          src={course?.imageSrc}
                          fluid
                          className="w-100"
                        />
                        <a href={course?.detailsLink}>
                          <div
                            className="mask"
                            style={{
                              backgroundColor: "rgba(251, 251, 251, 0.15)",
                            }}
                          ></div>
                        </a>
                      </MDBRipple>
                    </MDBCol>
                    <MDBCol md="6">
                      <h5 className="text-blue-500">{course?.title}</h5>
                      {/* <div className="d-flex flex-row">
                        <div className="text-danger mb-1 me-2">
                          {[...Array(product.rating)].map((_, index) => (
                            <MDBIcon fas icon="star" key={index} />
                          ))}
                        </div>
                        <span>{product.numReviews}</span>
                      </div> */}
                      {/* <div className="mt-1 mb-0 text-muted small">
                        {product.features.map((feature, index) => (
                          <React.Fragment key={index}>
                            <span>{feature}</span>
                            {index !== product.features.length - 1 && (
                              <span className="text-primary"> • </span>
                            )}
                          </React.Fragment>
                        ))}
                      </div> */}
                      <div className="mt-1 mb-0 text-muted small">
                        <span> Name: </span>
                        <span>{course?.instructors.replace(/"/g, "")}</span>
                        <span className="ml-4"> Duration : </span>
                        <span>{course?.duration}</span>
                        <br /> {/* <span className=""> ID : </span> */}
                        {/* <span>{courses.features[2]}</span> */}
                      </div>
                      <div className="mb-2 text-muted small"></div>
                      <p className=" mb-4 mb-md-0">{course?.description}</p>
                    </MDBCol>
                    <MDBCol
                      md="6"
                      lg="3"
                      className="border-sm-start-none border-start"
                    >
                      <div className="d-flex flex-row align-items-center mb-1">
                        {course?.discountedPrice ? (
                          <>
                            <h4 className="mb-1 me-1">
                              ${course.discountedPrice}
                            </h4>
                            <span className="text-danger">
                              <s>${course.price}</s>
                            </span>
                          </>
                        ) : (
                          <h4 className="mb-1 me-1">${course.price}</h4>
                        )}
                      </div>
                      <div className="d-flex flex-column mt-4">
                        <Link
                          to={`/training/${course?.courseID}`}
                          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
                        >
                          Details
                        </Link>{" "}
                        {/* <MDBBtn
                          outline
                          color="primary"
                          size="sm"
                          className="mt-2"
                        >
                          Add to wish list
                        </MDBBtn> */}
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        ))}
      </MDBContainer>
    </Layout>
  );
}

export default Training;
