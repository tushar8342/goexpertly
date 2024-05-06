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
    name: "Learn Python: The Complete Python Programming Course",
    imageSrc:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    price: 13.99,
    discountedPrice: 20.99,
    rating: 4,
    numReviews: 310,
    detailsLink: "#",
    features: ["Tushar Kumar Sahu", "60", "56564"],
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  },
  {
    id: 2,
    name: "Javascript for beginners",
    imageSrc:
      "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    price: 14.99,
    discountedPrice: 21.99,
    rating: 4,
    numReviews: 289,
    detailsLink: "#",
    features: ["Ajay Kumar", "45", "111111"],
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
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
                    <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
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
