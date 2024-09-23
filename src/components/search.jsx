import React, { useState, useEffect } from "react";
import Layout from "./layout";
import { Link, useLocation } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import parse from "html-react-parser";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRipple,
} from "mdb-react-ui-kit";

function Search() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");

  const truncateText = (text, wordLimit) =>
    text.split(" ").slice(0, wordLimit).join(" ") +
    (text.split(" ").length > wordLimit ? "..." : "");

  useEffect(() => {
    if (query) {
      setLoading(true);
      fetch(`https://api.goexpertly.com/admin/courses/search?keyword=${query}`)
        .then((response) => response.json())
        .then((data) => {
          setCourses(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
    }
  }, [query]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Oval
          height={50}
          width={50}
          color="#4fa94d"
          wrapperStyle={{}}
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    );
  }

  function convertMinutes(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    if (minutes <= 60) {
      return `${minutes} min`;
    }

    return `${hours} hour${hours > 1 ? "s" : ""} ${remainingMinutes} min`;
  }

  return (
    <Layout>
      <MDBContainer fluid>
        {courses.length > 0 ? (
          courses.map((course) => (
            <MDBRow
              className="justify-content-center mb-3"
              key={course?.courseID}
            >
              <MDBCol md="12" xl="10">
                <MDBCard className="shadow-0 border rounded-3">
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol
                        md="12"
                        lg="3"
                        className="mb-4 mb-lg-0 d-flex align-items-center justify-content-center flex-column"
                      >
                        <MDBRipple
                          rippleColor="light"
                          rippleTag="div"
                          className="bg-image rounded hover-zoom hover-overlay"
                        >
                          <MDBCardImage
                            src={course?.imageSrc}
                            fluid
                            style={{
                              width: "160px",
                              height: "160px",
                              objectFit: "cover",
                            }}
                            className="fixed-size-image"
                          />
                        </MDBRipple>
                      </MDBCol>

                      <MDBCol md="6">
                        <Link
                          to={
                            course?.archieve === true
                              ? `/archive/${course?.courseID}`
                              : `/training/${course?.courseID}`
                          }
                        >
                          <h5 className="text-blue-500">{course?.title}</h5>
                        </Link>

                        <div className="mt-1 mb-0 text-muted small">
                          <span> Name: </span>
                          <span>{course?.instructor}</span>
                          <span className="ml-4"> Duration : </span>
                          <span>{convertMinutes(course?.duration)}</span>
                          <br />
                        </div>
                        <p className=" mb-4 mb-md-0">
                          {course?.description
                            ? parse(truncateText(course.description, 48))
                            : null}
                        </p>
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
                                ${course?.discountedPrice}
                              </h4>
                              <span className="text-danger">
                                <s>
                                  $
                                  {course?.Pricings[0]?.price
                                    ? course?.Pricings[1]?.price
                                    : course?.price}
                                </s>
                              </span>
                            </>
                          ) : (
                            <h4 className="mb-1 me-1">
                              $
                              {course?.Pricings[0]?.price
                                ? course?.Pricings[0]?.price
                                : course?.price}
                            </h4>
                          )}
                        </div>
                        {(course?.archieve === null ||
                          course?.archieve === false) &&
                        course?.webinarDate ? (
                          <div className=" bg-gradient-to-r from-black via-black/80 to-black/40 text-white font-bold text-center py-2 mt-2 rounded">
                            {new Date(course?.webinarDate).toLocaleDateString(
                              "en-US",
                              {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            )}
                          </div>
                        ) : null}
                        <Link
                          to={
                            course?.archieve === true
                              ? `/archive/${course?.courseID}`
                              : `/training/${course?.courseID}`
                          }
                          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
                        >
                          Details
                        </Link>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          ))
        ) : (
          <div className="flex justify-center items-center h-screen">
            <h3 className="text-gray-500 text-center">No Products Found</h3>
          </div>
        )}
      </MDBContainer>
    </Layout>
  );
}

export default Search;
