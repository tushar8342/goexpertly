import React from "react";
import Layout from "./layout";
// import { useCoursesContext } from "../context/courses_context";
import { Link } from "react-router-dom";
// import { Oval } from "react-loader-spinner";
// import parse from "html-react-parser";
// import {
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardBody,
//   MDBCardImage,
//   // MDBIcon,
//   // MDBBtn,
//   MDBRipple,
// } from "mdb-react-ui-kit";

function Resources() {
  const handleDetailsClick = () => {
    console.log("check");
  };
  return (
    <Layout>
      <>
        <section className="bg-white dark:bg-gray-900">
          <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
            <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
              <span className="text-blue-500">Resources</span>
            </h2>
          </div>
        </section>
        <section className="bg-white dark:bg-gray-900">
          <div className="container items-center px-4 py-12 mx-auto">
            <div className="flex items-center">
              {/* <span className="text-gray-500 dark:text-gray-400 mr-2">➡️</span> */}
              <Link
                onClick={handleDetailsClick}
                to={`/resources/5-best-practices-for-handling-workplace-sexual-harassment-complaints`}
                className="hover:underline"
              >
                <h5 className="text-blue-500">
                  Handling Workplace Sexual Harassment Complaints - 5 Best
                  Practices Every HR Professional Should Follow
                </h5>
              </Link>
            </div>
            <p className="mt-2 mb-4 mb-md-0">
              Avoid EEOC enforcement actions and legal penalties by ensuring
              that the HR department has a robust process to handle workplace
              sexual harassment complaints.
              <Link
                onClick={handleDetailsClick}
                to={`/resources/5-best-practices-for-handling-workplace-sexual-harassment-complaints`}
                className=" ml-2"
              >
                Read more...
              </Link>
            </p>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900">
          <div className="container ">
            <div>
              <div>
                <hr
                  style={{
                    border: "none",
                    borderTop: "2px dotted black",
                    margin: "0",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900">
          <div className="container items-center px-4 py-12 mx-auto">
            <div className="flex items-center">
              {/* <span className="text-gray-500 dark:text-gray-400 mr-2">➡️</span> */}
              <Link
                onClick={handleDetailsClick}
                to={`/resources/california-leaves-of-absence-employers-must-understand-compliance`}
                className="hover:underline"
              >
                <h5 className="text-blue-500">
                  California Leave of Absence - Why Employers Must Understand
                  Compliance
                </h5>
              </Link>
            </div>
            <p className="mt-2 mb-4 mb-md-0">
              California leaves of Absence - Why should employers with
              California-based employees be aware of the laws that regulate
              leaves of absence? Why should you know how to respond to an
              employee requesting and/or taking a leave of absence? Well,
              dealing with leave of absence is an inevitable part of being in a
              leadership role
              <Link
                onClick={handleDetailsClick}
                to={`/resources/california-leaves-of-absence-employers-must-understand-compliance`}
                className=" ml-2"
              >
                Read more...
              </Link>
            </p>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900">
          <div className="container ">
            <div>
              <div>
                <hr
                  style={{
                    border: "none",
                    borderTop: "2px dotted black",
                    margin: "0",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900">
          <div className="container items-center px-4 py-12 mx-auto">
            <div className="flex items-center">
              {/* <span className="text-gray-500 dark:text-gray-400 mr-2">➡️</span> */}
              <Link
                onClick={handleDetailsClick}
                to={`/resources/project-management-for-human-resource-managers`}
                className="hover:underline"
              >
                <h5 className="text-blue-500">
                  Project Management for Human Resource Managers
                </h5>
              </Link>
            </div>
            <p className="mt-2 mb-4 mb-md-0">
              As an HR Manager, you are asked to juggle a wide range of
              assignments and sometimes add on special assignments as needed.
              Attracting new talent, completing annual performance reviews,
              launching and executing new training programs, are some examples
              of the projects that you complete. You are also often called upon
              to handle organization-wide projects that involve multiple
              departments and interdisciplinary teams.
              <Link
                onClick={handleDetailsClick}
                to={`/resources/project-management-for-human-resource-managers`}
                className=" ml-2"
              >
                Read more...
              </Link>
            </p>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900">
          <div className="container ">
            <div>
              <div>
                <hr
                  style={{
                    border: "none",
                    borderTop: "2px dotted black",
                    margin: "0",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* <section className="bg-white dark:bg-gray-900">
          <div className="container items-center px-4 py-12 mx-auto">
            <div className="flex items-center">
              <Link
                onClick={handleDetailsClick}
                to={`/resources/how-metrics-can-help-avoid-common-compliance-mistakes`}
                className="hover:underline"
              >
                <h5 className="text-blue-500">
                  How Metrics Help Avoid Common Compliance Mistakes
                </h5>
              </Link>
            </div>
            <p className="mt-2 mb-4 mb-md-0">
              Many organizations reserve huge budgets and spend a vast amount of
              time on compliance, only to make some simple mistakes that cost
              them financially. One of the issues is that compliance training is
              not the only important factor. We need to look at whether it gets
              measured and how these measurements are taken. A lot of firms
              treat compliance as a box to be ticked and simply force their
              employees to attend a training and confirm they understand.
              Without assessing the effectiveness, this is not the best use of
              time or resources
              <Link
                onClick={handleDetailsClick}
                to={`/resources/how-metrics-can-help-avoid-common-compliance-mistakes`}
                className=" ml-2"
              >
                Read more...
              </Link>
            </p>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900">
          <div className="container ">
            <div>
              <div>
                <hr
                  style={{
                    border: "none",
                    borderTop: "2px dotted black",
                    margin: "0",
                  }}
                />
              </div>
            </div>
          </div>
        </section> */}

        {/* <section className="bg-white dark:bg-gray-900">
          <div className="container items-center px-4 py-12 mx-auto">
            <div className="flex items-center">
              <Link
                onClick={handleDetailsClick}
                to={`/resources/the-coronavirus-aid-relief-and-economic-security-cares-act-and-its-impact-on-unemployment-insurance`}
                className="hover:underline"
              >
                <h5 className="text-blue-500">
                  The Coronavirus Aid Relief and Economic Security (CARES) Act:
                  Its Impact on Unemployment Insurance
                </h5>
              </Link>
            </div>
            <p className="mt-2 mb-4 mb-md-0">
              The CARES Act imposes important new requirements on the
              Federal-State Unemployment Insurance Program. With the increase in
              checks being converted to electronic transactions, the Automated
              Clearing House transaction volume is also rapidly growing
              especially with the introduction of same-day processing. Also,
              many types of ACH products and services are introduced to
              consumers and businesses. As with all other payment systems, there
              is risk in ACH network.
              <Link
                onClick={handleDetailsClick}
                to={`/resources/the-coronavirus-aid-relief-and-economic-security-cares-act-and-its-impact-on-unemployment-insurance`}
                className=" ml-2"
              >
                Read more...
              </Link>
            </p>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900">
          <div className="container ">
            <div>
              <div>
                <hr
                  style={{
                    border: "none",
                    borderTop: "2px dotted black",
                    margin: "0",
                  }}
                />
              </div>
            </div>
          </div>
        </section> */}
      </>
    </Layout>
  );
}

export default Resources;
