import React from "react";
import Layout from "./layout";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  // MDBIcon,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";

const products = [
  {
    id: 1,
    name: "P&PC, SPC/6Sigma, Failure Investigation, Root Cause Analysis, PDCA, DMAIC, A3",
    imageSrc:
      "https://www.complianceonline.com/images/products/large/706879.jpg",
    price: 199,
    discountedPrice: 249,
    rating: 4,
    numReviews: 310,
    detailsLink: "#",
    features: ["John E Lincoln", " 90 Min", "706963"],
    description:
      "This webinar is intended to provide guidance regarding the CGMPs on manufacturing methods utilizing the US FDA Production and Process Controls for Drugs and Devices and Statistical Process Controls (SPC) as taught by Drs. Demming and others and required also in the CGMPs and under control of variation process guidance.",
  },
  {
    id: 2,
    name: "HVAC and GMP Environmental Control - for Pharmaceutical Cleanrooms",
    imageSrc:
      "https://www.complianceonline.com/images/products/large/703831.jpg",
    price: 199,
    discountedPrice: 229,
    rating: 4,
    numReviews: 289,
    detailsLink: "#",
    features: ["Roger Cowan", "60 Min", "60 Min"],
    description:
      "Environmental control of pharmaceutical cleanrooms is essential to the manufacture of a quality product. Control of such conditions as airborne particulate, microorganisms, temperature, humidity, differential pressure, airflow, air velocity and personnel is crucial to protect the product from contamination. Therefore, the design, validation and ongoing monitoring of a cleanroom HVAC system are necessary to assure the quality and safety of the pharmaceutical",
  },
  {
    id: 3,
    name: "Data Integrity and Privacy: Compliance with 21 CFR Part 11, SaaS/Cloud, EU GDPR",
    imageSrc:
      "https://www.complianceonline.com/images/products/large/701687.JPG",
    price: 249,
    discountedPrice: 279,
    rating: 4,
    numReviews: 289,
    detailsLink: "#",
    features: ["David Nettleton", "90 Min", "701687"],
    description:
      "This 21 CFR Part 11 compliance training will guide you through the requirements of Part 11 and will also explain its 3 primary areas: SOPs, product features and validation (10 step risk based approach).",
  },
  {
    id: 4,
    name: "Unauthorized Transactions – Reg E vs Nacha Operating Rules",
    imageSrc:
      "https://www.complianceonline.com/images/products/large/706856.jpg",
    price: 199,
    discountedPrice: 229,
    rating: 4,
    numReviews: 289,
    detailsLink: "#",
    features: ["Donna K Olheiser", "90 Min", "706856"],
    description:
      "Unauthorized transactions come in many different forms, when returning using Reg E or the Nacha Operating Rules can be confusing. Discussion will include what, why and when while processing unauthorized returns. The trainer will define the limits of liability and who is liable for what amount while providing some real-life scenarios. Details on the error resolution process with Reg E for consumer notification to the financial institution, research time involved, and",
  },
  {
    id: 5,
    name: "FDA Compliant Handling of Out-of-Trend Results in Pharmaceutical Quality Control",
    imageSrc:
      "https://www.complianceonline.com/images/products/large/702540.jpg",
    price: 229,
    discountedPrice: 249,
    rating: 4,
    numReviews: 289,
    detailsLink: "#",
    features: ["Kelly Thomas", "90 Min", "704508"],
    description:
      "This webinar will discuss the FDA requirements and guidelines for investigating Out-of-trend (OOT) results in the pharmaceutical laboratory. It will also cover FDA compliant documentation of OOT, failure investigations, root causes and CAPA.",
  },
  {
    id: 6,
    name: "Family Care and Medical Leave in California - Part II",
    imageSrc:
      "https://www.complianceonline.com/images/panelists/jacquiline-wagner/large.png",
    price: 14.99,
    discountedPrice: 21.99,
    rating: 4,
    numReviews: 289,
    detailsLink: "#",
    features: ["Jacquiline M Wagner", "90 Min", "704508"],
    description:
      "This series of training programs on Family Care and Medical Leave in California will examine compensation while on leave, continuation of benefits while on leave, employer’s prohibited actions under the CFRA, employee’s return to work policies, and more.",
  },
  {
    id: 7,
    name: "Trial Master File and Clinical Data Management Regulated by FDA",
    imageSrc:
      "https://www.complianceonline.com/images/products/large/705360.jpg",
    price: 119,
    discountedPrice: 229,
    rating: 4,
    numReviews: 289,
    detailsLink: "#",
    features: ["Carolyn Troiano", "60 Min", "60 Min"],
    description:
      "This FDA compliance training will cover in detail the new requirements for trial master files including documents related to clinical trials that are required to be prepared, collected and maintained as part of the TMF.",
  },
  {
    id: 8,
    name: "Toxic Substance Control Act (TSCA) Awareness Training 101",
    imageSrc:
      "https://www.complianceonline.com/images/products/large/706205.jpg",
    price: 14.99,
    discountedPrice: 199,
    rating: 4,
    numReviews: 249,
    detailsLink: "#",
    features: ["Joe Keenan", "90 Min", "706205"],
    description:
      "Attend this training to understand all the requirements of the Toxic Substance Control Act (TSCA), its revisions, and how to develop a written plan, TSCA Training Plan. Get answers to your TSCA questions.",
  },
];

function Training() {
  return (
    <Layout>
      <MDBContainer fluid>
        {products.map((product) => (
          <MDBRow className="justify-content-center mb-3" key={product.id}>
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
                    </MDBCol>

                    <MDBCol md="6">
                      <h5 className="text-blue-500">{product.name}</h5>
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
                        <span>{product.features[0]}</span>
                        <span className="ml-4"> Duration : </span>
                        <span>{product.features[1]}</span>
                        <br />
                        <span className=""> ID : </span>

                        <span>{product.features[2]}</span>
                      </div>
                      <div className="mb-2 text-muted small"></div>

                      {/* <p className="text-truncate mb-4 mb-md-0"> */}
                      <p className=" mb-4 mb-md-0">{product.description}</p>
                    </MDBCol>
                    <MDBCol
                      md="6"
                      lg="3"
                      className="border-sm-start-none border-start"
                    >
                      <div className="d-flex flex-row align-items-center mb-1">
                        <h4 className="mb-1 me-1">${product.price}</h4>
                        <span className="text-danger">
                          <s>${product.discountedPrice}</s>
                        </span>
                      </div>
                      {/* <h6 className="text-success">Free shipping</h6> */}
                      <div className="d-flex flex-column mt-4">
                        <MDBBtn color="primary" size="sm">
                          Details
                        </MDBBtn>
                        <MDBBtn
                          outline
                          color="primary"
                          size="sm"
                          className="mt-2"
                        >
                          Add to wish list
                        </MDBBtn>
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
